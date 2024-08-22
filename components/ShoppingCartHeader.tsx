"use client";

import { useShoppingCart } from "./ShoppingCartContext";

export default function ShoppingCartHeader() {
    const shoppingCart = useShoppingCart();
    return (
        <>
            Shopping Cart ({shoppingCart.length})
        </>
    );
}
