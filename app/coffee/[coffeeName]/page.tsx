import React from "react";
import { getAllDrinks, getDrinkBySlug } from "@/lib/api";
import Image from "next/image";
import { BuyDrink } from "@/components/BuyDrink";

export default async function CoffeePage({
    params,
}: {
    params: { coffeeName: string }
}) {
    const { coffeeName } = params;
    const drink = await getDrinkBySlug(coffeeName);
    return (
        <div>
            <h1>{drink?.name}</h1>
            <Image
              src={drink?.url || ""}
              alt={drink?.name}
              priority
              width={500}
              height={500}
            />
            <BuyDrink drink={drink} />
        </div>
    );
}

// Generate static pages.
// The build step shows up that these pages are opted into SSG.
// However, depending on if the fetch() has caching configured it will either serve static HTML or dynamicly render.
// Can see this by introducing a console.log(...) and seeing if the server logs it.
// Also applies to any layouts that this might use, i.e. try placing a headers() in the layout and it becomes dynamic.
// Doesn't seem to be an easy way to see if we are trying to SSG something dynamic?
export async function generateStaticParams() {
    const drinks = await getAllDrinks();
    return drinks.map(drink => ({
        coffeeName: drink.slug,
    }));
}
