"use client";

import { NewsInfo } from "@/types/data";
import { FC, useState } from "react";
import NewsCard from "./news-card";
import NewsSelectedContent from "./news-selected-content";

type NewsMobileProps = {
  allNews: NewsInfo[];
};

const NewsMobile: FC<NewsMobileProps> = ({ allNews }) => {
  const [selectedNews, setSelectedNews] = useState<NewsInfo | null>(null);

  const handleClick = (news: NewsInfo) => {
    setSelectedNews(news);
  };

  return selectedNews === null ? (
    <div className='py-12 px-3.5 block md:hidden'>
      <h1 className='font-bold text-3xl mb-7'>Aktuelles</h1>
      <div className='min-h-screen w-full mt-8'>
        <div className='news--grid_sm'>
          {allNews.map((news) => {
            const newsDate = new Date(news.date);
            return (
              <NewsCard
                key={news.id}
                newsDate={newsDate}
                title={news.title}
                excerpt={news.excerpt}
                onClick={() => handleClick(news)}
              />
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className='block md:hidden'>
      <NewsSelectedContent selectedNews={selectedNews} />
    </div>
  );
};

export default NewsMobile;
