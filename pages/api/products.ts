// pages/api/tasks.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { TaskModel } from '../../lib/models/product.model';
import dbConnect from '../../lib/dbConnect';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    dbConnect();
    const { method } = req;
    switch (method) {
        case 'GET':
            const tasks = await TaskModel.find();
            res.status(200).json(tasks);
            break;
        case 'POST':
            const newTask = new TaskModel(req.body);
            await newTask.save();
            res.status(201).json(newTask);
            break;
        case 'PUT':
            const updatedTask = await TaskModel.findByIdAndUpdate(req.query.id, req.body, { new: true });
            res.status(200).json(updatedTask);
            break;
        case 'DELETE':
            await TaskModel.findByIdAndDelete(req.query.id);
            res.status(204).end();
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
