import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-4xl font-bold">Welcome to the Dashboard!</h1>
      <p className="mt-4 text-lg text-gray-600">This is the dashboard page.</p>

      <nav className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/dashboard/services"
          className="px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700"
        >
          Services
        </Link>
        <Link
          href="/dashboard/plans"
          className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
        >
          Plans
        </Link>
        <Link
          href="/dashboard/profile"
          className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700"
        >
          Profile
        </Link>
      </nav>
    </main>
  );
}