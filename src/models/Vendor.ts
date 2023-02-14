import mongoose, { Document, Model, Schema } from "mongoose";

interface VendorDoc extends Document {
    name: string;
    ownerName: string;
    foodType: [string];
    pincode: string;
    address: string;
    phone: string;
    email: string;
    password: string;
    salt: string;
    seviceAvailable: string;
    coverImage: [string];
    rating: number;
    foods: any;
}