import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getSession()

  if(!session?.user) {
    redirect("/")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold">Agendamentos</h1>
      <p className="mt-4 text-lg text-gray-600">Faça seu agendamento aqui.</p>
    </main>
  );
}