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
import logoCoruja from "../assets/coruja_grande.png";

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
            <a href="/">
              <div className="btn btn-outline flex items-center justify-center gap-2 rounded-full p-2 ring-1 ring-zinc-300">
                <div className="size=2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </div>

                <span className="text-xs">
                  Entre com sua conta Google Acadêmico
                </span>
              </div>
            </a>
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
