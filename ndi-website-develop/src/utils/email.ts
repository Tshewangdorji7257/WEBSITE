import AWS from 'aws-sdk'

AWS.config.update({
  region: process.env.NEXT_PUBLIC_AWS_DEFAULT_REGION,
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
})
interface IProps {
  to: string
  from: string
  subject: string
  message: string
}
const ses = new AWS.SES({ apiVersion: 'latest' })

export default async function sendEmail({
  to,
  from,
  subject,
  message
}: IProps): Promise<string> {
  const params = {
    Source: from,
    Destination: { ToAddresses: [to] },
    Message: {
      Subject: { Data: subject },
      Body: { Html: { Data: message } }
    }
  }
  const result = await ses.sendEmail(params).promise()
  return result.MessageId
}
