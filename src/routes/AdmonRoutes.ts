import express from "express";
import {Request,Response,NextFunction} from "express";

const router= express.Router();


router.get('/',(req:Request,res:Response ,next:NextFunction)=>{
    res.json("this is message from admin router")

})

export  {router as AdminRoute};