"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";

const pillTabs = [
  "Home",
  "Inscrição",
  "Grade Horária",
  "Matérias",
  "Ficha de Matrícula",
  "Emissões",
];

export default function MenuLinks() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const tabsComponents = pillTabs.map((text, i) => {
    return (
      <Button
        key={text}
        onMouseEnter={() => setHoveredIndex(i)}
        className="relative rounded-md border-0 bg-zinc-100 px-4 text-slate-900"
      >
        {hoveredIndex === i && (
          <MagicTabSelect
            id="pillTabs"
            transition={{ type: "spring", bounce: 0.35 }}
          >
            <span className="absolute inset-0 z-10 rounded-full bg-white mix-blend-difference"></span>
          </MagicTabSelect>
        )}
        {text}
      </Button>
    );
  });

  return (
    <div className="flex justify-between gap-6 md:flex-col">
      {tabsComponents}
    </div>
  );
}

//
//   <Link
//     href="/dashboard"
//     className="flex items-center gap-3 transition hover:text-blue-400"
//   >
//     <Home className="size-5" />
//     <span className="hidden font-semibold md:block">Início</span>
//   </Link>
//   <Link
//     href="/dashboard/inscricao"
//     className="flex items-center gap-3 transition hover:text-blue-400"
//   >
//     <BookPlus className="size-5" />
//     <span className="hidden font-semibold md:block">Inscrição</span>
//   </Link>
//   <Link
//     href="/dashboard/grade"
//     className="flex items-center gap-3 transition hover:text-blue-400 "
//   >
//     <CalendarClock className="size-5" />
//     <span className="hidden font-semibold md:block">Grade Horária</span>
//   </Link>
//   <Link
//     href="/dashboard/materias"
//     className="flex items-center gap-3 transition hover:text-blue-400"
//   >
//     <NotebookPen className="size-5" />
//     <span className="hidden font-semibold md:block">Matérias</span>
//   </Link>
//   <Link
//     href="/dashboard/matricula"
//     className="flex items-center gap-3 transition hover:text-blue-400"
//   >
//     <File className="size-5" />
//     <span className="hidden font-semibold md:block">
//       Ficha de Matrícula
//     </span>
//   </Link>
//   <Link
//     href="/dashboard/emissoes"
//     className="flex items-center gap-3 transition hover:text-blue-400"
//   >
//     <GraduationCapIcon className="size-5" />
//     <span className="hidden font-semibold md:block">Emissões</span>
//   </Link>
//
