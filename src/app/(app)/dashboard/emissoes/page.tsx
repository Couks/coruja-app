/**
 * v0 by Vercel.
 * @see https://v0.dev/t/z0kYUk191TI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <Image
          alt="Faculdade de Educação Tecnológica do Rio de Janeiro"
          className="h-12"
          height="50"
          src="/placeholder.svg"
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
          }}
          width="50"
        />
        <div>
          <h1 className="text-2xl font-bold">Relatório de notas</h1>
          <p className="text-sm">Data de Emissão: 28/03/2024</p>
        </div>
      </div>
      <div className="mb-4">
        <p>Matrícula: 2120478300017</p>
        <p>Nome: MATHEUS SOUZA CASTRO DE ARAÚJO</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ano / Período</TableHead>
            <TableHead>Disciplina</TableHead>
            <TableHead>Faltas</TableHead>
            <TableHead>Notas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>2021 / 2</TableCell>
            <TableCell>1LPO</TableCell>
            <TableCell>0</TableCell>
            <TableCell>AV1 8.0 AV2 9.0 AVF 0.0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2021 / 2</TableCell>
            <TableCell>1MAC</TableCell>
            <TableCell>4</TableCell>
            <TableCell>AV1 6.0 AV2 5.0 AVF 0.0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2021 / 2</TableCell>
            <TableCell>1ORG</TableCell>
            <TableCell>0</TableCell>
            <TableCell>AV1 0.5 AV2 2.4 AVF 0.0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2021 / 2</TableCell>
            <TableCell>1IHM</TableCell>
            <TableCell>2</TableCell>
            <TableCell>AV1 4.0 AV2 9.0 AVF 0.2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2021 / 2</TableCell>
            <TableCell>1FAC</TableCell>
            <TableCell>4</TableCell>
            <TableCell>AV1 3.3 AV2 9.0 AVF 0.2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2021 / 2</TableCell>
            <TableCell>1MAB</TableCell>
            <TableCell>2</TableCell>
            <TableCell>AV1 9.0 AV2 0.0 AVF 5.5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2022 / 1</TableCell>
            <TableCell>2MPA</TableCell>
            <TableCell>4</TableCell>
            <TableCell>AV1 9.0 AV2 10.0 AVF 6.5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2022 / 1</TableCell>
            <TableCell>2LES</TableCell>
            <TableCell>8</TableCell>
            <TableCell>AV1 10.0 AV2 6.5 AVF 10.0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2022 / 1</TableCell>
            <TableCell>1ORG</TableCell>
            <TableCell>13</TableCell>
            <TableCell>AV1 7.0 AV2 5.6 AVF 4.5</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
