"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type OpenKey = "ai" | "games" | null;

type NavLink = {
    href: string;
    label: string;
    external?: boolean;
};

function Dropdown({
    label,
    icon,
    links,
    open,
    setOpen,
    id,
}: {
    label: string;
    icon: string;
    links: NavLink[];
    open: OpenKey;
    setOpen: (k: OpenKey) => void;
    id: OpenKey;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isOpen = open === id;

    return (
        <div
            ref={ref}
            className="relative"
            onMouseEnter={() => setOpen(id)}
            onMouseLeave={() => setOpen(null)}
            onFocus={() => setOpen(id)}
            onBlur={(e) => {
                if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(null);
            }}
        >
            <button
                className={cn(
                    "flex items-center gap-1 px-1 py-2 hover:text-accent-400 focus:outline-none focus-visible:ring-2",
                    isOpen && "text-accent-300"
                )}
                aria-haspopup="menu"
                aria-expanded={isOpen}
            >
                <span>{icon}</span>
                {label}
            </button>

            <div className="absolute left-0 right-0 h-2 translate-y-2" />

            {isOpen && (
                <div
                    role="menu"
                    className={cn(
                        "absolute right-0 mt-2 min-w-56 rounded-md",
                        "bg-black/85 backdrop-blur-md border border-white/15",
                        "shadow-[0_12px_40px_rgba(0,180,255,.25)] ring-1 ring-white/10",
                        "origin-top-right animate-in fade-in-0 zoom-in-95 duration-150"
                    )}
                >
                    {links.map((l) =>
                        l.external ? (
                            <a
                                key={l.href}
                                href={l.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                                onClick={() => setOpen(null)}
                                className={cn(
                                    "block px-4 py-2.5 text-[13px]",
                                    "text-slate-200 hover:text-white",
                                    "hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                                )}
                            >
                                {l.label} <span className="ml-1 opacity-70">↗</span>
                            </a>
                        ) : (
                            <Link
                                key={l.href}
                                href={l.href}
                                role="menuitem"
                                onClick={() => setOpen(null)}
                                className={cn(
                                    "block px-4 py-2.5 text-[13px]",
                                    "text-slate-200 hover:text-white",
                                    "hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                                )}
                            >
                                {l.label}
                            </Link>
                        )
                    )}
                </div>
            )}
        </div>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState<OpenKey>(null);

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur">
            <nav className="container flex h-14 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-full bg-accent-500 shadow-glow" />
                    <span className="font-semibold">Raven-one</span>
                </Link>

                <div className="flex items-center gap-6 text-sm">
                    <Dropdown
                        label="AI-LLM Projects"
                        icon="👩‍💻"
                        id="ai"
                        open={open}
                        setOpen={setOpen}
                        links={[
                            {
                                href: "https://llmplatform.obonelli.dev/people",
                                label: "People (LLM App)",
                                external: true,
                            },
                            {
                                href: "https://luxintenebris.mx",
                                label: "Talent Matching",
                                external: true,
                            },
                        ]}
                    />

                    <Dropdown
                        label="Games"
                        icon="🎮"
                        id="games"
                        open={open}
                        setOpen={setOpen}
                        links={[
                            {
                                href: "https://llmplatform.obonelli.dev/playground",
                                label: "AI Starships Playground",
                                external: true,
                            },
                            {
                                href: "https://crimson-fate-nine.vercel.app/",
                                label: "Crimson Vow",
                                external: true,
                            },
                            {
                                href: "https://the-witcher-trial.vercel.app/",
                                label: "Witcher Signs Trainer",
                                external: true,
                            },
                        ]}
                    />
                </div>
            </nav>
        </header>
    );
}
