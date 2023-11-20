"use client";

import { NewsClient } from "@/db/client";
import { NewsDetail, NewsInfo } from "@/types/data";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Test from "../../assets/man_mountains.webp";

type NewsSelectedContentProps = {
  selectedNews: NewsInfo | null;
};

const NewsSelectedContent: FC<NewsSelectedContentProps> = ({
  selectedNews,
}) => {
  const [newsContent, setNewsContent] = useState<NewsDetail | null>(null);

  useEffect(() => {
    const newsClient = new NewsClient();
    const getNewsContent = async () => {
      if (!selectedNews) return;
      const fullNews = await newsClient.fetchDetail(selectedNews.id);
      setNewsContent(fullNews);
    };
    getNewsContent();
  }, [selectedNews]);

  if (!selectedNews || !newsContent) return null;

  return (
    <div className='h-screen w-full md:border-l md:border-black md:border-opacity-25 flex flex-col items-center relative'>
      <div className='relative h-80 w-full'>
        <Image
          src={Test}
          alt='man mountain'
          fill
          style={{ objectFit: "fill" }}
        />
      </div>
      <div className='flex flex-col news--content my-14'>
        <h1>{newsContent.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: newsContent.content,
          }}
        />
      </div>
    </div>
  );
};

export default NewsSelectedContent;
