const sql = require('better-sqlite3');
import fs from 'node:fs';
import { Interface } from 'node:readline';

import slugify from 'slugify';
import xss from 'xss';
const db = sql('meals.db');



export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return db.prepare('SELECT * FROM meals').all();
}


export async function getMealBySlug(slug) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title.toLowerCase());
    const imgExt = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${imgExt}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`)
    stream.write(Buffer.from(await meal.image.arrayBuffer()), (error) => {
        if (error) {
            console.error(error);
        }
    })

    meal.image = `/images/${fileName}`;

    db.prepare(`
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
        `).run(meal);

}
