import mongoose from "mongoose";

interface IUser extends mongoose.Document {
    name: string,
    email: string,
    password: string
}
const userModel = new mongoose.Schema<IUser>({
    name: { type: String },
    email: { type: String, required: true, },
    password: { type: String }
}, {
    versionKey: false,
    timestamps: true
});

export const UserModel = mongoose.models.users || mongoose.model("users", userModel)
