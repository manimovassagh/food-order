import mongoose, {Document, Model, Schema} from "mongoose";

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
//schema for DB
const VendorSchema = new Schema({

    name: {type: String, require: true},
    ownerName: {type: String, require: true},
    foodType: {type: [String], require: true},
    pincode: {type: String, require: true},
    address: {type: String},
    phone: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    salt: {type: String, require: true},
    serviceAvailable: {type: Boolean},
    coverImage: {type: [String]},
    rating: {type: Number},
    foods: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'food'
    }],


}, {timestamps: true})