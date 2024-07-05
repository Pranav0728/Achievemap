import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/dbConnect';
import User from '../../../../lib/models/users';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';


export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: 'credentials',
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }
  
          const { email, password } = credentials;
  
          try {
            await dbConnect();
            const user = await User.findOne({ email });
  
            if (!user) {
              return null;
            }
  
            const passwordsMatch = await bcrypt.compare(password, user.password);
  
            if (!passwordsMatch) {
              return null;
            }
  
            return user;
          } catch (error) {
            console.error("Error: ", error);
            return null;
          }
        },
      }),
    ],
    session: {
      strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: '/',
    },
  };