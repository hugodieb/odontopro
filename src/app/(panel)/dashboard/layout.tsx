"use client";

import React from "react";
import Link from "next/link";
import { SidebarDashboard } from "./_components/sidebar";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarDashboard>
            {children}
        </SidebarDashboard>
    );
}