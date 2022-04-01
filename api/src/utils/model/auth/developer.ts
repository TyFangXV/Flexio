import mongoose from "mongoose";


const developerAccountModel = new mongoose.Schema({
    userID : {
        type: String,
        required: true,
    },
    permission : {
        type: String,
        required: true,
    },
    token : {
        type: String,
        required: true,
    },
    publicToken : {
        type: String,
        required: true,
    }
})

const developerModel = mongoose.model("Developer", developerAccountModel);
export default developerModel;