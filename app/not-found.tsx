import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-32 lg:py-40 text-center flex flex-col items-center gap-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        404 · Page not found
      </p>
      <h1 className="text-5xl lg:text-6xl font-bold text-dark tracking-tight">
        Wrong turn, driver.
      </h1>
      <p className="max-w-md text-text-secondary">
        The page you&apos;re looking for has rolled off the map. Let&apos;s get
        you back on the main route.
      </p>
      <Button href="/" variant="dark" size="lg" withArrow>
        Back to home
      </Button>
    </Container>
  );
}
