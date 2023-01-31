import express from "express";
import {Request,Response,NextFunction} from "express";
import {CreateVendor} from "../controllers";

const router= express.Router();


router.post('/vendor', CreateVendor);

router.get('/',(req:Request,res:Response ,next:NextFunction)=>{
    res.json({message:"this is message from admin router"})

})

export  {router as AdminRoute};