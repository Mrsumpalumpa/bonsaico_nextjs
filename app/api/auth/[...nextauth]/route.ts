import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import User from "@/models/user";
import { connectDB } from '@/utils/database';
import { DefaultSession } from "next-auth";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session?.user?.email });
      if(sessionUser){
        return session;
      }
      else return {} as DefaultSession
    },

    async signIn({ account, profile, user, credentials }:any) {
      try {
        await connectDB();
        // check if user already exists
        const userExists = await User.findOne({ email: profile?.email });
        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile?.email,
            userName: profile?.name?.replace(" ", "").toLowerCase(),
            image: profile?.picture,
          });
        }
        return true
      } catch (error) {
        console.log("Error checking if user exists: ", JSON.stringify(error));
        return false
      }
    },
  }
})

export { handler as GET, handler as POST }
