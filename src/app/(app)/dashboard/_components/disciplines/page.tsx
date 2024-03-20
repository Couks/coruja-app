"use client";

import { Discipline } from "@/app/(app)/dashboard/_components/dashboard/discipline";
import disciplinasData from "@/app/assets/disciplines.json";
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
  const [disciplinasFiltradas, setDisciplinasFiltradas] = useState(
    disciplinasData.disciplinas,
  );


  return (
    <main className="col-span-8 flex flex-col items-center gap-2 overflow-auto px-2 py-4 md:py-8">
      <div className="flex items-center gap-3">
        <Select>
          <SelectTrigger className="w-full md:w-[450px] ">
            <SelectValue placeholder="Selecione o período que deseja filtrar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1º Período">1º Período</SelectItem>
            <SelectItem value="2º Período">2º Período</SelectItem>
            <SelectItem value="3º Período">3º Período</SelectItem>
            <SelectItem value="4º Período">4º Período</SelectItem>
            <SelectItem value="5º Período">5º Período</SelectItem>
            <SelectItem value="Todos os períodos">Todos</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full md:w-[450px]">
            <SelectValue placeholder="Selecione o status que deseja filtrar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Status">Todos</SelectItem>
            <SelectItem value="Concluidas">Concluídas</SelectItem>
            <SelectItem value="Em Andamento">Em Andamento</SelectItem>
            <SelectItem value="Não feitas">Não Feitas</SelectItem>
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
