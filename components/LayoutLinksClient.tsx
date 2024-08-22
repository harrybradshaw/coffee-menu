"use client";

import { usePathname } from "next/navigation";
import { LayoutLinksProps } from "./LayoutLinks";
import Link from "next/link";

export default function LayoutLinksClient({ drinks }: LayoutLinksProps) {
    const pathname = usePathname();
    return (
        <>
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
        </>
    );
}
