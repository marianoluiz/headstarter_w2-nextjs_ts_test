// src/app/page.tsx
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <main>
      <h1 className="text-4xl font-bold mt-10">Hello There</h1>

      <Link href="/about">
        <button className="font-bold mt-10">Click to go to About Page</button>
      </Link>
    </main>
  );
}

export default Home;
