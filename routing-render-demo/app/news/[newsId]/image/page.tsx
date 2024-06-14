import { DUMMY_NEWS } from "@/utils/dummy-data";
import Image from 'next/image'; // Import Image component from Next.js

export default function NewsImage({ params }: { params: { newsId: string } }) {
    console.log("params");
    console.log(params);

    const news = DUMMY_NEWS.find((news) => news.slug === params.newsId);
    console.log("news");
    console.log(news);

    return (
        <div className="bg-gray-800 h-screen flex flex-col gap-6 pl-5">
            <div className="w-2/3 h-screen relative">
                {news && (
                    <Image
                        src={`/images/news/${news.image}`}
                        alt={news.title || "Sample Title"}
                        layout="fill"
                        objectFit="cover"
                        className="p-5 rounded-3xl shadow-lg shadow-emerald-200"
                    />
                )}
            </div>
        </div>
    );
}
