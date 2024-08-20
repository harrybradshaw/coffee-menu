import React from "react";
import { getAllDrinks, getDrinkBySlug } from "@/lib/api";
import Image from "next/image";
import { BuyDrink } from "@/app/coffee/[coffeeName]/BuyDrink";

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
              width={1200}
              height={1200}
            />
            <BuyDrink />
        </div>
    );
}

export async function generateStaticParams() {
    const drinks = await getAllDrinks();
    return drinks.map(drink => ({
        coffeeName: drink.slug,
    }));
}
