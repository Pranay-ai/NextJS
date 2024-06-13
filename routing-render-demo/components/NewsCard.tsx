import Image from "next/image";
import Link from "next/link";
interface News {
    id: string;
    title: string;
    content: string;
    image: string;
    date: string;
    slug: string;
}


export default function NewsCard({ news }: { news: News}) {

    return(
        <div className="bg-orange-800 flex flex-col w-10/12 h-fit gap-2 rounded-3xl">
            <div className="w-full h-96 lg:h-56 2xl:h-48  relative rounded-3xl ">
                <Image src={`/images/news/${news.image}`} alt={news.title} layout="fill" objectFit="cover" />
            </div>
            <div className="flex flex-col h-fit gap-2 pl-3 pb-4 ">
                <h1 className="text-2xl font-bold">{news.title}</h1>
                <p className="text-gray-400 text-sm">{news.date}</p>
                <Link className="bg-gray-800 w-5/12 px-4 py-2  text-white text-lg rounded-xl  font-semibold text-shadow" href={`news/${news.slug}`}>View Detail</Link>
            </div>
        </div>)


}