'use client';

import NavBarDashboard from "@/app/(app)/dashboard/_components/dashboard/navbar-dashboard";
import { Disciplines } from "./_components/disciplines/page";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-10 h-screen w-auto">
      <NavBarDashboard />
      <Disciplines />
    </div>
  );
}

