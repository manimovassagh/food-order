import express ,{Request,Response,NextFunction} from "express";
import {CreateVendorInput} from "../dto";


export const CreateVendor= async (req:Request,res:Response,next:NextFunction)=>{
    console.log("create vendor is working")
    console.log(await req.body);
   const { name, address, pincode, foodType, email, password, ownerName, phone }  = <CreateVendorInput>req.body;
    return res.json({ name, address, pincode, foodType, email, password, ownerName, phone } );
}

export const GetVendor= async (req:Request,res:Response,next:NextFunction)=>{
    console.log("get vendor is working")
}

export const GetVendorByID= async (req:Request,res:Response,next:NextFunction)=>{

}