import User from "../models/user.js";

export const updateUser = async(req,res,next) => {

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedUser)
    }
    catch(err){
        next(err);
    }

}

export const getUser = async(req,res,next) => {

    try{
        const user =  await User.findById(req.params.id)
        res.status(200).json(user)
    }
    catch(err){
        next(err);
    }

}