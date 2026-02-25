"use client"

import { useState } from "react"
import { useProfileForm } from "./profile-form-schema"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
 } from "@/components/ui/select"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

 import { Label } from "@/components/ui/label"
 import Image from "next/image"
 import imgTest from "../../../../../../public/doctor-hero.png"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function ProfileContent() {

  const [selectHours, setSelectHours] = useState<string[]>([])

  const [openDialog, setOpenDialog] = useState(false)

  const form = useProfileForm()

  function generateTimeSlots(): string[] {
    const timeSlots: string[] = [];
    const startTime = new Date();
    startTime.setHours(8, 0, 0, 0); // Início às 8:00

    const endTime = new Date();
    endTime.setHours(24, 0, 0, 0); // Fim às 18:00

    while (startTime < endTime) {
      const hours = startTime.getHours().toString().padStart(2, '0');
      const minutes = startTime.getMinutes().toString().padStart(2, '0');
      timeSlots.push(`${hours}:${minutes}`);
      startTime.setMinutes(startTime.getMinutes() + 30); // Incrementa em 30 minutos
    }

    return timeSlots;
  }

  const timeSlots = generateTimeSlots()

  function toggHour(hour: string) {
    if (selectHours.includes(hour)) {
      setSelectHours(selectHours.filter((h) => h !== hour));
    } else {
      setSelectHours([...selectHours, hour]);
    }
  }

  return (

    <div className="mx-auto">
      <Form {...form}>
        <form>
          <Card>
            <CardHeader>
              <CardTitle>Meu Perfil</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center h-full">
                <div>
                  <Image
                    src={form.getValues("image") || imgTest}
                    alt="Profile Image"
                    width={100}
                    height={100}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Endereço</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu endereço" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu telefone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Status</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value ? "active" : "inactive"}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o status da clinica" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Ativo(clínica aberta)</SelectItem>
                            <SelectItem value="inactive">Inativo(clinica fechada)</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Label id="Horario" className="font-semibold">Configurar horários da clínica</Label>
                  <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogTrigger asChild className="w-full">
                      <Button variant="outline" className="w-full mt-2 justify-between text-taupe-800">
                        Clique aqui para selecionar horários
                        <ArrowRight className="w-5 h-5" />
                      </Button>                      
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Fuso Horário</DialogTitle>
                        <DialogDescription>
                          Selecione os horários de funcionamento da clínica.
                        </DialogDescription>
                        
                        <div className="grid grid-cols-4 gap-2 my-4">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              onClick={() => toggHour(time)}
                              variant="outline"
                              size="sm"
                              className={cn('h-10', selectHours.includes(time) && 'border-2 border-emerald-500 text-primary')}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                        <Button onClick={() => setOpenDialog(false)} className="mt-4 w-full">
                          Ao fechar essa janela, salve os dados!
                        </Button>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>                            
            </CardContent>
          </Card>
        </form>      
      </Form>        
    </div>
  )
}