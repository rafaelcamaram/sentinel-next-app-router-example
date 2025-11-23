import Link from "next/link";

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-semibold mb-6">About Page</h1>
        <p className="text-lg mb-4">
          This is a test page to verify page view tracking works with client-side navigation.
        </p>
        <Link
          href="/"
          className="text-blue-600 hover:underline"
        >
          Go back to home
        </Link>
      </main>
    </div>
  );
}

