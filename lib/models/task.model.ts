import mongoose from 'mongoose';

interface ITask extends mongoose.Document {
    title: string;
    description: string;
    status: 'pending' | 'done';
}
const taskSchema = new mongoose.Schema <ITask>({
    title:String,
    description: String,
    status: String
},{
    versionKey:false,
    timestamps:true
});
export const TaskModel =  mongoose.models.tests || mongoose.model('tests', taskSchema);