import Link from "next/link";
import Container from "../components/Container";

export default function NotFound() {
  return (
    <Container title="404 / Kasper Viita">
      <h1>404</h1>
      <p>Nope, nothing here!</p>
      <Link href="/">Go to front page</Link>
    </Container>
  );
}
