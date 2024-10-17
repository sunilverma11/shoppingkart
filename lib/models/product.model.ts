import mongoose from 'mongoose';

interface IProduct extends mongoose.Document {
    title: string;
    description: string;
    status: 'pending' | 'done';
}
const productSchema = new mongoose.Schema<IProduct>({
    title: String,
    description: String,
    status: String
}, {
    versionKey: false,
    timestamps: true
});
export const TaskModel = mongoose.models.products || mongoose.model('products', productSchema);