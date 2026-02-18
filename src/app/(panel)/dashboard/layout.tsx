"use client";

import React from "react";
import Link from "next/link";
import { Sidebar } from "../_components/sidebar";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-background">
      <aside className="w-64 border-r border-zinc-200 bg-white p-4">
        <div className="mb-6">
          <Link href="/dashboard" className="text-2xl font-bold text-zinc-900">
            Odonto<span className="text-green-500">Pro</span>
          </Link>
        </div>

        <Sidebar />
      </aside>

      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}