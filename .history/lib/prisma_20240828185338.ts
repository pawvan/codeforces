import { PrismaClient } from '@prisma/client';

// Use a global variable to avoid creating multiple PrismaClient instances
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // In development mode, use a global variable to avoid multiple instances
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export default prisma;