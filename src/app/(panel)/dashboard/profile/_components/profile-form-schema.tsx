import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const profileFormSchema = z.object({
    name: z.string().min(2, "O nome é obrigatório"),
    email: z.string().email("Email inválido"),
    address: z.string().optional(),
    phone: z.string().optional(),
    status: z.string(),
    timezone: z.string().min(1, "O fuso horário é obrigatório")
});

export type ProfileFormData = z.infer<typeof profileFormSchema>;

export function useProfileForm() {
    const formProfile = useForm<ProfileFormData>({
        resolver: zodResolver(profileFormSchema),
        defaultValues: {
            name: "",
            email: "",
            address: "",
            phone: "",
            status: "Ativo",
            timezone: ""
        }
    });

    return formProfile;
}