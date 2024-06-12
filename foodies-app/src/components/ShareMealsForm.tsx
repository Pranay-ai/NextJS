"use client";
import ImagePicker from "./ImagePicker";
import { shareMeal } from "../utils/server-actions";
import { useFormStatus } from "react-dom";
export default function ShareMealsForm() {
    const{pending}=useFormStatus()

    return (
        <button disabled={pending}
        type="submit"
        className={pending ? "bg-gray-500 py-2 px-3 text-white text-xl font-semibold text-shadow rounded-lg hover:bg-gray-800 hover:px-8" : "bg-orange-500 py-2 px-3 text-white text-xl font-semibold text-shadow rounded-lg hover:bg-gray-800 hover:px-8"}
      >
        {!pending ? "Share Meal": "Sharing..."}
      </button>

    );



}

