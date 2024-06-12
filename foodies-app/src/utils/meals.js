
import sql from "better-sqlite3";
import fs from "node:fs";
import slugify from "slugify";
import {uploadImage} from "./firebase-actions.js";
import {getImageUrl} from "./firebase-actions.js";
import { get } from "node:http";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMealBySlug(slug) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title.toLowerCase());
  const imgExt = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${imgExt}`;


  if (meal.creator_email.split("@")[1] !== "gmail.com") {
    return {
      message: "Only Gmail accounts are allowed to create meals.",
    };
  }

//   const stream = fs.createWriteStream(`public/images/${fileName}`);
//   stream.write(Buffer.from(await meal.image.arrayBuffer()), (error) => {
//     if (error) {
//       console.error(error);
//     }
//   });
    await uploadImage(meal.image,fileName);

    meal.image =await getImageUrl(fileName);

  db.prepare(
    `
        Insert INTO meals (
            slug,
            title,
            image,
            summary,
            instructions,
            creator,
            creator_email
        ) VALUES (
            @slug,
            @title,
            @image,
            @summary,
            @instructions,
            @creator,
            @creator_email
        )
        `
  ).run(meal);
}
