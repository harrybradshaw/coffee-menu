import { getAllDrinks } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
  const drinks = await getAllDrinks();
  return (
    <div>
      <h1>COFFEE MENU</h1>
      {drinks.map((drink) => (
        <div key={drink.name}>
          <Link href={`/coffee/${drink.slug}`}>{drink.name}</Link>
        </div>
      ))}
    </div>
  );
}
