import React from "react";
import { getDrinkBySlug } from "@/lib/api";
import Image from "next/image";
import { BuyDrink } from "@/app/coffee/[coffeeName]/BuyDrink";

export default async function CoffeePage({
  params,
}: {
  params: { coffeeName: string };
}) {
  const { coffeeName } = params;
  const drink = await getDrinkBySlug(coffeeName);
  return (
    <>
      <h1>{drink?.name}</h1>
      <Image
        src={drink?.image.url}
        alt={drink?.name}
        width={1200}
        height={1200}
      />
      <BuyDrink />
    </>
  );
}
