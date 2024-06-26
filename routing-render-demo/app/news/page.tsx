import NewsCard from "@/components/NewsCard";
import { getAllNews } from "@/utils/news";

export default async function News() {
    const DUMMY_NEWS = await getAllNews();
    return (
        <div className="bg-gray-800 h-full grid p-10 gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
            {DUMMY_NEWS.map((news:any) => (
                <NewsCard key={news.id} news={news} />
            ))}
        </div>
    );
}
