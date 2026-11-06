
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-green-900 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-2xl font-bold text-yellow-400"
        >
          TRAFFORD CEYLON
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/teas">Our Teas</Link>
          <Link href="/wholesale">Wholesale</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}
