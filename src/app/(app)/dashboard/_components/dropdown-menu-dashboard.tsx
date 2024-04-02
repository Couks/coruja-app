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
import { CircleUser, LogOut, Settings } from "lucide-react";
import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DropDownMenuDashboard() {
  const session = await getSession();
  console.log(session);

  if (!session) {
    return redirect("/auth");
  }

  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Avatar>
        <AvatarImage
          src={session.user?.image || "https://github.com/shadcn.png"}
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="min-w-[250px] ring-2 ring-slate-900 drop-shadow-2xl md:ml-2">
      <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
      <DropdownMenuLabel className="pb-2">
        <span className="text-xs font-normal">{session.user?.email}</span>
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
      <Link
        href="/auth"
        onClick={() => {
          signOut({ callbackUrl: "/auth" });
        }}
      >
        <DropdownMenuItem>
          Sair
          <DropdownMenuShortcut>
            <LogOut className="size-4" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </Link>
    </DropdownMenuContent>
  </DropdownMenu>;
}
