import mongoose from 'mongoose';
import {Schema} from 'mongoose';
import { Task } from '../../../../types';

type TaskDateType = {
    from : Date,
    till : Date
}

const TaskSchema = new Schema<Task>({
    title: {
        type: String,
        required: true,
    },
    date : {
        from : {
            type: Date,
            required: true,
        },
        till : {
            type: Date,
            required: true,
        }
    },
    Time : {
        from : {
            type: Date,
            required: true,
        },
        till : {
            type: Date,
            required: true,
        }
    },
    settings : {
        category : {
            id : {
                type : String,
                required : true
            },
            name : {
                type : String,
                required : true
            },
            icon : {
                type : String,
                required : true
            },
            color : {
                type : String,
                required : true

            }
        }
    },
    isTemplate : {
        type : Boolean,
        required : true
    },
    _id : String,
    userID : {
        type : String,
        required : true
    }
});

const TaskModel = mongoose.model("Task", TaskSchema);
export default TaskModel;
