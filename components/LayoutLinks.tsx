import React from "react";
import LayoutLinksClient from "./LayoutLinksClient";
import { TypeBaristaSkeleton, TypeDrinksSkeleton } from "@/lib/contentfulTypes";
import { Fields, getAllDrinks, getBaristas } from "@/lib/api";

export interface LayoutLinksProps {
    drinks: Array<Fields<TypeDrinksSkeleton>>
    baristas: Array<Fields<TypeBaristaSkeleton>>
}

export default async function LayoutLinks() {
    const drinks = await getAllDrinks();
    const baristas = await getBaristas();
    return (
        <LayoutLinksClient drinks={drinks} baristas={baristas} />
    );
}
