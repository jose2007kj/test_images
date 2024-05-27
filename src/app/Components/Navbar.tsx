import Link from 'next/link';
import Search from './Search'
import { ShoppingCart, User, Image } from 'lucide-react';

export default function Navbar(){
    return(
        <header className="bg-black sticky top-0 z-10">
            <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto text-white">
                <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
                    <Link href="/"> My Image Search </Link>
                </h1>
                <Search placeholder="Search..."/>
                <div className="flex gap-2">
                    <button className="flex items-center gap-1">
                        <Image className="w-5 h-5" /> Lightboxes
                    </button>
                    <button className="flex items-center gap-1">
                        <ShoppingCart className="w-5 h-5" /> Cart
                    </button>
                    <button className="flex items-center gap-1">
                        <User className="w-5 h-5" /> Sign In
                    </button>
                </div>
            </nav>
        </header>
    )
}
