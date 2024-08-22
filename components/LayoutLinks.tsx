import React from "react";
import LayoutLinksClient from "./LayoutLinksClient";
import { TypeDrinksSkeleton } from "@/lib/contentfulTypes";
import { Fields, getAllDrinks } from "@/lib/api";

export interface LayoutLinksProps {
    drinks: Array<Fields<TypeDrinksSkeleton>>
}

export default async function LayoutLinks() {
    const drinks = await getAllDrinks();
    return (
        <LayoutLinksClient drinks={drinks} />
    );
}
