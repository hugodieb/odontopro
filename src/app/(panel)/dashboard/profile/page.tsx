import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";
import { getUserData } from "./_data-access/get-info-user";

export default async function DashboardProfile() {
  const session = await getSession()
  
  if(!session?.user) {
    redirect("/")
  }

  const user = await getUserData({ userId: session?.user?.id || "" })
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold">Profile</h1>
      <p className="mt-4 text-lg text-gray-600">Edit your profile and settings here.</p>
    </main>
  );
}
