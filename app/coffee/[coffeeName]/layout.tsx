import LayoutLinks from "@/components/LayoutLinks";
import ShoppingCartHeader from "@/components/ShoppingCartHeader";
import { getDrinkBySlug } from "@/lib/api";
import Link from "next/link";
import React from "react";

export default async function CoffeeLayout({
    params,
    children,
    recipe,
}: Readonly<{
    params: { coffeeName: string }
    children: React.ReactNode
    recipe: React.ReactNode
}>) {
    const drink = await getDrinkBySlug(params.coffeeName);

    return (
        <div className="flex">
            <div className="mx-3">
                <Link href="/">
                    <h1>COFFEE MENU</h1>
                </Link>
                <LayoutLinks />
            </div>
            <div className="flex-1">
                <div className="flex mb-4">
                    <div className="flex-1">
                        <h2>{drink.name}</h2>
                    </div>
                    <div>
                        <ShoppingCartHeader />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1">
                        {children}
                    </div>
                    <div className="">
                        {recipe}
                    </div>
                </div>
            </div>
        </div>
    );
}
