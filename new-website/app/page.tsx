
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-green-50 px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
          Premium Ceylon Tea
        </p>

        <h1 className="mb-6 max-w-3xl text-4xl font-bold text-green-900 md:text-6xl">
          Discover Your Perfect Blend
        </h1>

        <p className="mb-8 max-w-xl text-lg text-gray-600">
          Experience the finest Ceylon teas, carefully selected
          to bring exceptional quality and authentic flavor
          to every cup.
        </p>

        <Link
          href="/teas"
          className="rounded-full bg-green-800 px-8 py-3 font-medium text-white transition hover:bg-green-700"
        >
          Explore Our Teas
        </Link>
      </main>
    </div>
  );
}
