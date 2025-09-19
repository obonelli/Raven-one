export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-10 text-sm text-[var(--muted)]">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                <p>© {new Date().getFullYear()} Raven-one</p>
                <p className="opacity-80">Built with Next.js + Tailwind</p>
            </div>
        </footer>
    );
}
