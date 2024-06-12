import Image from "next/image";
import Link from "next/link";

export default function MealItem({ title, slug, image, summary, creator }: { title: string, slug: string, image: string, summary: string, creator: string }) {
  return (
    <div className="bg-gray-500 w-11/12 xl:w-full max-w-lg flex flex-col gap-3 pb-3 items-center rounded-3xl h-full">

      <div className="w-full h-48 md:h-56 lg:h-64 relative rounded-3xl overflow-hidden flex-shrink-0">
        <Image src={image} alt="" layout="fill" objectFit="cover" />
      </div>

      <div className="flex-1 flex flex-col justify-between items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-orange-500 text-2xl md:text-3xl font-bold text-shadow">{title}</h2>
          <p className="text-lg md:text-xl text-white font-semibold text-shadow">by {creator}</p>
        </div>
        <p className="text-base md:text-lg text-center text-white w-11/12 p-2">{summary}</p>
      </div>

      <Link className="bg-orange-500 py-2 px-3 text-white text-xl font-semibold text-shadow rounded-lg hover:bg-gray-800 hover:px-8" href={`/meals/${slug}`}>
        View Details
      </Link>
    </div>
  );
}
