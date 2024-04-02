import { BookOpenTextIcon, CircleDollarSign } from "lucide-react";
import Link from "next/link";

interface DisciplinaType {
  sigla: string;
  nome_completo: string;
  creditos: number;
  periodo: number;
  status: string;
}

export function Disciplina({
  item,
}: {
  item: {
    sigla: string;
    nome_completo: string;
    creditos: number;
    periodo: number;
    status: string;
  };
}) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "C":
        return "bg-green-300 ";
      case "A":
        return "bg-orange-300";
      default:
        return "bg-zinc-200";
    }
  };

  return (
    <Link href="#">
      <div
        className={`flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-gray-200 p-4 shadow-lg ring-slate-900 hover:ring-1 dark:border-gray-800 ${getStatusColor(
          item.status,
        )}`}
      >
        <BookOpenTextIcon className="h-10 w-10 rounded-lg bg-gray-100 p-2 dark:bg-gray-900" />
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-sm font-bold">
            {item.periodo} {item.sigla}
          </h3>
          <p className="text-xs text-gray-500">{item.nome_completo}</p>
          <div className="flex items-center justify-center gap-1">
            <CircleDollarSign className="size-4" />
            <span className="text-xs font-semibold">{item.creditos}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
