"use client";

import disciplinasData from "@/app/assets/disciplines.json";
import { useState } from "react";
import { Discipline } from "./_components/discipline";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Disciplines() {
  const [disciplinasFiltradas, setDisciplinasFiltradas] = useState(
    disciplinasData.disciplinas,
  );
  const [periodoSelecionado, setPeriodoSelecionado] =
    useState("Todos os períodos");
  const [statusSelecionado, setStatusSelecionado] = useState("Todos");

  const filtrarDados = () => {
    let disciplinasFiltradas = disciplinasData.disciplinas;

    if (periodoSelecionado && periodoSelecionado !== "Todos os períodos") {
      disciplinasFiltradas = disciplinasFiltradas.filter(
        (disciplina) => `${disciplina.periodo}º Período` === periodoSelecionado,
      );
    }

    if (statusSelecionado && statusSelecionado !== "Todos") {
      disciplinasFiltradas = disciplinasFiltradas.filter(
        (disciplina) => disciplina.status === statusSelecionado,
      );
    }

    setDisciplinasFiltradas(disciplinasFiltradas);
  };

  const handlePeriodoChange = (event: any) => {
    setPeriodoSelecionado(event.target.value);
    filtrarDados();
  };

  const handleStatusChange = (event: any) => {
    setStatusSelecionado(event.target.value);
    filtrarDados();
  };

  return (
    <main className="flex flex-col items-center gap-2 py-4 dark:bg-gray-800">
      <div className="flex w-full flex-col items-center gap-3 rounded-lg bg-slate-800 p-4 md:flex-row">
        <Select onChange={handlePeriodoChange}>
          <SelectTrigger className="w-full ">
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

        <Select onChange={handleStatusChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o status que deseja filtrar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Status">Todos</SelectItem>
            <SelectItem value="Concluidas">Concluídas</SelectItem>
            <SelectItem value="Em Andamento">Em Andamento</SelectItem>
            <SelectItem value="Pendentes">Pendentes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid h-full w-full grid-cols-1 gap-4 py-4 md:grid-cols-3">
        {disciplinasFiltradas.map((discipline) => (
          <Discipline key={discipline.sigla} item={discipline} />
        ))}
      </div>
    </main>
  );
}
