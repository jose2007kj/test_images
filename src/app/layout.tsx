import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar"
export const metadata: Metadata = {
    title: "My Image Search",
    description: "Changing the world one image at a time",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main className="max-w-6xl mx-auto">{children}</main>
            </body>
        </html>
    );
}
