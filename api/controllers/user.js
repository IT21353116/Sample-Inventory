import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";

export const updateUser = async(req,res,next) => {

    try{

        if(!req.body.username)
        return next(createError(404, "Username required!"));

        if (!req.body.email || !/@gmail\.com$/.test(req.body.email)) {
            return next(createError(422, "Valid Gmail address required!"));
          }

        if (!req.body.mobileNo || !/^\d{10}$/.test(req.body.mobileNo)) {
            return next(createError(400, "Valid 10-digit Phone Number required!"));
          }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json({ message: "Update Successful!", user: updatedUser });
    }
    catch(err){
        next(err);
    }

}

export const changePassword = async (req, res, next) => {
    if (!req.body.password) {
      return next(createError(400, "Current Password required!"));
    }

    if (!req.body.newPassword) {
      return next(createError(400, "New Password required!"));
    }
  
    try {
      const user = await User.findOne({ _id: req.params.id });
  
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
  
      if (!isPasswordCorrect) {
        return next(createError(400, "Incorrect Password!"));
      }

      const salt = bcrypt.genSaltSync(10);
      const hashedNewPassword = await bcrypt.hashSync(req.body.newPassword, salt);
  
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { password: hashedNewPassword } },
        { new: true }
      );
  
      res.status(200).json({ message: "Password updated successfully", user: updatedUser });
    } catch (err) {
      next(err);
    }
  };
  

export const getUser = async(req,res,next) => {

    try{
        const user =  await User.findById(req.params.id)
        res.status(200).json(user)
    }
    catch(err){
        next(err);
    }

}