import mongoose from 'mongoose';
const url="mongodb://0.0.0.0:27017/hotel";

mongoose.connect(url);
console.log(' succfully mongodb cancted')