import { DefaultSession, User } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
  }
}

interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: string | null | boolean;
  image?: string;
  stripeCustomerId?: string;
  times: string[];
  address?: string;
  phone?: string;
  status?: string;
  createdAt: string;
  updatedAt: string;
}