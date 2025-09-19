"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
    return (
        <header className={cn("sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur")}>
            <nav className="container flex h-14 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-full bg-accent-500 shadow-glow" />
                    <span className="font-semibold">Raven-one</span>
                </Link>
                <div className="flex items-center gap-6 text-sm">
                    <Link href="/#features">Features</Link>
                    <Link href="/#docs">Docs</Link>
                </div>
            </nav>
        </header>
    );
}
