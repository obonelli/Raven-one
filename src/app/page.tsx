import Link from "next/link";
import { Button } from "@obonelli/raven-ui";

export default function Page() {
  return (
    <section>
      <h1>Raven-one</h1>
      <p className="mt-4 text-[var(--muted)]">
        Base app in Next.js + Tailwind to centralize all our web projects.
      </p>

      <div className="mt-8 flex gap-4">
        <Link href="/#docs">
          <Button variant="primary" disabled>
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}
