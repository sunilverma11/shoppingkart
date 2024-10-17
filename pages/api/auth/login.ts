import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "@/lib/models/user.model";
// import encryptPassword from "@/lib/middleware/auth"
import dbConnect from "@/lib/dbConnect";
import { comparePassword } from "@/lib/utils/bcrypt";
import { generateToken } from "@/lib/utils/jwt";


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
                const users = await UserModel.find({});
                res.status(200).json(users);
            } catch (error) {
                res.status(501).json({ error: error })
            }
            break;
        case "POST":
            try {
                //For Login
                console.log("in login", req?.body)
                const { email, password } = req?.body;
                const user = await UserModel.findOne({ email });
                console.log("before compare call", password, user.password)
                const passwordMatch = await comparePassword(password, user.password)
                console.log("compare password call", passwordMatch)
                const token = generateToken(user)
                console.log("tokenns", token)
                res.status(200).json(user);
            } catch (error) {
                res.status(501).json({ error: error })
            }
            break;
        default:
            try {
                res.setHeader('Allow Header', ["GET", "POST", "PUT", "DELETE"]);
                res.status(405).end(`Method ${method} not allowed`);
            }
            catch (error) {
                res.status(501).json({ error: error })
            }
    }
}