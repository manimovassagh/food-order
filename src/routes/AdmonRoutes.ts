import express from "express";
import {Request,Response,NextFunction} from "express";
import {CreateVendor, GetVendor, GetVendorByID} from "../controllers";

const router= express.Router();


router.post('/vendor', CreateVendor);
router.get('/vendor', GetVendor);
router.get('/vendor/:id', GetVendorByID);

//router.get('/',(req:Request,res:Response ,next:NextFunction)=>{
  //  res.json({message:"this is message from Admin !!! router"})

//})

export  {router as AdminRoute};