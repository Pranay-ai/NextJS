import Link from "next/link"
export default function Header(){
    return (
        <div className="w-full h-fit bg-slate-100 flex justify-between items-center ">
            <h1 className="text-red-500 text-5xl text-shadow  font-bold p-2" >NEWS BREAK</h1>
            <nav className=" flex flex-start gap-10 px-10">
                <Link className="text-red-400 text-3xl text-shadow hover:text-gray-800  font-bold" href={"/"}>HOME</Link>
                <Link className="text-red-400 text-3xl text-shadow hover:text-gray-800 font-bold" href={"/news"}>NEWS</Link>

            </nav>
        </div>
    )
}