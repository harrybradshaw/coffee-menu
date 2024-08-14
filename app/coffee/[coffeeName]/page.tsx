import React from "react";
import { getDrinkBySlug } from "@/lib/api";
import Image from "next/image";

export default async function CoffeePage({ coffeeName }) {
  const drink = await getDrinkBySlug(coffeeName);
  return (
    <>
      <h1>{drink.name}</h1>
      <Image
        src={drink.image.url}
        alt={drink.name}
        width={1200}
        height={1200}
      />
    </>
  );
}
