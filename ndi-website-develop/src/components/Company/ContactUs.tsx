'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from 'yup'

import { Amplify, DataStore } from 'aws-amplify'
import { Enquiries, EnquiryReason, PageNames } from '@/models'
import { ReactElement, useEffect, useState } from 'react'

import DataError from '@/components/Errors/DataError'
import ErrorPage from '@/components/Errors/ErrorPage'
import FormError from '@/components/FormError'
import { Formik } from 'formik'
import Image from 'next/image'
import Markdown from '@/components/Markdown'
import PageLoader from '../Loader/PageLoader'
import ReCAPTCHA from 'react-google-recaptcha'
import Routes from '@/config/routes'
import SocialMediaList from '../SocialMedia'
import SuccessPage from '@/components/SuccessPage'
import config from '../../aws-exports'
import fetchPageByName from '@/services/page.service'
import sendEmail from '@/utils/email'
import { useRouter } from 'next/navigation'

Amplify.configure(config)

interface IOrder {
  order: number
}

const ContactUs = (): ReactElement => {
  const CLIENT_SITE_KEY = process.env.NEXT_PUBLIC_CLIENT_SITE_KEY
    ? process.env.NEXT_PUBLIC_CLIENT_SITE_KEY
    : ''

  const router = useRouter()

  const [loader, setLoader] = useState<boolean>(false)
  const [contentLoader, setContentLoader] = useState<boolean>(true)
  const [captchaVerified, setCaptchaVerified] = useState<boolean>(false)
  const [formStatus, setFormStatus] = useState<'INIT' | 'SUCCESS' | 'FAILED'>(
    'INIT'
  )
  const [enquiryReasons, setEnquiryReasons] = useState<EnquiryReason>()
  const [section, setSection] = useState<any>()
  const [subSection, setSubSection] = useState<any>()
  const userSchema = yup.object().shape({
    firstName: yup.string().trim().required('Please provide a name'),
    lastName: yup.string().trim(),
    email: yup
      .string()
      .trim()
      .email('Please provide a properly formatted email address')
      .required('Please provide an email'),
    enquiryReason: yup.string().trim().required('This field is required'),
    subject: yup.string().trim(),
    organization: yup.string().trim(),
    message: yup.string().trim().required('Message is required')
  })
  const handleReCaptchaChange = (token: string | null) => {
    if (token && token.length > 0) {
      setCaptchaVerified(true)
    } else {
      setCaptchaVerified(false)
    }
  }

  const fetchEnquiryReasons = async () => {
    try {
      const response: any = (await DataStore.query(
        EnquiryReason
      )) as EnquiryReason[]
      if (response && response.length > 0) {
        setEnquiryReasons(response)
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('ERROR-getEnquiryReasons:::', err)
    }
  }

  const fetchPageData = async () => {
    setContentLoader(true)
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const page: any = await fetchPageByName(PageNames.CONTACT_US)
      setContentLoader(false)

      const sectionData = page?.sections?.items?.sort(
        (a: IOrder, b: IOrder) => a.order - b.order
      )
      setSection(sectionData)
      if (
        sectionData[0]?.subSections?.items &&
        sectionData[0]?.subSections?.items !== null &&
        sectionData[0]?.subSections?.items.length > 0
      ) {
        const subSectionData = sectionData[0]?.subSections?.items.sort(
          (a: any, b: any) => a.order - b.order
        )
        setSubSection(subSectionData)
      }
    } catch (err) {
      setContentLoader(false)
    }
  }

  useEffect(() => {
    fetchPageData()
    fetchEnquiryReasons()
  }, [])

  const errorClass = '!border border-[#E14942]'

  const sectionCheck =
    section && Array.isArray(subSection) && section.length > 0
  const subSectionCheck =
    subSection && Array.isArray(subSection) && subSection.length > 0

  return (
    <div className="bg-white px-section">
      <div className="max-w-container mx-auto">
        {formStatus === 'FAILED' ? (
          <div className="m-auto py-16 max-w-4xl">
            <ErrorPage
              title=""
              desc={sectionCheck && section[1].subTitle}
              image={
                sectionCheck &&
                section[1]?.subSections?.items[0]?.contents?.items[0]
                  ?.contentData
              }
              tryAgain={(value: boolean) => value && setFormStatus('INIT')}
              backButtonName="Go back to homepage"
              backButtonRef="/"
            />
          </div>
        ) : formStatus === 'SUCCESS' ? (
          <div className="m-auto py-16 max-w-4xl">
            <SuccessPage
              title={sectionCheck && section[2].title}
              desc={sectionCheck && section[2].subTitle}
              image={
                sectionCheck &&
                section[2]?.subSections?.items[0]?.contents?.items[0]
                  ?.contentData
              }
              backButtonName="Go back to homepage"
              backButtonRef={(value: boolean) =>
                value && router.push(Routes.home)
              }
              visitButtonName="Visit our blog"
              visitButtonRef={Routes.resources.blogs}
            />
          </div>
        ) : (
          <div
            id="contact-us-form"
            className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 sm:grid-cols-1 bg-white py-12"
          >
            <div className="mb-14 text-center flex flex-col justify-center">
              {subSectionCheck ? (
                <>
                  <div className="contact-us-markdown-container">
                    <Markdown
                      content={
                        subSectionCheck &&
                        subSection[0]?.contents?.items[0]?.contentData
                      }
                    />
                  </div>
                  <Image
                    src={
                      subSectionCheck &&
                      subSection[0]?.contents?.items[1]?.contentData
                    }
                    alt={
                      subSectionCheck &&
                      subSection[0]?.contents?.items[0]?.contentData
                    }
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
            <div className="p-4 flex flex-col justify-center">
              <div className="text-center">
                <div className="contact-us-markdown-container">
                  <Markdown
                    content={
                      subSectionCheck &&
                      subSection[1]?.contents?.items[0]?.contentData
                    }
                  />
                </div>
              </div>
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  enquiryReason: '',
                  subject: '',
                  organization: '',
                  message: ''
                }}
                validationSchema={userSchema}
                // eslint-disable-next-line sonarjs/cognitive-complexity
                onSubmit={async (values, { setSubmitting }): Promise<void> => {
                  setSubmitting(true)
                  const {
                    firstName,
                    lastName,
                    email,
                    enquiryReason,
                    subject,
                    organization,
                    message
                  } = values

                  const errorFields = {
                    organization: '',
                    subject: ''
                  }
                  let receiverEmailId: string | undefined = '' || undefined

                  if (
                    enquiryReason === 'BUSINESS_ENQUIRY' ||
                    enquiryReason === 'INTERNATIONAL_ENQUIRY'
                  ) {
                    errorFields.organization =
                      organization === '' ? 'Organization name is required' : ''
                    receiverEmailId =
                      process.env
                        .NEXT_PUBLIC_AWS_SES_EMAIL_FOR_BUSINESS_OR_INTERNATIONAL_ENQUIRY
                  } else if (enquiryReason === 'OTHER') {
                    errorFields.subject =
                      subject === '' ? 'Subject name is required' : ''
                    receiverEmailId =
                      process.env.NEXT_PUBLIC_AWS_SES_EMAIL_FOR_OTHER_ENQUIRY
                  } else if (enquiryReason === 'BUG_REPORT') {
                    receiverEmailId =
                      process.env.NEXT_PUBLIC_AWS_SES_EMAIL_FOR_BUG_REPORT
                  } else {
                    errorFields.subject = ''
                    errorFields.organization = ''
                  }

                  if (
                    errorFields.organization !== '' ||
                    errorFields.subject !== ''
                  ) {
                    return
                  }

                  try {
                    const res = await DataStore.save(
                      new Enquiries({
                        firstName,
                        lastName,
                        email,
                        enquiryReason,
                        subject,
                        organization,
                        message
                      })
                    )
                    if (Object.keys(res).length > 0) {
                      setFormStatus('SUCCESS')
                      setSubmitting(false)
                      setLoader(false)
                      let convertedSubject = enquiryReason
                      if (convertedSubject.includes('_')) {
                        const string = convertedSubject
                          .toLowerCase()
                          .split('_')
                          .map((ele) => ele[0].toUpperCase() + ele.slice(1))
                        convertedSubject = string.join(' ')
                      } else {
                        convertedSubject =
                          enquiryReason.toLowerCase()[0].toUpperCase() +
                          enquiryReason.slice(1)
                      }
                      const emailSubject =
                        enquiryReason !== 'OTHER' ? convertedSubject : subject
                      const emailBody = `<html><body><p><b>User details:</b></p>
                      <p>Name: ${firstName} ${lastName}<p>
                      <p>Email: ${email}</p>
                      <p>Subject: ${emailSubject}
                      <p>Content: ${message}</p>
                      <p>\n\n\nNote: This message comes from NDI website https://www.bhutanndi.com</p>
                      </body></html>`
                      await sendEmail({
                        to:
                          receiverEmailId !== undefined ? receiverEmailId : '',
                        from:
                          process.env.NEXT_PUBLIC_AWS_SES_EMAIL !== undefined
                            ? process.env.NEXT_PUBLIC_AWS_SES_EMAIL
                            : '',
                        subject:
                          enquiryReason !== 'OTHER'
                            ? convertedSubject
                            : subject,
                        message: emailBody
                      })
                    }
                  } catch (err) {
                    setFormStatus('FAILED')
                    setSubmitting(false)
                    // eslint-disable-next-line no-console
                    console.log('ERROR: SUBMIT::::', err)
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
                    email,
                    enquiryReason,
                    subject,
                    organization,
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
                          <p className="input-label">Last name</p>
                          <input
                            type="text"
                            className="w-full"
                            id="lastName"
                            placeholder=""
                            name="lastName"
                            value={lastName}
                            onChange={handleChange}
                          />
                        </div>
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
                        {errors.email && touched.email && (
                          <FormError error={errors.email} />
                        )}
                      </div>
                      <div className="input-field">
                        <select
                          className={`${
                            touched.enquiryReason &&
                            errors.enquiryReason &&
                            errorClass
                          } w-full`}
                          id="enquiryReason"
                          name="enquiryReason"
                          value={enquiryReason}
                          onChange={handleChange}
                        >
                          <option value="">
                            What is your enquiry related to?*
                          </option>
                          {enquiryReasons &&
                            Array.isArray(enquiryReasons) &&
                            enquiryReasons.length > 0 &&
                            enquiryReasons.map((enq: EnquiryReason) => (
                              <option key={enq?.id} value={enq.value as string}>
                                {enq?.reason}
                              </option>
                            ))}
                        </select>
                        {errors.enquiryReason && touched.enquiryReason && (
                          <FormError error={errors.enquiryReason} />
                        )}
                      </div>
                      {(enquiryReason === 'BUSINESS_ENQUIRY' ||
                        enquiryReason === 'INTERNATIONAL_ENQUIRY') && (
                        <div className="input-field">
                          <p className="input-label">Organization*</p>
                          <input
                            type="text"
                            className={`${
                              organization === '' && errorClass
                            } w-full`}
                            id="organization"
                            placeholder=""
                            name="organization"
                            value={organization}
                            onChange={handleChange}
                          />
                          <FormError
                            error={
                              organization === ''
                                ? 'Organization name is required'
                                : ''
                            }
                          />
                        </div>
                      )}
                      {enquiryReason === 'OTHER' && (
                        <div className="input-field">
                          <p className="input-label">Subject*</p>
                          <input
                            type="text"
                            className={`${subject === '' && errorClass} w-full`}
                            id="subject"
                            placeholder=""
                            name="subject"
                            value={subject}
                            onChange={handleChange}
                          />
                          <FormError
                            error={subject === '' ? 'Subject is required' : ''}
                          />
                        </div>
                      )}
                      <div className="input-field">
                        <p className="input-label">Message*</p>
                        <textarea
                          rows={10}
                          className={`${
                            touched.message && errors.message && errorClass
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
        )}
      </div>
    </div>
  )
}

export default ContactUs
