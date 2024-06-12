import { getMealBySlug } from "@/utils/meals";
import Image from "next/image";

interface MealDetailProps {
  params: {
    mealSlug: string;
  };
}

export default async function MealDetail({ params }: MealDetailProps) {
  const mealSlug = params.mealSlug;
  const meal = await getMealBySlug(mealSlug);
  const instructions = JSON.parse(meal.instructions);

  return (
    <div className="flex flex-col bg-gray-800 p-10 h-screen">

        <div className="relative h-96 w-3/12 rounded-3xl ">
            <Image src={meal.image} alt={meal.title} layout="fill" objectFit="cover" className="rounded-3xl " />
        </div>

      <h1 className="text-orange-500 pt-8 text-3xl text-shadow font-bold">{meal.title}</h1>
      <h2 className="text-white text-xl font-semibold pl-10">-{meal.creator}</h2>
      <p className="text-orange-500 text-xl font-semibold ">{meal.summary}</p>
      <div>
        <h2 className="text-3xl text-white font-bold pb-5">Instructions</h2>
        <ul className="flex flex-col gap-3 text-xl text-orange-400 font-semibold">
          {instructions.map((instruction: string, index: number) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
