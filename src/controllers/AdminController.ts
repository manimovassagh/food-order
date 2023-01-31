import express, {Request, Response, NextFunction} from "express";
import {CreateVendorInput} from "../dto";
import {logger} from "../config/loggerConfig/WinstonLoggerConfig";


export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {
    logger.info("create vendor is working");
    const {name, address, pincode, foodType, email, password, ownerName, phone} = <CreateVendorInput>req.body;
    return res.json({name, address, pincode, foodType, email, password, ownerName, phone});
}

export const GetVendor = async (req: Request, res: Response, next: NextFunction) => {
    console.log("get vendor is working")
}

export const GetVendorByID = async (req: Request, res: Response, next: NextFunction) => {
    logger.info("Get vendor by ID is working and running");
}