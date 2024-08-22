"use client";
import React, { createContext, useState, Dispatch, SetStateAction, useContext } from "react";

const ShoppingCartContext = createContext<string[]>([]);
const SetShoppingCartContext = createContext<Dispatch<SetStateAction<string[]>> | undefined>(undefined);

interface ShoppingCartContextProviderProps {
    children: React.ReactNode
}

export default function ShoppingCartContextProvider({
    children,
}: ShoppingCartContextProviderProps) {
    const [shoppingCart, setShoppingCart] = useState<string[]>([]);

    return (
        <ShoppingCartContext.Provider value={shoppingCart}>
            <SetShoppingCartContext.Provider value={setShoppingCart}>
                {children}
            </SetShoppingCartContext.Provider>
        </ShoppingCartContext.Provider>
    );
}

export const useShoppingCart = (): string[] => {
    return useContext(ShoppingCartContext);
};

export const useSetShoppingCart = (): Dispatch<SetStateAction<string[]>> => {
    const context = useContext(SetShoppingCartContext);
    if (!context) {
        throw new Error("Not within provider");
    }
    return context;
};
