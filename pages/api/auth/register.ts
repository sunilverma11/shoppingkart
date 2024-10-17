import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "@/lib/models/user.model";
// import auth from "@/lib/middleware/auth"
import dbConnect from "@/lib/dbConnect";
import { encryptPassword } from "@/lib/utils/bcrypt";

export default async function UserController(req: NextApiRequest, res: NextApiResponse) {
    dbConnect();
    const { method } = req;
    if (method === 'OPTIONS') {
        res.setHeader('Allow', 'GET,POST,OPTIONS');
        res.status(200).end();
        return;
    }
    switch (method) {
        case "GET":
            try {
                //For Dashboard
                const usersList = await UserModel.find({});
                res.status(200).json(usersList);
            } catch (error) {
                res.status(501).json({ error: error })
            }
            break;
        case "POST":
            try {
                //For Register
                const user = req.body;
                const encrypted = await encryptPassword(user.password)
                console.log("user", user, encrypted)
                if (encrypted?.status == true) {
                    console.log("hashed", user, encrypted)
                    const newUser = new UserModel({ ...req.body, password: encrypted?.hashed });
                    await newUser.save();
                    return res.status(201).json(newUser);
                } else {
                    return res.status(401).json({ error: encrypted?.error });
                }
            } catch (error) {
                res.status(501).json({ error: error })
            }
            break;
        default:
            try {
                res.setHeader('Allow Header', ["GET", "POST", "PUT", "DELETE"]);
                res.status(405).end(`Method ${method} not allowed`);
            } catch (error) {
                res.status(501).json({ error: error })
            }
    }
}