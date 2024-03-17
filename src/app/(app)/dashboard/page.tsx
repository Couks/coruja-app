
"use client";

import NavBarDashboard from "@/components/ui/dashboard/navbar-dashboard";
import { Disciplines } from "./disciplines/page";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-6 h-screen w-screen">
      <NavBarDashboard />
      <Disciplines />
    </div>
  );
}

