import { db, Like } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Like).values([
    {
      id: "post-1",
      likes: 1,
    },
    {
      id: "post-2",
      likes: 2,
    },
  ]);
}
