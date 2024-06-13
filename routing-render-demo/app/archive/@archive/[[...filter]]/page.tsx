import {getNewsForYear} from '@/utils/news'
import NewsCard from '@/components/NewsCard'
import { getAvailableNewsYears } from "@/utils/news";
import Link from "next/link";
export default function ArchiveYear({params}: {params: {filter: string}}){

    console.log(params.filter);    
    const years = getAvailableNewsYears();
    return (
      <div className="min-h-96 h-fit border-2 border-slate-200 p-3 rounded-3xl shadow-xl shadow-cyan-500/50 ">
  
          <nav className="w-10/12">
            <ul className="flex justify-around text-white text-xl font-bold">
              {years.map((year: any) => (
                <li key={year}>
                  <Link href={`/archive/${year}`}>{year}</Link>
                </li>
              ))}
            </ul>
          </nav>
      </div>
    );



}