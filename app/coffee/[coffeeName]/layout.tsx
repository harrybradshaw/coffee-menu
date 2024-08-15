import { getAllDrinks } from "@/lib/api";
import Link from "next/link";

export default async function CoffeeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const drinks = await getAllDrinks();
  return (
    <div className={"flex"}>
      <div>
        <h1>COFFEE MENU</h1>
        {drinks.map((drink) => (
          <div key={drink.name}>
            <Link href={`/coffee/${drink.slug}`}>{drink.name}</Link>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
