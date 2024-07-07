import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { authOptions } from "./option";

const handler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);

export { handler as GET, handler as POST };