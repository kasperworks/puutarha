import Link from 'next/link';
import Container from '../components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Kasper Viita">
      <h1>420 – Ei pysty</h1>
      <p>Kipunoiva pöllö.</p>
      <Link href="/">
        <a>Palaa kotiin</a>
      </Link>
    </Container>
  );
}
