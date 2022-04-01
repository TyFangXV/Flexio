import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    userId: {
        type: String,
        required: true,
        index: true,
    },
    permissionLevel: {
        type: Number,
        required: true,
        index: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
})

const TokenModel = mongoose.model("Token", tokenSchema);
export default TokenModel;