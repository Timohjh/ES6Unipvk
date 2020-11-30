import express from 'express';
import mongoose from 'mongoose';
import Result from '../models/Result.js';
const router = express.Router();

export const getItems = async (req, res) => {
    try {
        const results = await Result.find().sort({sleepDate : "desc"});
        console.log(results);
        res.status(200).json(results);
    } catch (error) {
        res.status(404).json({message: error.message })
    }
}

export const createItem = async (req, res) => {
    const { username, info, qualityofSleep, sleepTime } = req.body;
    const newResult = new Result({ username, info, qualityofSleep, sleepTime });
    try {
        await newResult.save();
        res.status(201).json(newResult);
    } catch (error) {
        res.status(409).json({message: error.message })
    }
}
export const updateItem = async (req, res) => {
    const { id } = req.params;
    const { username, info, qualityofSleep, sleepTime } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id: ${id}`);

    const updatedItem = { username, info, qualityofSleep, sleepTime , _id: id };

    await Result.findByIdAndUpdate(id, updatedItem, { new: true });

    res.json(updatedItem);
}

export const deleteItem = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id: ${id}`);

    await Result.findByIdAndRemove(id);

    res.json({ message: "Item deleted!" });
}
export default router;