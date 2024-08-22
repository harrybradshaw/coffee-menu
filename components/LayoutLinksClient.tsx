"use client";

import { usePathname } from "next/navigation";
import { LayoutLinksProps } from "./LayoutLinks";
import Link from "next/link";

export default function LayoutLinksClient({ drinks, baristas }: LayoutLinksProps) {
    const pathname = usePathname();
    return (
        <>
            <div className="mb-3">
                {drinks.map(drink => (
                    <div key={drink.name}>
                        <Link
                          href={`/coffee/${drink.slug}`}
                          className={pathname === drink.slug ? "active" : ""}
                        >
                            {drink.name}
                        </Link>
                    </div>
                ))}
            </div>
            <div className="mb-3">
                {baristas.map(barista => (
                    <div key={barista.firstName}>
                        <Link
                          href={`/barista/${barista.firstName}`}
                        >
                            {barista.firstName}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
