import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { icons, Menu, UserSearch} from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-999 py-4 px-6 bg-white border-b border-zinc-200">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-zinc-900">
          Odonto<span className="text-green-500">Pro</span>
        </Link>

        <nav className="hidden md:flex items-center">
            <a href="#">
                Profissionais
            </a>
        </nav>
        
        <Sheet>
            <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="p-0 hover:bg-green-100 focus:ring-0">
                    <Menu className="w-6 h-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-60 sm:w-75 z-9999">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>Veja nossos links...</SheetDescription>
                    <div className="w-full border-1"></div>

                    <nav className="py-6">
                        <div className="flex items-center gap-2">
                            <UserSearch className="w-5 h-5" />
                          <a href="#">Profissionais</a>  
                        </div>
                        
                    </nav>
                </SheetHeader>
            </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}