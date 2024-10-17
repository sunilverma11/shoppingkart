import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "@/lib/models/user.model";
// import encryptPassword from "@/lib/middleware/auth"
import dbConnect from "@/lib/dbConnect";
import { comparePassword } from "@/lib/utils/bcrypt";
import { generateToken, verifyToken } from "@/lib/utils/jwt";


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
                //verify token
                const token = req.headers.authorization || ""
                console.log("in req get", token)
                const verify = await verifyToken(token)
                console.log("verify tkn", verify)
                if (verify?.error === "Invalid token") {
                    return res.status(501).json({ error: verify.error })
                }
                console.log("verify", verify)
                const { _id } = verify;
                const { name, email } = await UserModel.findOne({ _id: _id });
                return res.status(200).json({ name, email, _id });
            } catch (error) {
                return res.status(501).json({ error: error })
            }
            break;
        case "POST":
            try {
                //For Login
                console.log("in login", req?.body)
                const { email, password } = req?.body;
                const user = await UserModel.findOne({ email });

                // for comparing hash password
                const passwordMatch = await comparePassword(password, user.password)
                console.log("compare password call", passwordMatch)

                //generate token
                const token = await generateToken(user)
                console.log("tokenns", token);
                return res.status(200).json({ token: token });
            } catch (error) {
                return res.status(501).json({ error: error })
            }
            break;
        default:
            try {
                res.setHeader('Allow Header', ["GET", "POST", "PUT", "DELETE"]);
                return res.status(405).end(`Method ${method} not allowed`);
            }
            catch (error) {
                return res.status(501).json({ error: error })
            }
    }
}