import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import prisma from "utils/prisma";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
});
