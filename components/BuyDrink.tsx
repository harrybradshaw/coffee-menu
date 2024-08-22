"use client";
import React from "react";
import { useSetShoppingCart, useShoppingCart } from "./ShoppingCartContext";
import { DrinkWithUrl } from "@/lib/api";

interface BuyDrinkProps {
    drink: DrinkWithUrl
}

export const BuyDrink: React.FC<BuyDrinkProps> = ({
    drink,
}) => {
    const drinkId = drink.id;
    const shoppingCart = useShoppingCart();
    const setShoppingCart = useSetShoppingCart();

    return (
        <>
            <h3>
                You have bought
                {" "}
                {shoppingCart.filter(i => i === drinkId).length}
                {" "}
                drinks!
            </h3>
            <button onClick={() => setShoppingCart(pv => [...pv, drinkId])}>Buy Drink</button>
        </>
    );
};
