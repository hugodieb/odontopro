"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Banknote, CalendarCheck2, ChevronLeft, ChevronRight, CreditCard, CreditCardIcon, Home, Layers, List, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Image from "next/image";
import logoImg from "../../../../../public/logo-odonto.png"

export function SidebarDashboard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";
  const [isCollapsed, setIsCollapsed] = useState(false);


  return (
    <div className="flex min-h-screen w-full">

    <aside
      className={clsx("flex flex-col bg-background border-r transition-all duration-300 p-4 h-full", {
        "w-20": isCollapsed,
        "w-64": !isCollapsed,
        "hidden md:flex md:fixed": true
      })}
    >
      <div className="mb-6 mt-4">
        {!isCollapsed && (
          <Image 
          src={logoImg}
          alt="OdontoPro"
          priority
          quality={100}          
        />
        )}
      </div>
      <Button className="bg-gray-100 hover:bg-gray-50 text-zinc-900 self-end mb-2"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {!isCollapsed ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
      </Button>

      {isCollapsed && (
        <nav className="flex flex-col gap-1 overflow-hidden">            

            <SidebarLink
              href="/dashboard"
              icon={<CalendarCheck2 />}
              label="Agendamentos"
              pathname={pathname}
              isCollapsed={isCollapsed}
            />
            <SidebarLink
              href="/dashboard/services"
              icon={<Layers />}
              label="Serviços"
              pathname={pathname}
              isCollapsed={isCollapsed}
            />
            
            <SidebarLink
              href="/dashboard/plans"
              icon={<Banknote />}

              label="Planos de Assinatura"
              pathname={pathname}
              isCollapsed={isCollapsed}
            />
            <SidebarLink
              href="/dashboard/profile"
              icon={<User />}
              label="Meu Perfil"
              pathname={pathname}
              isCollapsed={isCollapsed}
            />

          </nav>
      )}

      <Collapsible open={!isCollapsed} onOpenChange={setIsCollapsed}>
        <CollapsibleContent>
          <nav className="flex flex-col gap-1 overflow-hidden">
            <span className="text-sm text-gray-500 font-medium uppercase mb-2">
              Painel
            </span>

            <SidebarLink
              href="/dashboard"
              icon={<CalendarCheck2 />}
              label="Agendamentos"
              pathname={pathname}
              isCollapsed={isCollapsed}
            />
            <SidebarLink
              href="/dashboard/services"
              icon={<Layers />}
              label="Serviços"
              pathname={pathname}
              isCollapsed={isCollapsed}
            />          

            <span className="text-sm text-gray-500 font-medium uppercase mb-2">
              Painel
            </span>
            <SidebarLink
              href="/dashboard/plans"
              icon={<Banknote />}

              label="Planos de Assinatura"
              pathname={pathname}
              isCollapsed={isCollapsed}
            />
            <SidebarLink
              href="/dashboard/profile"
              icon={<User />}
              label="Meu Perfil"
              pathname={pathname}
              isCollapsed={isCollapsed}
            />

          </nav>
        </CollapsibleContent>
      </Collapsible>
           
    </aside>

      <div className={clsx("flex flex-1 flex-col transition-all duration-300", {
        "md:ml-20": isCollapsed,
        "md:ml-64": !isCollapsed,
      })}>
        <header className="md:hidden flex items-center justify-between border-b px-2 md:px-6 h-14 z-10 sticky top-0 bg-white">
        
          <Sheet>
            <div className="flex items-center gap-4">
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <List className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <h1 className="text-base md:text-lg font-semibold">
                Menu OdontoPro
              </h1>
            </div>

            <SheetContent className="sm:max-w-xs text-black px-4 py-2">              
              <SheetTitle>OdontoPro</SheetTitle>
              <SheetDescription>
                Selecione uma opção abaixo.
              </SheetDescription>

              <nav className="grid gap-2 text-base pt-5">
                <SidebarLink
                  href="/dashboard"
                  icon={<CalendarCheck2 />}
                  label="Agendamentos"
                  pathname={pathname}
                />
                <SidebarLink
                  href="/dashboard/services"
                  icon={<Layers />}
                  label="Serviços"
                  pathname={pathname}
                />
                <SidebarLink
                  href="/dashboard/plans"
                  icon={<Banknote />}
                  label="Planos de Assinatura"
                  pathname={pathname}
                />
                <SidebarLink
                  href="/dashboard/profile"
                  icon={<User />}
                  label="Meu Perfil"
                  pathname={pathname}
                />   
              </nav>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-1 py-4 px-2 md:p-6">
          {children}
        </main>

      </div>
    </div>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  pathname?: string;
  isCollapsed?: boolean;
}

function SidebarLink({ href, icon, label, pathname, isCollapsed }: SidebarLinkProps) {  
  return (
    <Link
      href={href}
      className="flex items-center gap-2 p-1 rounded hover:bg-gray-100"
      
    >
      <div className={clsx("flex items-center gap-2 w-full px-1 py-2 rounded transition-colors", {
        "bg-blue-500 text-white": pathname === href,
        "text-gray-700 hover:bg-gray-50": pathname !== href,
        "justify-center": isCollapsed,
      })}>
      
        <span className="w-6 h-6">{icon}</span>
        {!isCollapsed && <span>{label}</span> }
      </div>
    </Link>
  );
}