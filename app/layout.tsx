import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ShoppingCartContextProvider from "@/components/ShoppingCartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Coffee Menu",
    description: "Drinks",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ShoppingCartContextProvider>
                    {children}
                </ShoppingCartContextProvider>
            </body>
        </html>
    );
}
