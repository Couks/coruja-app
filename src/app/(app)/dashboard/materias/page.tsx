"use client";

import disciplinasData from "@/app/assets/disciplines.json";
import { useState } from "react";
import { Disciplina } from "./_components/disciplina";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Disciplinas() {
  const [disciplinasFiltradas, setDisciplinasFiltradas] = useState(
    disciplinasData.disciplinas,
  );

  const [periodoSelecionado, setPeriodoSelecionado] = useState(0);
  const [statusSelecionado, setStatusSelecionado] = useState("T");

  const aplicarFiltros = () => {
    let filtradas = disciplinasData.disciplinas;

    if (periodoSelecionado.toString()) {
      filtradas = filtradas.filter(
        (disciplina) => disciplina.periodo === periodoSelecionado,
      );
    }

    if (statusSelecionado) {
      filtradas = filtradas.filter(
        (disciplina) => disciplina.status === statusSelecionado,
      );
    }

    setDisciplinasFiltradas(filtradas);
    console.log(filtradas);
  };

  const handlePeriodoChange = (value: number) => {
    setPeriodoSelecionado(value);
    aplicarFiltros();
    console.log(value);
  };

  const handleStatusChange = (value: string) => {
    setStatusSelecionado(value);
    aplicarFiltros();
  };

  return (
    <main className="flex flex-col items-center gap-2 dark:bg-gray-800">
      <div className="flex w-full flex-col items-center gap-3 rounded-lg bg-slate-700 p-4 md:flex-row">
        <Select onChange={handlePeriodoChange}>
          <SelectTrigger className="w-full ">
            <SelectValue placeholder="Selecione o período que deseja filtrar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="T">Todos os Períodos</SelectItem>
            <SelectItem value="1">1º Período</SelectItem>
            <SelectItem value="2">2º Período</SelectItem>
            <SelectItem value="3">3º Período</SelectItem>
            <SelectItem value="4">4º Período</SelectItem>
            <SelectItem value="5">5º Período</SelectItem>
          </SelectContent>
        </Select>

        <Select onChange={handleStatusChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o status que deseja filtrar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="T">Todos</SelectItem>
            <SelectItem value="C">Concluídas</SelectItem>
            <SelectItem value="A">Em Andamento</SelectItem>
            <SelectItem value="P">Pendentes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid h-full w-full grid-cols-2 gap-4 py-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {disciplinasFiltradas.map((discipline) => (
          <Disciplina key={discipline.sigla} item={discipline} />
        ))}
      </div>
    </main>
  );
}
