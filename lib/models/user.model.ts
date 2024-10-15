import {Schema, model, models} from "mongoose";

interface IUser {
    name: string,
    email:string,
    password:string
}
const userModel = new Schema<IUser>({
    name:{type:String},
    email:{type:String, required:true,},
    password:{type:String}
},{
    versionKey:false,
    timestamps:true
});

export const UserModel = models.users || model("users",userModel)
