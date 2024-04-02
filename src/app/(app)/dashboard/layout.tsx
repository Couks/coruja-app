import "@/app/globals.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SidebarDashboard from "./_components/sidebar-dashboard";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  if (!session) {
    return redirect("/auth");
  }
  return (
    <div className="flex h-screen w-auto">
      <SidebarDashboard />

      <section className="flex-1 flex-col items-center overflow-auto bg-zinc-100 p-2 dark:bg-gray-800 md:p-4 ">
        {children}
      </section>
    </div>
  );
}
