import Link from "next/link";
import Container from "../components/Container";

export default function NotFound() {
  return (
    <Container title="404 / Kasper Viita">
      <h1>404</h1>
      <p className="py-32 text-right">
        I contain multitudes, but not that one.
      </p>
      <Link className="underline decoration-dotted" href="/">
        Go to the front page.
      </Link>
    </Container>
  );
}
