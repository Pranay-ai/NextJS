"use client";
import { useRouter } from "next/navigation";
export default function ImageModal() {
    const router = useRouter();
    return (
      <div className="absolute inset-0 bg-black opacity-50" onClick={router.back}></div>
    );


}