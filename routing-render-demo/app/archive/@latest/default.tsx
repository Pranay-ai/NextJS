import { getLatestNews } from "@/utils/news"
import NewsCard from "@/components/NewsCard";
export default function LatestArchive() {
    const news = getLatestNews();
    return (
        <div className="h-fit w-11/12 items-center flex flex-col p-3 gap-3">
            <h1 className="text-5xl text-orange-500 text-shadow ">Latest News</h1>
            <div className="h-fit w-full bg-gray-800 grid p-10 gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                {news.map((news) => (
                    <NewsCard key={news.id} news={news} />
                ))}
            </div>
        </div>

    )


}