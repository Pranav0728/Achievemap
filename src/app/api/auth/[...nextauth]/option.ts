import { authOptions } from "./route";
import { NextApiRequest, NextApiResponse } from 'next';

import NextAuth from "next-auth/next";

const handler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);
export { handler as GET, handler as POST };