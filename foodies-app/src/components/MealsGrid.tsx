import MealItem from "./MealItem";

interface Meal {
    id: string;
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
}

export default function MealsGrid({ meals }: { meals: Meal[] }) {
    return (

                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 p-10">
            {meals.map((meal) => (
                <li  key={meal.id}>
                    <MealItem
                        title={meal.title}
                        slug={meal.slug}
                        image={meal.image}
                        summary={meal.summary}
                        creator={meal.creator}
                    />
                </li>
            ))}
        </ul>

    );
}
