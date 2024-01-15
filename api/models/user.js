import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    mobileNo:{
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
        //required: true,
    },
    email:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default: true,
    },
    }, 
    {timestamps: true}
);

export default model("User", userSchema);

