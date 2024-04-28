import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/emergencies-page">Go to emergencies</Link>
      <Link href="/general-principles-page">Go to general principles</Link>
      <Link href="/all-page">Go to pages</Link>
    </main>
  );
}
