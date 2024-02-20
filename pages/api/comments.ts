import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST'){
        return res.status(201).json({hola: 'mundo'})
    }
    return res.status(400).json({error: 'metodo innexistente'});
};



export default handler;