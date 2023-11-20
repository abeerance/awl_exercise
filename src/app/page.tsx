import NewsDesktop from "@/components/news/news-desktop";
import NewsMobile from "@/components/news/news-mobile";
import { NewsClient } from "@/db/client";

async function getAllNews() {
  const newsClient = new NewsClient();
  const newstList = newsClient.fetchList();
  return await newstList;
}

export default async function Home() {
  const allNews = await getAllNews();

  return (
    <main className='flex min-h-screen flex-col md:py-0 md:px-0 md:mb-20'>
      <NewsMobile allNews={allNews} />
      <NewsDesktop allNews={allNews} />
    </main>
  );
}
