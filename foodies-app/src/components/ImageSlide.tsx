"use client"
import burgerImg from "../../public/images/burger.jpg";
import curryImg from "../../public/images/curry.jpg";
import pizzaImg from "../../public/images/pizza.jpg";
import dumplingsImg from "../../public/images/dumplings.jpg";
import macncheeseImg from "../../public/images/macncheese.jpg";
import schnitzelImg from "../../public/images/schnitzel.jpg";
import tomatoSaladImg from "../../public/images/tomato-salad.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageList = [
  { Image: burgerImg, alt: "burger" },
  { Image: curryImg, alt: "curry" },
  { Image: pizzaImg, alt: "pizza" },
  { Image: dumplingsImg, alt: "dumplings" },
  { Image: macncheeseImg, alt: "mac n cheese" },
  { Image: schnitzelImg, alt: "schnitzel" },
  { Image: tomatoSaladImg, alt: "tomato salad" },
];

export default function ImageSlide() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % ImageList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-2/3 p-4">
        <Image
          src={ImageList[currentImage].Image}
          alt={ImageList[currentImage].alt}
          layout="responsive"
          className="rounded-xl shadow-lg w-full h-auto"
        />
      </div>
    </div>
  );
}
