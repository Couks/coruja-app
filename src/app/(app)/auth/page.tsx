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
import { GoogleLoginButton } from "@/components/ui/login/google-auth-button";

export default function Auth() {
  return (
    <section className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-slate-950 via-30% to-slate-700 p-4 md:p-8">
      <form className="mx-2 my-8 w-full overflow-hidden rounded-lg border border-gray-200 bg-zinc-100 dark:border-gray-800 md:w-[650px]">
        <div className="space-y-4 p-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Image src={logoCoruja} alt="coruja" width={50} height={50} />
            <h1 className="text-3xl font-semibold">Login</h1>

            <span className="w-60 text-gray-500 dark:text-gray-400">
              Entre com sua matrícula e senha para acessar sua conta
            </span>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="matricula">Matrícula</Label>
              <Input
                className="text-sm"
                id="matricula"
                placeholder="Insira sua matrícula da FAETERJ"
                required
                type="text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                className="text-sm"
                id="password"
                required
                type="password"
                placeholder="Digite sua senha"
              />
            </div>
            <div className="space-y-2">
              <Select>
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

            <GoogleLoginButton />
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
