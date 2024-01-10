import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated!"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err)
            return next(createError(403, "Token is not valid!"));

        req.user = user;
        next();
    
    });

};

export const verifyAdminUser = (req, res, next) => {
    verifyToken(req, res, () => {
        // console.log('req.user.id:', req.user.id);
        // console.log('req.params.id:', req.params.id);
        // console.log('req.user.isAdmin:', req.user.isAdmin);

        if(req.user.id === req.params.id && req.user.isAdmin){
            next();
        } else{
             return next( createError(403, "You are not authorized!!!"));
        }
    })
}
