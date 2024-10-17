// middleware/logger.ts
import { NextApiRequest, NextApiResponse } from 'next';

const auth = (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
  console.log(`Hello in middleware ${req.method} ${req.url}`);
  next();
};

export default auth;