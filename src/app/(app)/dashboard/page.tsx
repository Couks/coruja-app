'use client';

import NavBarDashboard from "@/components/ui/dashboard/navbar-dashboard";
import { Disciplines } from "./disciplines/page";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-10 h-screen w-auto">
      <NavBarDashboard />
      <Disciplines />
    </div>
  );
}

