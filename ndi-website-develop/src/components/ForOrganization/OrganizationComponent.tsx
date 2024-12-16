'use client'

import * as yup from 'yup'

import { Amplify, DataStore } from 'aws-amplify'
import { PageNames, Pages } from '@/API'
import { ReactElement, useEffect, useState } from 'react'

import DataError from '@/components/Errors/DataError'
import { Enquiries } from '@/models'
import ErrorPage from '@/components/Errors/ErrorPage'
import FormError from '@/components/FormError'
import { Formik } from 'formik'
import Image from 'next/image'
import Markdown from '@/components/Markdown'
import PageLoader from '@/components/Loader/PageLoader'
import ReCAPTCHA from 'react-google-recaptcha'
import Routes from '@/config/routes'
import Sections from '@/components/Sections'
import SocialMediaList from '../SocialMedia'
import SuccessPage from '@/components/SuccessPage'
import config from '../../aws-exports'
import fetchPageByName from '@/services/page.service'
import sendEmail from '@/utils/email'

Amplify.configure({ ...config })
interface IOrder {
  order: number
}

// eslint-disable-next-line sonarjs/cognitive-complexity
const OrganizationComponent = (): ReactElement => {
  const CLIENT_SITE_KEY = process.env.NEXT_PUBLIC_CLIENT_SITE_KEY

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [businessSubSection, setBusinessSubSection] = useState<any>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [businessSection, setBusinessSection] = useState<any>([])
  const [page, setPage] = useState<Pages>()
  const [loader, setLoader] = useState<boolean>(false)
  const [pageLoader, setPageLoader] = useState<boolean>(true)
  const [captchaVerified, setCaptchaVerified] = useState<boolean>(false)
  const [formStatus, setFormStatus] = useState<'INIT' | 'SUCCESS' | 'FAILED'>(
    'INIT'
  )
  const [contentLoader, setContentLoader] = useState<boolean>(true)

  const businessInquirySchema = yup.object().shape({
    firstName: yup.string().trim().required('Please provide a first name'),
    lastName: yup.string().trim().required('Please provide a last name'),
    organization: yup.string().trim().required('Please provide a organization'),
    email: yup
      .string()
      .trim()
      .email('Please provide a properly formatted email address')
      .required('Please provide an email'),
    nameOfServiceOrProduct: yup
      .string()
      .trim()
      .required('This field is required'),
    message: yup.string().trim().required('Message is required')
  })

  const fetchBusinessEnquiryDetails = async () => {
    setContentLoader(true)
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const businessPageDetails: any = await fetchPageByName(
        PageNames.BUSINESS_INQUIRY
      )
      setContentLoader(false)
      const sectionData = businessPageDetails?.sections.items.sort(
        (a: IOrder, b: IOrder) => a.order - b.order
      )
      setBusinessSection(sectionData)
      if (
        sectionData[0]?.subSections?.items &&
        sectionData[0]?.subSections?.items !== null &&
        sectionData[0]?.subSections?.items.length > 0
      ) {
        const subSectionData = sectionData[0]?.subSections?.items.sort(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (a: any, b: any) => a.order - b.order
        )
        setBusinessSubSection(subSectionData)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error-BusinessEnquiry::', error)
      setContentLoader(false)
    }
  }

  const fetchPageData = async () => {
    setPageLoader(true)
    try {
      const sections = await fetchPageByName(PageNames.FOR_ORGANIZATION)
      if (sections) {
        setPage(sections)
      }
      setPageLoader(false)
    } catch (err) {
      setPageLoader(false)
    }
  }
  const handleReCaptchaChange = (token: string | null) => {
    if (token && token.length > 0) {
      setCaptchaVerified(true)
    } else {
      setCaptchaVerified(false)
    }
  }

  useEffect(() => {
    fetchPageData()
    fetchBusinessEnquiryDetails()
  }, [])

  const errorClass = '!border border-[#E14942]'
  const subSectionCheck =
    businessSubSection &&
    Array.isArray(businessSubSection) &&
    businessSubSection.length > 0
  const sectionCheck =
    businessSection &&
    Array.isArray(businessSection) &&
    businessSection.length > 0

  const section2 =
    sectionCheck && businessSection[0].subSections.items[1].contents

  return (
    <div>
      {formStatus === 'FAILED' ? (
        <div className="bg-white px-section">
          <div className="max-w-container mx-auto">
            <div className="m-auto py-16 max-w-4xl">
              <ErrorPage
                title=""
                desc={sectionCheck && businessSection[1].subTitle}
                image={
                  sectionCheck &&
                  businessSection[1]?.subSections?.items[0]?.contents?.items[0]
                    ?.contentData
                }
                tryAgain={(value: boolean) => value && setFormStatus('INIT')}
                backButtonName="Go back to previous page"
                backButtonRef={Routes.organization.organization}
              />
            </div>
          </div>
        </div>
      ) : formStatus === 'SUCCESS' ? (
        <div className="bg-white px-section">
          <div className="max-w-container mx-auto">
            <div className="m-auto py-16 max-w-4xl">
              <SuccessPage
                title={sectionCheck && businessSection[2].title}
                desc={sectionCheck && businessSection[2].subTitle}
                image={
                  sectionCheck &&
                  businessSection[2]?.subSections?.items[0]?.contents?.items[0]
                    ?.contentData
                }
                backButtonName="Go back to previous page"
                backButtonRef={(value: boolean) =>
                  value && setFormStatus('INIT')
                }
                visitButtonName="Visit our blog"
                visitButtonRef={Routes.resources.blogs}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="for-organization-container">
          {page?.sections ? (
            <>
              <Sections
                sections={page?.sections}
                mergeAmount="xl:mt-[-12rem]"
                showAnnouncement={false}
                showFeatureBanner={false}
                showUseCase={false}
              />
              <div className="px-section">
                <div
                  id="contact-us-form"
                  className="max-w-container mx-auto grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 sm:grid-cols-1 bg-white py-12"
                >
                  <div className="p-4 flex flex-col justify-center">
                    <div className="text-start">
                      <div className="business-inquiry-markdown-container">
                        <Markdown
                          content={
                            subSectionCheck &&
                            businessSubSection[0]?.contents?.items[0]
                              ?.contentData
                          }
                        />
                      </div>
                    </div>
                    <div className="mt-11">
                      <Formik
                        initialValues={{
                          firstName: '',
                          lastName: '',
                          organization: '',
                          email: '',
                          contactNumber: '',
                          nameOfServiceOrProduct: '',
                          message: ''
                        }}
                        validationSchema={businessInquirySchema}
                        onSubmit={async (
                          values,
                          { setSubmitting, resetForm }
                        ): Promise<void> => {
                          setSubmitting(true)
                          const {
                            firstName,
                            lastName,
                            organization,
                            email,
                            contactNumber,
                            nameOfServiceOrProduct,
                            message
                          } = values
                          const receiverEmailId: string | undefined =
                            process.env
                              .NEXT_PUBLIC_AWS_SES_EMAIL_FOR_BUSINESS_OR_INTERNATIONAL_ENQUIRY
                          const res = await DataStore.save(
                            new Enquiries({
                              firstName,
                              lastName,
                              email,
                              enquiryReason: 'Business Enquiry',
                              subject: 'Business Enquiry',
                              organization,
                              message: `${message}\n\n\nNote: This message comes from NDI website https://www.bhutanndi.com`,
                              contactNumber,
                              productInfo: nameOfServiceOrProduct
                            })
                          )
                          if (Object.keys(res).length > 0) {
                            setFormStatus('SUCCESS')
                            setSubmitting(false)
                            setLoader(false)
                            const emailBody = `<html><body><p><b>User details:</b></p>
                      <p>Name: ${firstName} ${lastName}<p>
                      <p>Email: ${email}</p>
                      <p>Subject: NDI Business Enquiry</p>
                      <p>Content: ${message}</p>
                      <p>\n\n\nNote: This message comes from NDI website https://www.bhutanndi.com</p>
                      </body></html>`
                            await sendEmail({
                              to:
                                receiverEmailId !== undefined
                                  ? receiverEmailId
                                  : '',
                              from:
                                process.env.NEXT_PUBLIC_AWS_SES_EMAIL !==
                                undefined
                                  ? process.env.NEXT_PUBLIC_AWS_SES_EMAIL
                                  : '',
                              subject: 'NDI Business Enquiry',
                              message: emailBody
                            })
                            resetForm()
                          }
                        }}
                      >
                        {({
                          values,
                          errors,
                          handleChange,
                          handleSubmit,
                          touched
                          // eslint-disable-next-line sonarjs/cognitive-complexity
                        }): ReactElement => {
                          const {
                            firstName,
                            lastName,
                            organization,
                            email,
                            contactNumber,
                            nameOfServiceOrProduct,
                            message
                          } = values
                          return (
                            <form onSubmit={handleSubmit}>
                              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="input-field">
                                  <p className="input-label">First name*</p>
                                  <input
                                    type="text"
                                    className={`${
                                      touched.firstName &&
                                      errors.firstName &&
                                      errorClass
                                    } w-full`}
                                    id="firstName"
                                    placeholder=""
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleChange}
                                  />
                                  {touched.firstName && errors.firstName && (
                                    <FormError error={errors.firstName} />
                                  )}
                                </div>
                                <div className="input-field">
                                  <p className="input-label">Last name*</p>
                                  <input
                                    type="text"
                                    className={`${
                                      touched.lastName &&
                                      errors.lastName &&
                                      errorClass
                                    } w-full`}
                                    id="lastName"
                                    placeholder=""
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleChange}
                                  />
                                  {touched.lastName && errors.lastName && (
                                    <FormError error={errors.lastName} />
                                  )}
                                </div>
                              </div>
                              <div className="input-field">
                                <p className="input-label">Organization*</p>
                                <input
                                  type="text"
                                  className={`${
                                    touched.organization &&
                                    errors.organization &&
                                    errorClass
                                  } w-full`}
                                  id="organization"
                                  placeholder=""
                                  name="organization"
                                  value={organization}
                                  onChange={handleChange}
                                />
                                {touched.organization &&
                                  errors.organization && (
                                    <FormError error={errors.organization} />
                                  )}
                              </div>
                              <div className="input-field">
                                <p className="input-label">Email*</p>
                                <input
                                  type="text"
                                  className={`${
                                    touched.email && errors.email && errorClass
                                  } w-full`}
                                  id="email"
                                  placeholder=""
                                  name="email"
                                  value={email}
                                  onChange={handleChange}
                                />
                                {touched.email && errors.email && (
                                  <FormError error={errors.email} />
                                )}
                              </div>
                              <div className="input-field">
                                <p className="input-label">
                                  Contact Number (optional)
                                </p>
                                <input
                                  type="text"
                                  className={`${
                                    touched.contactNumber &&
                                    errors.contactNumber &&
                                    errorClass
                                  } w-full`}
                                  id="contactNumber"
                                  placeholder=""
                                  name="contactNumber"
                                  value={contactNumber}
                                  onChange={handleChange}
                                />
                                {touched.contactNumber &&
                                  errors.contactNumber && (
                                    <FormError error={errors.contactNumber} />
                                  )}
                              </div>
                              <div className="input-field">
                                <p className="input-label">
                                  Name of Service/Product you are interested in
                                  *
                                </p>
                                <input
                                  type="text"
                                  className={`${
                                    touched.nameOfServiceOrProduct &&
                                    errors.nameOfServiceOrProduct &&
                                    errorClass
                                  } w-full`}
                                  id="nameOfServiceOrProduct"
                                  placeholder=""
                                  name="nameOfServiceOrProduct"
                                  value={nameOfServiceOrProduct}
                                  onChange={handleChange}
                                />
                                {touched.nameOfServiceOrProduct &&
                                  errors.nameOfServiceOrProduct && (
                                    <FormError
                                      error={errors.nameOfServiceOrProduct}
                                    />
                                  )}
                              </div>
                              <div className="input-field">
                                <p className="input-label">Message*</p>
                                <textarea
                                  rows={10}
                                  className={`${
                                    touched.message &&
                                    errors.message &&
                                    errorClass
                                  } w-full`}
                                  id="message"
                                  name="message"
                                  value={message}
                                  onChange={handleChange}
                                />
                                {errors.message && touched.message && (
                                  <FormError error={errors.message} />
                                )}
                              </div>
                              <div id="captcha-container" className="pb-5">
                                {CLIENT_SITE_KEY ? (
                                  <ReCAPTCHA
                                    size="normal"
                                    sitekey={CLIENT_SITE_KEY}
                                    onChange={handleReCaptchaChange}
                                  />
                                ) : (
                                  <div className="text-sm text-red-500 pb-5">
                                    client site key not found
                                  </div>
                                )}
                              </div>
                              <button
                                type="submit"
                                className="bg-ndi-emrald flex justify-center items-center text-white font-semibold	text-xl py-3 w-full rounded-[10px]"
                                disabled={loader || !captchaVerified}
                              >
                                Submit
                                {loader && (
                                  <svg
                                    aria-hidden="true"
                                    className="w-6 h-6 ml-4 text-gray-200 animate-spin dark:text-gray-600 fill-ndi-gray"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                      fill="currentFill"
                                    />
                                  </svg>
                                )}
                              </button>
                            </form>
                          )
                        }}
                      </Formik>
                    </div>
                  </div>
                  <div className="mb-14 text-center flex flex-col justify-center">
                    {sectionCheck ? (
                      <>
                        <div className="contact-us-markdown-container">
                          <Markdown content={section2.items[0]?.contentData} />
                        </div>
                        <Image
                          src={section2.items[1]?.contentData}
                          alt={section2.items[0]?.contentData}
                          width={1400}
                          height={1000}
                        />
                        <SocialMediaList size={40} spacing="mr-4" />
                      </>
                    ) : !subSectionCheck && contentLoader ? (
                      <PageLoader fullHeight />
                    ) : (
                      <DataError message="No data found" />
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : !page?.sections && pageLoader ? (
            <PageLoader fullHeight />
          ) : (
            <DataError message="No data found" />
          )}
        </div>
      )}
    </div>
  )
}

export default OrganizationComponent
