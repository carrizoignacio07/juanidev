import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="p-4 flex items-center justify-between gap-5 font-sans">
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
