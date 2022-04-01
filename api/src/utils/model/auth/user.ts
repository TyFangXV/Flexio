import mongoose from 'mongoose';
import {Schema} from 'mongoose';
import * as uuid from 'uuid';

export type userAccountType = {
    email: string,
    password: string,
    username: string,
    permission : string
}

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    permission: {
        type: String,
        required: true
    },
    id : {
        type: String,
        default: uuid.v4,
        unique: true
    }
});


const userModel = mongoose.model("User", userSchema);
export default userModel;