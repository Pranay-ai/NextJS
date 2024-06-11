import Link from "next/link";
import MealsGrid from "@/components/MealsGrid";
import { getMeals } from "../../utils/meals";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default async function Meals() {
    const meals = await getMeals();
    return (
        <div className="flex flex-col w-full h-full bg-gray-800 items-center text-orange-500">

            <h1 className="text-5xl pt-10 text-shadow">Delicious Meals, Created By You</h1>
            <div className="flex justify-center">
                <p className="text-xl text-center w-2/3 pt-5 pb-4">Choose your favorite meal and enjoy a delicious lunch or dinner at home
                    </p>
            </div>


            <Link href="/meals/share">
                <p className="bg-orange-500 px-4 py-2 rounded-xl text-3xl text-white text-center">
                    Share Your Meals HERE
                </p>
            </Link>

            


{/* Add Suspense here */}
            <Suspense fallback={<Loading/>} >
            <MealsGrid meals={meals} />
            </Suspense>
            

        </div>
    );
}
