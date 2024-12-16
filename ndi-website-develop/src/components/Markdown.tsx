import { ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import remarkImages from 'remark-images'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const remarkHeadingId = require('remark-heading-id')

interface IProps {
  content: string
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LinkRenderer = (props: any) => {
  const { href, children } = props
  const newHref = href.split('?')[1] !== 'newTab=false'
  return (
    <a href={href} target={newHref ? '_blank' : '_self'} rel="noreferrer">
      {children}
    </a>
  )
}
const Markdown = ({ content }: IProps): ReactElement => (
  <ReactMarkdown
    remarkPlugins={[remarkHeadingId, gfm, remarkImages]}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rehypePlugins={[rehypeRaw] as any}
    components={{ a: LinkRenderer }}
  >
    {content}
  </ReactMarkdown>
)

export default Markdown
