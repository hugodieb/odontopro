import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";
import { getUserData } from "./_data-access/get-info-user";
import { ProfileContent } from "./_components/profile";

export default async function DashboardProfile() {
  const session = await getSession()
  
  if(!session?.user) {
    redirect("/")
  }

  const user = await getUserData({ userId: session?.user?.id || "" })
  
  return (
    <main className="items-center justify-center">
      <ProfileContent />
    </main>
  );
}
