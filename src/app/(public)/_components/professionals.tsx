
import Image from "next/image";
import fotoImg from "../../../../public/foto1.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Badge } from "lucide-react";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Professionals() {
  return (
    <section className="bg-gray-50 py-16 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-900 mb-12 text-center font-bold"
            >
                Clínicas e Profissionais de Saúde Parceiros
            </h2>
            <section
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
                <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
                    <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                    <Image
                        src={fotoImg}
                        alt="Foto da clinica"
                        className="relative z-20 aspect-video w-full object-cover
                        brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader>
                        <CardAction>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        </CardAction>
                        <CardTitle>Odonto Service</CardTitle>
                        <CardDescription>
                            Rua dos Andradas, 1234 - Porto Alegre, RS            
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                            <Link href="/clinica/1" className="flex items-center text-sm font-semibold text-white">
                                Agendar horário
                                <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
                    <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                    <Image
                        src={fotoImg}
                        alt="Foto da clinica"
                        className="relative z-20 aspect-video w-full object-cover
                        brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader>
                        <CardAction>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        </CardAction>
                        <CardTitle>Odonto Service</CardTitle>
                        <CardDescription>
                            Rua dos Andradas, 1234 - Porto Alegre, RS            
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                            <Link href="/clinica/1" className="flex items-center text-sm font-semibold text-white">
                                Agendar horário
                                <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
                    <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                    <Image
                        src={fotoImg}
                        alt="Foto da clinica"
                        className="relative z-20 aspect-video w-full object-cover
                        brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader>
                        <CardAction>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        </CardAction>
                        <CardTitle>Odonto Service</CardTitle>
                        <CardDescription>
                            Rua dos Andradas, 1234 - Porto Alegre, RS            
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                            <Link href="/clinica/1" className="flex items-center text-sm font-semibold text-white">
                                Agendar horário
                                <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
                    <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                    <Image
                        src={fotoImg}
                        alt="Foto da clinica"
                        className="relative z-20 aspect-video w-full object-cover
                        brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader>
                        <CardAction>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        </CardAction>
                        <CardTitle>Odonto Service</CardTitle>
                        <CardDescription>
                            Rua dos Andradas, 1234 - Porto Alegre, RS            
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                            <Link href="/clinica/1" className="flex items-center text-sm font-semibold text-white">
                                Agendar horário
                                <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </section>
        </div>
    </section>
  );
}