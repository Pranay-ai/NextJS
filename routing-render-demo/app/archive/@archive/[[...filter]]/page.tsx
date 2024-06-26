import { getNewsForYear } from "@/utils/news";
import NewsCard from "@/components/NewsCard";
import { getAvailableNewsYears } from "@/utils/news";
import Link from "next/link";
import { Suspense } from "react";

async function FilteredNews({ year }: { year: any }) {
  let news = null;
  if (year) {
    news = await getNewsForYear(year);
  }

  return (
    <>
      {news && (
        <div className="bg-gray-800 h-full grid p-10 gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {news?.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      )}
    </>
  );
}

export default async function ArchiveYear({
  params,
}: {
  params: { filter: string };
}) {
  const years = await getAvailableNewsYears();
  const filter = params.filter?.length === 1 ? params.filter[0] : null;

  return (
    <div className="min-h-96 h-fit border-2 w-11/12 bg-gray-800 pt-5 border-slate-200 p-3 rounded-3xl shadow-xl shadow-cyan-500/50 ">
      <nav className="w-10/12">
        <ul className="flex justify-around text-white text-xl font-bold">
          {years.map((year) => (
            <li key={year}>
              <Link href={`/archive/${year}`}>{year}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Suspense fallback={
        <div className="flex h-98 flex-col justify-center items-center align-middle">        
          <p className="text-white text-3xl">Loading NEWS..........</p>
        </div>

        }>
        <FilteredNews year={filter} />
      </Suspense>
    </div>
  );
}
