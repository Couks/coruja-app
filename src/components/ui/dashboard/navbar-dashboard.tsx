/* eslint-disable @next/next/no-img-element */
import { GraduationCapIcon, LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "../button";

export default function NavBarDashboard() {
  const userData = {
    name: "Matheus Castro",
    email: "matheus.2120478300017@faeterj-edu.br",
    photoUrl: "https://avatars.githubusercontent.com/u/49662686?v=4",
  };

  return (
    <aside className="col-span-1 flex flex-col items-center space-y-4 rounded-r-lg bg-gradient-to-b from-slate-900 via-zinc-950/90 to-slate-800 p-4 text-white">
      <img
        src={userData.photoUrl}
        alt="Foto do Usuário"
        className="size-12 rounded-full object-cover shadow-lg md:size-24"
      />
      <h3 className="text-xs font-semibold md:text-xl">{userData.name}</h3>
      <p className="mb-6 text-xs">{userData.email}</p>
      <nav className="flex w-full flex-col gap-4 text-left">
        <Link href="#">
          <Button>
            <GraduationCapIcon className="size-5" />
            <span>Matérias</span>
          </Button>
        </Link>

        <Link href="#">
          <Button>
            <LogOut className="size-5" />
            <span>Sair</span>
          </Button>
        </Link>
      </nav>
    </aside>
  );
}
