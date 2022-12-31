import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";

export default NextAuth({
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
