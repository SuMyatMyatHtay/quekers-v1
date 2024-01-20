// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
import Cors from 'cors';

import { NextApiRequest, NextApiResponse } from "next";

type RequestHandler = (req: NextApiRequest, res: NextApiResponse, next: (err?: Error | null) => void) => void;

function initMiddleware(middleware: RequestHandler) {
    return (req: NextApiRequest, res: NextApiResponse) => {
        return new Promise<void>((resolve, reject) => {
            middleware(req, res, (result) => {
                if (result instanceof Error) {
                    return reject();
                }
                return resolve();
            })
        })
    }
}

const cors = Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
});

const corsMiddleware = initMiddleware(cors);

export default corsMiddleware;
