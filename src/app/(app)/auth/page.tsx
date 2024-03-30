"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import Link from "next/link";

import logoCoruja from "@/app/assets/coruja_grande.png";
import { Separator } from "@/components/ui/separator";
import { FacebookLoginButton } from "./_components/facebook-auth-button";
import { GithubLoginButton } from "./_components/github-auth-button";
import { GoogleLoginButton } from "./_components/google-auth-button";

export default function Auth() {
  return (
    <section className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-slate-950 via-30% to-slate-700 p-4 md:p-8">
      <form
        action="submit"
        className="mx-2 my-8 w-full overflow-hidden rounded-xl border border-gray-200 bg-zinc-100 dark:border-gray-800 md:w-[650px]"
      >
        <div className="space-y-4 p-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Image src={logoCoruja} alt="coruja" width={100} height={100} />
            <h1 className="text-2xl font-semibold lg:text-3xl">Login</h1>

            <span className="md:text-md w-full text-gray-500 dark:text-gray-400">
              Entre com sua matrícula e senha para acessar sua conta
            </span>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-1/2 space-y-2">
                <Label htmlFor="matricula">Matrícula</Label>
                <Input
                  className="text-sm"
                  id="matricula"
                  placeholder="Insira sua matrícula"
                  required
                  type="text"
                />
              </div>
              <div className="w-1/2 space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  className="text-sm"
                  id="password"
                  required
                  type="password"
                  placeholder="Digite sua senha"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Select required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Eu sou" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Eu sou</SelectLabel>
                    <SelectItem value="Aluno">Aluno</SelectItem>
                    <SelectItem value="Professor">Professor</SelectItem>
                    <SelectItem value="Administrador">Administrador</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full text-sm" size="sm">
              Login
            </Button>
          </div>

          <div className="flex items-center justify-center px-8">
            <Separator className="w-1/3" />
            <span className="mx-4 text-xs font-semibold text-slate-900 ">
              Ou continue com
            </span>
            <Separator className="w-1/3" />
          </div>
          <div className="flex items-center justify-center">
            <GoogleLoginButton />
            <FacebookLoginButton />
            <GithubLoginButton />
          </div>
          <Link
            className="inline-block w-full text-center text-sm underline"
            href="#"
          >
            Esqueceu sua senha?
          </Link>
        </div>
      </form>
    </section>
  );
}
