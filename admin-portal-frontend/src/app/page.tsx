import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between p-24">
      <Link href="/emergencies">Go to emergencies</Link>
      <Link href="/general-principles">Go to general principles</Link>
      <Link href="/all-page">Go to pages</Link>
    </main>
  );
}
