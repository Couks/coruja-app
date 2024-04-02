import logoCoruja from "@/app/assets/coruja_grande.png";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import { CircleUser } from "lucide-react";
import DropDownMenuDashboard from "./dropdown-menu-dashboard";
import MenuLinks from "./menu-links";

export default function SidebarDashboard() {
  return (
    <aside className="fixed bottom-0 flex w-full items-center bg-gradient-to-b from-slate-900 via-zinc-950 to-slate-800 px-4 py-3 text-white md:static md:h-screen md:w-auto md:flex-col md:items-start md:justify-between md:px-6 md:py-8">
      <nav className="flex md:flex-col">
        <div className="hidden w-auto items-center md:flex">
          <Image src={logoCoruja} alt="Logo Coruja" width={50} height={50} />
          <div className="w-18 overflow-auto">
            <h1 className="text-md font-semibold">Faeterj Rio</h1>
            <span className="text-xs">Olá, seja bem vindo!</span>
          </div>
        </div>

        <Separator className="my-3 hidden md:block" />

        <MenuLinks></MenuLinks>
      </nav>

      <nav className="flex md:bottom-3 md:w-full md:flex-col md:items-center md:justify-center md:gap-3">
        <Separator className="hidden md:block" />
        <div className="flex md:bottom-3 md:w-full md:flex-row md:items-center md:justify-center md:gap-4">
          <DropDownMenuDashboard />

          <div className="hidden items-start justify-center md:flex md:flex-col">
            <span className="text-md font-bold text-white">
              Nome do Usuário
            </span>
            <span className="flex items-center gap-1 text-xs text-white">
              <CircleUser className="size-4" />
              2120478300017
            </span>
            SD
          </div>
        </div>
      </nav>
    </aside>
  );
}
