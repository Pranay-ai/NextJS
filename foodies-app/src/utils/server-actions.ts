import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
export async function shareMeal(formData: FormData) {
  "use server";

  const meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: JSON.stringify((formData.get("instructions") as string).split("/n")),
    image: formData.get("image") as string,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  await saveMeal(meal);
  redirect("/meals")
}
