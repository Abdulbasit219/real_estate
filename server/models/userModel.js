// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true })

const userSchema = mongoose.model('Users-Real-Estate', User);

export default userSchema;