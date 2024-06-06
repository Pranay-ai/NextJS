
import "./globals.css";
import Link from "next/link";
import ImageSlide from "@/components/ImageSlide";

export default function Home() {
  console.log("Home page rendered");
  return (
    <div className=" flex flex-col justify-center gap-11 items-center h-screen bg-gray-800 ">
        <ImageSlide />
        <h1 className="text-7xl text-white">Welcome to Foodies App</h1>
        <div className="flex gap-10">
          <Link href="/meals"><h2  className=" text-5xl text-white bg-red-600 rounded-lg p-4  hover:text-gray-200 hover:px-5 ">Explore Meals</h2></Link>
          <h2 className="text-5xl text-white hover:text-gray-200">|</h2>
          <Link href="/community"><h2 className="text-5xl text-white  bg-red-600 rounded-lg p-4 hover:text-gray-200 hover:px-5">Join Community</h2></Link>
        </div>
    </div>
  );
}
