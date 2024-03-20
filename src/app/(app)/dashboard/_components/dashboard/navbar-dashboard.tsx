/* eslint-disable @next/next/no-img-element */

import {
  BookPlus,
  CalendarClock,
  CircleUser,
  File,
  GraduationCapIcon,
  Home,
  LogOut,
  NotebookPen,
  Settings,
} from "lucide-react";

import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function NavBarDashboard() {
  const session = await getServerSession();

  if (!session) {
    return redirect("/auth");
  }

  return (
    <aside className="col-span-2 flex flex-col items-center justify-between bg-gradient-to-b from-slate-900 via-zinc-950/90 to-slate-800 px-2 py-6 text-white md:items-start md:px-8 md:py-8">
      <nav className="space-y-8">
        <Link
          href="/"
          className="flex items-center gap-2 transition hover:text-blue-400"
        >
          <Home className="size-5" />
          <span className="hidden font-semibold md:block">Início</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 transition hover:text-blue-400"
        >
          <BookPlus className="size-5" />
          <span className="hidden font-semibold md:block">Inscrição</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 transition hover:text-blue-400 "
        >
          <CalendarClock className="size-5" />
          <span className="hidden font-semibold md:block">Grade Horária</span>
        </Link>
        <Link
          href="/dashboard"
          className="flex items-center gap-2 transition hover:text-blue-400"
        >
          <NotebookPen className="size-5" />
          <span className="hidden font-semibold md:block">Matérias</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 transition hover:text-blue-400"
        >
          <File className="size-5" />
          <span className="hidden font-semibold md:block">
            Ficha de Matrícula
          </span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 transition hover:text-blue-400"
        >
          <GraduationCapIcon className="size-5" />
          <span className="hidden font-semibold md:block">Emissões</span>
        </Link>
      </nav>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage
              src={session.user?.image || "https://github.com/shadcn.png"}
              className="size-12 rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
          <DropdownMenuLabel>
            <span className="text-xs">{session.user?.email}</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Perfil
              <DropdownMenuShortcut>
                <CircleUser className="size-5" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuItem>
              Configurações
              <DropdownMenuShortcut>
                <Settings className="size-5" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Sair
            <DropdownMenuShortcut>
              <LogOut className="size-5" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </aside>
  );
}
