import { BookOpenTextIcon, CircleDollarSign } from "lucide-react";

export function Discipline({
  item,
}: {
  item: {
    sigla: string;
    nome_completo: string;
    creditos: number;
    periodo: number;
  };
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
      <BookOpenTextIcon className="h-10 w-10 rounded-lg bg-gray-100 p-2 dark:bg-gray-900" />
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-sm font-bold">
          
          {item.periodo}
          {" "}
          {item.sigla}
        </h3>
        <p className="text-xs text-gray-500">{item.nome_completo}</p>
        <div className="flex items-center justify-center">
          <CircleDollarSign className="size-4" />
          <span className="text-xs font-semibold">{item.creditos}</span>
        </div>
      </div>
    </div>
  );
}
