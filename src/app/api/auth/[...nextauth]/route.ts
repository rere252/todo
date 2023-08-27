import NextAuth from 'next-auth/next';
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    })
  ]
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
