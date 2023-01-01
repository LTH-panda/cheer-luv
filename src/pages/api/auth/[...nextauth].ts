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

  pages: {
    error: "/auth/error",
    newUser: "/auth/register",
  },

  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async session({ user, session }) {
      const newSession = { ...session, user: { ...session.user, id: user.id } };
      return newSession;
    },
  },

  events: {
    async createUser({ user }) {
      await prisma.profile.create({
        data: {
          userId: user.id,
        },
      });
    },
  },
});
