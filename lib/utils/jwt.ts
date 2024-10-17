
// import jsonwebtoken from "jsonwebtoken"
type IBody = {
    _id: string,
    name: string
}
export const generateToken = (body: IBody) => {
    console.log("body in generate")
    return body._id.toString();
}
export const compareToken = (token: string) => {
    console.log("token in compare", token)
    return true;
}