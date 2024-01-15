import express from "express";
import { changePassword, getUser, updateUser } from "../controllers/user.js";
import { verifyAdminUser } from "../utils/verifyToken.js";

const router = express.Router(); 

    // router.get("/checkAuthentication", verifyToken, (req, res, next) => {
    //     res.send("Logged,in")
    // })

    // router.get("/checkUser/:id", verifyAdminUser, (req, res, next) => {
    //     res.send("Hello you are admin and you can do whatever u want")
    // })

//READ
router.get("/:id", verifyAdminUser, getUser);

//UPDATE
router.put("/:id", verifyAdminUser, updateUser);

//CHNAGE PASSWORD
router.put("/changePassword/:id", verifyAdminUser, changePassword);

export default router;