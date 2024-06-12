  "use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
export async function  shareMeal(prevState:any,formData: FormData) {

  const meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: JSON.stringify((formData.get("instructions") as string).split("/n")),
    image: formData.get("image") as string,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  if(meal.creator_email.split('@')[1] !== "gmail.com") {
    return {
      message: "Only Gmail accounts are allowed"
    }
  }

  await saveMeal(meal);
  redirect("/meals")
}
