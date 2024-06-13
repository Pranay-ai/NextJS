import Link from "next/link";
import { DUMMY_NEWS } from "@/utils/dummy-data";
import NewsCard from "@/components/NewsCard";

export default function News() {
    return (
        <div className="bg-gray-800 h-full grid p-10 gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
            {DUMMY_NEWS.map((news) => (
                <NewsCard key={news.id} news={news} />
            ))}
        </div>
    );
}
