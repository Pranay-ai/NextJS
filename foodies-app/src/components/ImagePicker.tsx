"use client";
import { useRef, useState } from "react";

export default function ImagePicker() {
    const imagePickerRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<string | null>(null);

    function handleClick() {
        imagePickerRef.current?.click();
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target?.files?.[0];

        if(!file) {
            setImage(null);
            return
        };
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result as string);
        };
        reader.readAsDataURL(file);
        
    }

    return (
        <div className="mt-4 flex flex-col items-center">
            <input
                type="file"
                ref={imagePickerRef}
                className="hidden"
                name="image"
                accept="image/jpeg, image/png"
                onChange={handleChange}
                required
            />
            {image && (
                <img
                    src={image}
                    alt="Your chosen image"
                    className="p-4 w-30 h-40 object-cover rounded-md shadow-md"
                />
            )}
            <button
                type="button"
                className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                onClick={()=>handleClick(event)}
            >
                Choose Your Image
            </button>
        </div>
    );
}
