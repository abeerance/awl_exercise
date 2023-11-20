import { NewsInfo } from "@/types/data";
import { colorsRange, getRandomColor } from "@/utils/get-random-color";
import { format } from "date-fns";
import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import { CiHeart } from "react-icons/ci";
import Test from "../../assets/man_mountains.webp";
import NewsCardClientWrapper from "./news-card-client-wrapper";

type NewsCardProps = {
  newsDate: Date;
  imageUrl?: string;
  title: string;
  excerpt: string;
  setSelectedNews?: Dispatch<SetStateAction<NewsInfo | null>>;
  onClick: () => void;
};

const NewsCard: FC<NewsCardProps> = ({
  newsDate,
  imageUrl,
  title,
  excerpt,
  setSelectedNews,
  onClick,
}) => {
  const randomColor = getRandomColor(colorsRange);

  return (
    <NewsCardClientWrapper setSelectedNews={setSelectedNews} onClick={onClick}>
      <div className='flex flex-col'>
        <div className='relative h-32'>
          <Image
            src={Test}
            alt='man mountain'
            fill
            style={{ objectFit: "fill" }}
          />
          <div className='absolute bottom-3 w-full flex justify-between px-2.5 items-end'>
            <h2 className='text-white font-bold text-md news--title'>
              {title}
            </h2>
            <CiHeart
              color='#ffffff'
              size={26}
              className='shrink-0 justify-self-end'
            />
          </div>
          <div
            className='absolute h-1 w-full bottom-0'
            style={{ background: `${randomColor}` }}
          />
        </div>
        <div className='pt-2.5 pb-14 px-5'>
          <p className='mb-2.5 news--date'>
            {format(newsDate, "dd-MMMM-yyyy")}
          </p>
          <p className='line-clamp-3'>{excerpt}</p>
        </div>
      </div>
    </NewsCardClientWrapper>
  );
};

export default NewsCard;
