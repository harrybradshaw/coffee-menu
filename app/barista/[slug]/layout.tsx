import React from "react";

interface BaristaLayoutProps {
    children: React.ReactNode
    drink: React.ReactNode
}

export default function BaristaLayout({
    children,
    drink,
}: BaristaLayoutProps) {
    return (
        <div className="flex">
            <div>
                {children}
            </div>
            <div>
                {drink}
            </div>
        </div>
    );
}
