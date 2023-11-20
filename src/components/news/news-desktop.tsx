"use client";

import { NewsInfo } from "@/types/data";
import { FC, useState } from "react";
import NewsCard from "./news-card";
import NewsSelectedContent from "./news-selected-content";

type NewsDesktopProps = {
  allNews: NewsInfo[];
};

const NewsDesktop: FC<NewsDesktopProps> = ({ allNews }) => {
  const [selectedNews, setSelectedNews] = useState<NewsInfo | null>(allNews[0]);

  const handleClick = (news: NewsInfo) => {
    setSelectedNews(news);
  };

  return (
    <div className='hidden md:flex gap-6'>
      <div className='mt-16 ml-6'>
        <h1 className='text-3xl font-bold'>Aktuelles</h1>
        <div className='mt-5 news--grid'>
          {allNews.map((news) => {
            const newsDate = new Date(news.date);
            return (
              <NewsCard
                key={news.id}
                newsDate={newsDate}
                title={news.title}
                excerpt={news.excerpt}
                setSelectedNews={setSelectedNews}
                onClick={() => handleClick(news)}
              />
            );
          })}
        </div>
      </div>
      <NewsSelectedContent selectedNews={selectedNews} />
    </div>
  );
};

export default NewsDesktop;
