import mongoose from 'mongoose';
import {config} from 'dotenv';
config();
const connectkey:string = process.env.MONGODB_URI || "";
type connectionObject = {
    isConnected?:number
}
const connection: connectionObject = {}
async function dbConnect():Promise<void> {
    if(connection.isConnected){
        console.log("db already connected")
        return;
    }
    try {
        const db = await mongoose.connect(connectkey,{
            dbName:"shoppingkart"
        })
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log("Db connection failed",error)
    }
}
export default dbConnect;
