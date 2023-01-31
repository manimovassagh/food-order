import express, {NextFunction, Request, Response} from "express";

const router= express.Router();


router.get('/',(req:Request,res:Response ,next:NextFunction)=>{
    res.json("this is message from Vendor Route")
})

export {router as VendorRoute};