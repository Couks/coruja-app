"use client";

import disciplinasData from "@/app/assets/disciplines.json";
import { Discipline } from "@/components/ui/dashboard/discipline";
import { Suspense, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SkeletonCard } from "./loading";

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
    <main className="col-span-8 flex flex-col items-center gap-2 overflow-auto px-2 py-4 md:py-8">
      <div className="flex items-center gap-3">
        <Select>
          <SelectTrigger className="w-full md:w-[450px] ">
            <SelectValue placeholder="Selecione o período que deseja filtrar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              value="1º Período"
              onClick={() => filtrarDisciplinas(1)}
            >
              1º Período
            </SelectItem>
            <SelectItem
              value="2º Período"
              onClick={() => filtrarDisciplinas(2)}
            >
              2º Período
            </SelectItem>
            <SelectItem
              value="3º Período"
              onClick={() => filtrarDisciplinas(3)}
            >
              3º Período
            </SelectItem>
            <SelectItem
              value="4º Período"
              onClick={() => filtrarDisciplinas(4)}
            >
              4º Período
            </SelectItem>
            <SelectItem
              value="5º Período"
              onClick={() => filtrarDisciplinas(5)}
            >
              5º Período
            </SelectItem>
            <SelectItem
              value="Todos os períodos"
              onClick={() => filtrarDisciplinas("todas")}
            >
              Todos os Períodos
            </SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full md:w-[450px]">
            <SelectValue placeholder="Selecione o status que deseja filtrar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              value="Status"
              onClick={() => filtrarDisciplinas("todas")}
            >
              Todos os Status
            </SelectItem>
            <SelectItem
              value="Concluidas"
              onClick={() => filtrarDisciplinas("C")}
            >
              Concluídas
            </SelectItem>
            <SelectItem
              value="Em Andamento"
              onClick={() => filtrarDisciplinas("A")}
            >
              Em Andamento
            </SelectItem>
            <SelectItem
              value="Não feitas"
              onClick={() => filtrarDisciplinas("N")}
            >
              Não Feitas
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid h-full w-full grid-cols-1 gap-4 p-4 md:grid-cols-3">
        {disciplinasFiltradas.map((discipline) => (
          <Suspense key={discipline.sigla} fallback={<SkeletonCard />}>
            <Discipline key={discipline.sigla} item={discipline} />
          </Suspense>
        ))}
      </div>
    </main>
  );
}
