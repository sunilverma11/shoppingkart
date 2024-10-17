import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "@/lib/models/user.model";
import dbConnect from "@/lib/dbConnect";

export default async function UserController(req: NextApiRequest, res: NextApiResponse) {
    dbConnect();
    const { method} = req;
    if (method === 'OPTIONS') {
        res.setHeader('Allow', 'GET,POST,OPTIONS');
        res.status(200).end();
        return;
    }
    switch (method) {
        case "GET":
            try {
                const users = await UserModel.find();
                res.status(200).json(users);
            } catch (error) {
                res.status(501).json({error:error})
            }            
            break;
        case "POST":
            try { 
                const newUser = new UserModel(req.body);
                await newUser.save();
                res.status(201).json(newUser);
            } catch (error) {
                res.status(501).json({error:error})
            }
            break;
        case "PUT":
            try {
                const updatedUser = await UserModel.findByIdAndUpdate(req.query.id, req.body, { new: true });
                res.status(201).json(updatedUser)
            } catch (error) {
                res.status(501).json({error:error})
            }
            break;
        case "DELETE":
            try {
                await UserModel.findByIdAndDelete(req.query.id);
                res.status(204).end();
            } catch (error) {
                res.status(501).json({error:error})
            }
            break;
        default:
            try {
                res.setHeader('Allow Header', ["GET", "POST", "PUT", "DELETE"]);
                res.status(405).end(`Method ${method} not allowed`);
            } catch (error) {
                res.status(501).json({error:error})
            }
    }
}