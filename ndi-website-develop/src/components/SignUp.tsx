import React, { useEffect, useState } from 'react'
import { DataStore as DS } from 'aws-amplify'
import { EventSignUp } from '@/models'
import Image from 'next/image'
import PageLoader from './Loader/PageLoader'

interface SignUpProps {
  isOpen: boolean
  onRequestClose: () => void
  eventName: string | null
  openModal: () => void
}

const SignUp: React.FC<SignUpProps> = ({
  isOpen,
  onRequestClose,
  eventName,
  openModal
}) => {
  const initialFormState = {
    firstName: '',
    lastName: '',
    organizationORCompany: '',
    designation: '',
    mobileNumber: '',
    email: '',
    linkedInURL: '',
    eventName: ''
  }
  const [formState, setFormState] = useState(initialFormState)
  const [notification, setNotification] = useState<string | null>(null)
  const [failedNotification, setfailedNotification] = useState<string | null>(
    null
  )
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isOpen && eventName) {
      setFormState((prevState) => ({
        ...prevState,
        eventName
      }))
    }
  }, [isOpen, eventName])

  useEffect(() => {
    if (notification || failedNotification) {
      const timer = setTimeout(() => {
        setNotification(null)
        setfailedNotification(null)
        setFormState(initialFormState)
      }, 10000)

      return () => clearTimeout(timer)
    }
    return undefined
  }, [notification, failedNotification])

  const handleClose = () => {
    setNotification(null)
    setFormState(initialFormState)
    onRequestClose()
  }

  const handleFailedNotoficationClose = () => {
    setfailedNotification(null)
    setFormState(initialFormState)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const mobileNumber = parseInt(formState.mobileNumber, 10)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formState.email,
          firstName: formState.firstName,
          lastName: formState.lastName,
          eventName: formState.eventName
        })
      })
      if (!response.ok) {
        setfailedNotification('Failed')
        setFormState(initialFormState)
        onRequestClose()
        setLoading(false)
        throw new Error(`Failed to send email: ${response.statusText}`)
      }
      await DS.save(
        new EventSignUp({
          ...formState,
          mobileNumber: Number.isNaN(mobileNumber) ? null : mobileNumber
        })
      )
      setNotification('Successful')
      setFormState(initialFormState)
      onRequestClose()
      setLoading(false)
    } catch (error) {
      setfailedNotification('Failed')
      // eslint-disable-next-line no-console
      console.error('Error signing up for event:', error)
      onRequestClose()
      setLoading(false)
    }
  }

  const tryAgain = () => {
    setfailedNotification(null)
    onRequestClose()
    setFormState(initialFormState)
    setTimeout(() => {
      openModal()
    }, 0)
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75">
          <div className="relative bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-3xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <button
              onClick={onRequestClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              type="button"
            >
              <Image
                src="/close.svg"
                alt="close"
                width={15}
                height={15}
                className="mb-4"
              />
            </button>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name <span className="text-red-500">*</span>
                    <input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formState.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-custom-green rounded-md placeholder-placeholder-gray focus:outline-none focus:ring-1 focus:ring-custom-green-dark focus:border-custom-green-dark"
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name <span className="text-red-500">*</span>
                    <input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formState.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-custom-green rounded-md placeholder-placeholder-gray focus:outline-none focus:ring-1 focus:ring-custom-green-dark focus:border-custom-green-dark"
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="organizationORCompany"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Organization or Company{' '}
                    <span className="text-red-500">*</span>
                    <input
                      id="organizationORCompany"
                      name="organizationORCompany"
                      placeholder="Bhutan National Identity"
                      value={formState.organizationORCompany}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-custom-green rounded-md placeholder-placeholder-gray focus:outline-none focus:ring-1 focus:ring-custom-green-dark focus:border-custom-green-dark"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="designation"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Designation <span className="text-red-500">*</span>
                    <input
                      id="designation"
                      name="designation"
                      placeholder="Product Manager"
                      value={formState.designation}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-custom-green rounded-md placeholder-placeholder-gray focus:outline-none focus:ring-1 focus:ring-custom-green-dark focus:border-custom-green-dark"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mobile Number <span className="text-red-500">*</span>
                    <input
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="xxxxxxxx"
                      value={formState.mobileNumber}
                      onChange={handleChange}
                      type="tel"
                      required
                      className="w-full px-3 py-2 border border-custom-green rounded-md placeholder-placeholder-gray focus:outline-none focus:ring-1 focus:ring-custom-green-dark focus:border-custom-green-dark"
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                    <input
                      id="email"
                      name="email"
                      placeholder="johndoe@gmail.com"
                      value={formState.email}
                      onChange={handleChange}
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-custom-green rounded-md placeholder-placeholder-gray focus:outline-none focus:ring-1 focus:ring-custom-green-dark focus:border-custom-green-dark"
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="linkedInURL"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    LinkedIn URL
                    <input
                      id="linkedInURL"
                      name="linkedInURL"
                      placeholder="https://www.linkedin.com/in/johndoe/"
                      value={formState.linkedInURL}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-custom-green rounded-md placeholder-placeholder-gray focus:outline-none focus:ring-1 focus:ring-custom-green-dark focus:border-custom-green-dark"
                    />
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-custom-green text-white rounded-md hover:bg-custom-green-dark focus:outline-none focus:ring-2 focus:ring-custom-green-dark"
              >
                Sign Up
              </button>
            </form>
          </div>
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75 z-50">
              <PageLoader />
            </div>
          )}
        </div>
      )}
      {notification && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-xs w-full">
          <div className="bg-white border border-gray-300 shadow-lg p-4 text-center max-h-[90vh] overflow-y-auto flex flex-col items-center rounded-3xl">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              type="button"
            >
              <Image
                src="/close.svg"
                alt="close"
                width={15}
                height={15}
                className="mb-4"
              />
            </button>
            <p className="text-4xl font-bold text-ndi-emrald text-center mt-10">
              {notification}
            </p>
            <Image
              src="/success.svg"
              alt="Success"
              width={70}
              height={24}
              className="my-4"
            />
            <p className="text-1xl text-ndi-light-gray mb-6">
              Your form has been submitted successfully. A confirmation email
              has been sent to you. Please check your email for further details.
            </p>
            <button
              onClick={() => setNotification(null)}
              className="w-48 py-2 bg-ndi-emrald text-white hover:bg-custom-green-dark focus:outline-none focus:ring-2 focus:ring-custom-green-dark rounded-full mb-10"
              type="button"
            >
              Done
            </button>
          </div>
        </div>
      )}
      {failedNotification && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-xs w-full">
          <div className="bg-white border border-gray-300 shadow-lg p-4 text-center max-h-[90vh] overflow-y-auto flex flex-col items-center rounded-3xl">
            <button
              onClick={handleFailedNotoficationClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              type="button"
            >
              <Image
                src="/close.svg"
                alt="close"
                width={15}
                height={15}
                className="mb-4"
              />
            </button>
            <p className="text-4xl font-bold text-ndi-red-1 text-center mt-10">
              {failedNotification}
            </p>
            <Image
              src="/failed.svg"
              alt="Failed"
              width={70}
              height={24}
              className="my-4"
            />
            <p className="text-1xl text-ndi-light-gray mb-6">
              There was an issue in submitting your form. Please try again. If
              the problem persists, please contact us directly for assistance.
            </p>
            <button
              onClick={tryAgain}
              className="w-48 py-2 bg-ndi-red-1 text-white focus:outline-none focus:ring-2 focus:ring-custom-green-dark rounded-full mb-3"
              type="button"
            >
              Try Again
            </button>
            <button
              onClick={handleFailedNotoficationClose}
              className="w-48 py-2 text-ndi-red-1 border border-ndi-red-1 focus:outline-none focus:ring-2 focus:ring-custom-green-dark rounded-full mb-10"
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default SignUp
