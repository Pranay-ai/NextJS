export default function NewsDetail({params}: {params: {newsId: string}}){
    return (
        <div className="bg-gray-800 h-screen flex flex-col gap-4  items-center justify-center">
            <h1 className="text-orange-500 text-7xl ">News Detail</h1>
            <h1 className="text-orange-500 text-5xl ">News Id: {params.newsId}</h1>
        </div>
    );

}