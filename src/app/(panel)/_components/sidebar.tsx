"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CreditCard, Home, Layers, User } from "lucide-react";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname() || "";

  const nav = [
    { label: "Dashboard", href: "/dashboard", icon: Home },
    { label: "Services", href: "/dashboard/services", icon: Layers },
    { label: "Plans", href: "/dashboard/plans", icon: CreditCard },
    { label: "Profile", href: "/dashboard/profile", icon: User },
  ];

  return (
    <nav className="flex flex-col gap-2">
      {nav.map((item) => {
        const active = pathname === item.href || pathname.startsWith(item.href + "/");

        return (
          <Button
            asChild
            key={item.href}
            variant={active ? "default" : "ghost"}
            size="default"
            className="justify-start"
          >
            <Link href={item.href} className="w-full flex items-center gap-3 text-left">
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}