import express from "express"
import {PORT} from "./Constants/Constants";
import {Request,Response} from "express";

const app=express();


app.use("/",(req:Request,res:Response)=>{
    res.json("Hi mani it is json from the backend ")


})

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
})