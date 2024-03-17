import disciplinasData from "@/app/assets/disciplines.json";
import { Button } from "@/components/ui/button";
import { Discipline } from "@/components/ui/dashboard/discipline";
import { useState } from "react";

export function Disciplines() {
  const [filtroAtual, setFiltroAtual] = useState("todas");
  const [disciplinasFiltradas, setDisciplinasFiltradas] = useState(
    disciplinasData.disciplinas,
  );

  const filtrarDisciplinas = (periodo: any) => {
    if (periodo === "todas") {
      setDisciplinasFiltradas(disciplinasData.disciplinas);
    } else {
      setDisciplinasFiltradas(
        disciplinasData.disciplinas.filter((d) => d.periodo === periodo),
      );
    }
    setFiltroAtual(periodo);
  };

  return (
    <main className="col-span-5 flex flex-col items-center gap-2 p-2">
      <div className="flex w-auto items-center justify-center gap-3 rounded-md bg-zinc-200 p-2 ">
        <Button onClick={() => filtrarDisciplinas("todas")}>
          Todas
        </Button>
        <Button onClick={() => filtrarDisciplinas(1)}>1º Período</Button>
        <Button onClick={() => filtrarDisciplinas(2)}>2º Período</Button>
        <Button onClick={() => filtrarDisciplinas(3)}>3º Período</Button>
        <Button onClick={() => filtrarDisciplinas(4)}>4º Período</Button>
        <Button onClick={() => filtrarDisciplinas(5)}>5º Período</Button>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 overflow-auto p-4 md:grid-cols-3">
        {disciplinasFiltradas.map((discipline) => (
          <Discipline key={discipline.sigla} item={discipline} />
        ))}
      </div>
    </main>
  );
}
