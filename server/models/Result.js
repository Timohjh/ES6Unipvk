import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    username: String,
    info: String,
    qualityofSleep: {
        type: Number,
        default: 0
    },
    sleepTime: {
        type: Number,
        default: 0
    },
    sleepDate: {
        type: Date,
        default: new Date()
    },
});

const Result = mongoose.model('Result', postSchema);

export default Result;