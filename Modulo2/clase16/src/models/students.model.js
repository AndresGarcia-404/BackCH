import mongoose from "mongoose";

const useCollection = "students"

const studentSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:{
        type:String,
        unique:true
    },
    gender:String,
    courses:{
        type:[
            {   course:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default:[]
    }
})

export const studentModel = mongoose.model(useCollection,studentSchema);