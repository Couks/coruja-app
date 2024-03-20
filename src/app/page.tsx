import Image from "next/image";
import logoCoruja from "./assets/coruja_grande.png";



export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 p-4 md:p-8 text-zinc-100">
      <Image src={logoCoruja} alt="Logo Coruja" width={120} height={120} />
      <h1 className="mt-5 text-center text-4xl font-bold md:text-5xl">
        Bem-vindo ao Coruja Edu!
      </h1>
      <p className="mt-2 text-center text-lg md:text-xl">
        Conectando alunos e professores com eficiência e simplicidade.
      </p>
      <p className="text-md mt-5 text-center animate-pulse">
        Aguarde, você será redirecionado para o painel de controle...
      </p>
    </div>
  );
}
