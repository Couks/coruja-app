import "@/app/globals.css";

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

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

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
      <aside className="fixed bottom-0 flex w-full items-center justify-between bg-gradient-to-b from-slate-900 via-zinc-950 to-slate-800 px-4 py-3 text-white md:static md:h-screen md:w-auto md:flex-col md:items-start md:justify-between md:px-4 md:py-8">
        <nav className="flex gap-6 md:flex-col">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 transition hover:text-blue-400"
          >
            <Home className="size-5" />
            <span className="hidden font-semibold md:block">Início</span>
          </Link>
          <Link
            href="/dashboard/inscricao"
            className="flex items-center gap-2 transition hover:text-blue-400"
          >
            <BookPlus className="size-5" />
            <span className="hidden font-semibold md:block">Inscrição</span>
          </Link>
          <Link
            href="/dashboard/grade"
            className="flex items-center gap-2 transition hover:text-blue-400 "
          >
            <CalendarClock className="size-5" />
            <span className="hidden font-semibold md:block">Grade Horária</span>
          </Link>
          <Link
            href="/dashboard/materias"
            className="flex items-center gap-2 transition hover:text-blue-400"
          >
            <NotebookPen className="size-5" />
            <span className="hidden font-semibold md:block">Matérias</span>
          </Link>
          <Link
            href="/dashboard/matricula"
            className="flex items-center gap-2 transition hover:text-blue-400"
          >
            <File className="size-5" />
            <span className="hidden font-semibold md:block">
              Ficha de Matrícula
            </span>
          </Link>
          <Link
            href="/dashboard/emissoes"
            className="flex items-center gap-2 transition hover:text-blue-400"
          >
            <GraduationCapIcon className="size-5" />
            <span className="hidden font-semibold md:block">Emissões</span>
          </Link>
        </nav>

        <nav className="flex md:w-full md:items-center md:justify-center md:gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage
                  src={session.user?.image || "https://github.com/shadcn.png"}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[250px] shadow-inner ring-2 ring-slate-300 md:ml-2">
              <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
              <DropdownMenuLabel className="pb-2">
                <span className="text-xs font-normal">
                  {session.user?.email}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Perfil
                  <DropdownMenuShortcut>
                    <CircleUser className="size-4" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  Configurações
                  <DropdownMenuShortcut>
                    <Settings className="size-4" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Sair
                <DropdownMenuShortcut>
                  <LogOut className="size-4" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="hidden items-start justify-center md:flex md:flex-col">
            <span className="text-[12px] font-normal text-white">
              Olá, seja bem vindo!
            </span>
            <span className="text-md font-bold text-white">
              {session.user?.name}
            </span>
          </div>
        </nav>
      </aside>
      <section className="flex-1 flex-col items-center overflow-auto bg-zinc-100 p-2 dark:bg-gray-800 md:p-4 ">
        {children}
      </section>
    </div>
  );
}
