import jwt, { JwtPayload } from 'jsonwebtoken';

interface JwtPayloadExtended extends JwtPayload {
  _id: string;
  name:string;
  error:string;
}
const privateKey = process.env.TOKEN_KEY || "";
// const PRIVATE_KEY = process.env.TOKEN_KEY?.replace(/\\n/g, '\n') || '';
console.log("private key ", privateKey)

type IBody = {
    _id: string,
    name: string,
    error:string
}
export const generateToken = async (body: IBody) => {
    try {
        console.log("body in generate")
        const {name,_id}= body;
        // const token = await jwt.sign({ _id: body._id }, privateKey, { algorithm: 'RS256' });
        const token = await jwt.sign({ name,_id}, privateKey);
        console.log("new token", token)
        return token;
    } catch (error) {
        console.log("errrrrr", error)
    }

}
export const verifyToken = (token: string):JwtPayloadExtended => {
    try {
        // console.log("token in verify", token)
        const decoded = jwt.verify(token, privateKey) as JwtPayloadExtended;
        // console.log("verify done")
        console.log(decoded) // 
        return decoded;
    } catch (error) {
        console.log(error);
        return {error: 'Invalid token'} as JwtPayloadExtended
    }
}