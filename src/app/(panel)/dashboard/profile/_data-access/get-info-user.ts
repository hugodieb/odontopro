"use server"

import getSession from "@/lib/getSession"
import prisma from "@/lib/prisma";

interface getUserDataProps {
  userId: string;
}

export async function getUserData({ userId }: getUserDataProps) {

  if(!userId) {
    throw new Error("UNAUTHORIZED");
  }

  const user = await prisma.user.findUnique({
      where: {
          id: userId
      },
      select: {
          id: true,
          name: true,
          email: true,
          image: true,
          phone: true,
          subscription: true,
      }
  })

  if(!user) {
    throw new Error("USER_NOT_FOUND");
  }

  return user    
} 