import { DUMMY_NEWS } from "@/utils/dummy-data";
import Image from "next/image";
import Link from "next/link";
export default function NewsDetail({params}: {params: {newsId: string}}){
    const news= DUMMY_NEWS.find((news) => news.slug === params.newsId);
    return ( 
        <div className="bg-gray-800 h-screen flex flex-col gap-6 pl-5 ">
            <div className="w-1/3 h-96 relative ">
                <Link href={`/news/${params.newsId}/image`}>
                <Image src={`/images/news/${news?.image}`} layout="fill" objectFit="cover" alt={news?.title || "Sample Title "} className="p-5 rounded-3xl shadow-lg shadow-emerald-200"/>
                </Link>

            </div>
            <div className="text-emerald-300 text-3xl font-bold">{news?.title}</div>
            <div className="text-emerald-200 w-2/3 text-balance ">{news?.content}</div>
        </div>
    );

}