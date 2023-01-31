import express from "express"
import {PORT} from "./config/Constants/Constants";
import {AdminRoute,VendorRoute} from "./routes";
import bodyParser from "body-parser";
import  {NextFunction,Request , Response} from "express";
const app=express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);


app.get("/",(req:Request,res:Response,next:NextFunction)=>{
    res.json({
        message:`App is healthy on ${new Date().toDateString()} ${new Date().toLocaleTimeString()}`
    })
})



app.listen(PORT,()=>{
    console.clear();
    console.log(`App is listening on port ${PORT}`)  
})