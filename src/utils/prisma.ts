// /* eslint-disable no-var */
// /* eslint-disable vars-on-top */
// import { PrismaClient } from "@prisma/client";

// declare global {
//   var prisma: PrismaClient | undefined;
// }

// const db = globalThis.prisma || new PrismaClient();
// if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

// export default db;

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const db = globalForPrisma.prisma || new PrismaClient({});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

export default db;
