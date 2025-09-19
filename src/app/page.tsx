import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1>Raven-one</h1>
      <p className="mt-4 text-[var(--muted)]">
        Base app en Next.js + Tailwind para construir nuestro ecosistema.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/#docs"><Button>Get Started</Button></Link>
        <Link href="/#features"><Button variant="outline">Ver features</Button></Link>
      </div>
    </section>
  );
}
