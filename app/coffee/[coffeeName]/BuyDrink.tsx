"use client";
import React, { useState } from "react";

export const BuyDrink: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h3>
                You have bought
                {count}
                {" "}
                drinks!
            </h3>
            <button onClick={() => setCount(pv => pv + 1)}>Buy Drink</button>
        </>
    );
};
