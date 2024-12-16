import Hero from '../Hero'
import Link from 'next/link'
import { ReactElement } from 'react'
import Routes from '@/config/routes'

interface IFeatures {
  title: string
  subTitle: string
  url: string
  image: string
}
interface IProps {
  data: IFeatures
}

const FeatureCard = ({ data }: IProps): ReactElement => (
  <div>
    <Hero
      type="MERGED_CONTENT"
      text={
        <div className="feature-container w-full">
          {data?.title && (
            <h2
              className="text-[27px] sm:text-[40px] md:text-[45px] text-black font-normal leading-[normal]"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: data?.title }}
            />
          )}
          {data?.subTitle && (
            <h4 className="text-ndi-gray-500 font-light text-[25px]">
              {data?.subTitle}
            </h4>
          )}
          <div className="mt-[30px]">
            <Link
              href={`${Routes.feature}#${data.url}`}
              className="text-black text-[25px] font-medium hover:text-ndi-emrald cursor-pointer"
            >
              Learn more
            </Link>
          </div>
        </div>
      }
      image={data?.image}
      title=""
      subTitle=""
      contentPosition="LEFT"
      contentTypeIncludes="HTML"
      pxRequired={false}
      mergeAmount="xl:ml-[-13rem] lg:ml-0 md:ml-0 sm:ml-0 mt-12 max-h-hero-section"
    />
  </div>
)

export default FeatureCard
