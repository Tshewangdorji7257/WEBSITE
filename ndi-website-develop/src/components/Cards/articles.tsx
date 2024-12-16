import DateFormat from '@/utils/dateFormat';
import ImageComponent from '../ImageComponent';
import { PostType } from '@/models';
import { ReactElement } from 'react';
import Routes from '@/config/routes';
import { formatSlug } from '@/utils/formatSlug';
import { useRouter } from 'next/navigation';

interface IArticleCard {
  image: string;
  title: string;
  id: string;
  postType: string;
  description: string;
  shortDescription?: string;
  createdAt: string;
  url?: string;
  dateOfEvent?: string;
  publishDate: string;
  customizedURL?: string;
}

interface IProps {
  data: IArticleCard;
  postType?: string;
}

const ArticleCard = ({ data, postType }: IProps): ReactElement => {
  const router = useRouter();

  return (
    <div className="group relative rounded-3xl overflow-hidden w-full transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Image with hover effect */}
      <div>
        <ImageComponent
          src={data.image || ''}
          alt={data.title}
          className="w-full h-[220px] object-cover group-hover:brightness-50 transition-all duration-300"
          height={220}
          width={359}
        />
      </div>
      
      {/* Card Content (Appears only on hover with slide-up effect) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 ease-in-out group-hover:bg-grey/60 rounded-3xl">
        <div className="text-white text-[18px] font-medium text-center">
          {data.title}
        </div>
        <div className="text-white text-[14px] font-normal text-center pt-2.5 multiline-ellipsis">
          {data?.shortDescription ? data?.shortDescription : data?.description}
        </div>
        <button
          type="button"
          className="text-white bg-ndi-emrald mt-4 font-bold leading-[normal] text-[12px] hover:underline underline-offset-4 cursor-pointer py-2 px-4 rounded-full transition-all duration-300"
          onClick={() => {
            if (postType === PostType.MEDIA_COVERAGE && data.url) {
              window.open(data.url, '_blank');
            } else {
              router.push(
                Routes.item +
                  formatSlug(data.customizedURL ? data.customizedURL : data.title, data.id)
              );
            }
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
