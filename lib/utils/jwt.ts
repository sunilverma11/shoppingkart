import jwt, { JwtPayload } from 'jsonwebtoken';
const privateKey = process.env.TOKEN_KEY || "";


interface JwtPayloadExtended extends JwtPayload {
  _id: string;
  name:string;
  error:string;
}

interface IBody {
    _id: string,
    name: string,
    error:string
}
export const generateToken = async (body: IBody) => {
    try {
        // console.log("body in generate")
        const {name,_id}= body;
        // const token = await jwt.sign({ _id: body._id }, privateKey, { algorithm: 'RS256' });
        const token = await jwt.sign({ name,_id}, privateKey);
        // console.log("new token", token)
        return {token};
    } catch (error) {
        console.log("errrrrr", error)
        return {error:"Token generating failed"}
    }

}
export const verifyToken = (token: string):JwtPayloadExtended => {
    try {
        // console.log("token in verify", token)
        const decoded = jwt.verify(token, privateKey) as JwtPayloadExtended;
        // console.log("verify done")
        // console.log(decoded) 
        return decoded;
    } catch (error) {
        console.log(error);
        return {error: 'Invalid token'} as JwtPayloadExtended
    }
}