import { PrismaClient,Media } from "@prisma/client";
const prisma = PrismaClient()
export async function addMediaToMessage(messageId:number,mediaUtl)