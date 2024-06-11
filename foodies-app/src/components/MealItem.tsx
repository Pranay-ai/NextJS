
import Image from "next/image";
import Link from "next/link";
export default function MealItem({ title, slug, image, summary, creator }: { title: string, slug: string, image: string, summary: string, creator: string }) {
  return (
    <div className="bg-gray-500 w-11/12   max-w-lg    flex flex-col gap-3  pb-3 items-center rounded-3xl">

      <div className="w-full h-96 relative rounded-3xl overflow-hidden">
        <Image src={image} alt="" layout="fill" objectFit="cover" />
      </div>
      {/* <img src={image} alt="" className="w-full h-auto rounded-3xl" /> */}


      <h2 className="text-orange-500 text-3xl font-bold text-shadow">{title}</h2>
      <p className="text-xl text-white font-semibold text-shadow">by {creator}</p>


      <p className=" text-3xl text-center text-white w-11/12 p-2">{summary}</p>

      <Link className="bg-orange-500  py-2 px-3 text-white text-xl font-semibold text-shadow rounded-lg hover:bg-gray-800 hover:px-8" href={`/meals/${slug}`}>View Details</Link>

    </div>
  );
}