import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImg from "../../../../public/doctor-hero.png";

export function Hero() {
    return (
        <section className="container bg-white mx-auto px-4 pt-20 sm:px-6 lg:px-8">
            <main className="flex items-center justify-center">
               <article className="mx-auto px-6 text-center pt-20
                flex flex-col items-center justify-center
                sm:px-6 lg:px-8 space-x-8">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4 max-w-2xl">
                        Encontre os melhores profissionais em um só local!
                    </h1>
                    <p className="text-base md:text-lg text-gray-700 mb-8">
                        Nós somos uma plataforma para profissionais da saúde
                         com foco em agilizar seu atendimento
                          de forma simplificada e organizada.
                    </p>
                    <Button className="bg-emerald-500 hover:bg-emerald-400 font-semibold">Encontre sua clínica</Button>
                </article>
                <div className="hidden lg:block">
                    <Image
                        src={doctorImg}
                        alt="Imagem de um dentista sorridente com braços cruzados"
                        width={650}
                        height={700}
                        quality={100}
                        priority={true}
                        className="object-contain"                
                    />
                </div> 
            </main>            
        </section>
    );
}   