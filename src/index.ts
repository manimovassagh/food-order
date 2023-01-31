import express from "express"
import {PORT} from "./Constants/Constants";

const app=express();


app.use("/",(req,res)=>{
    res.send("Hi Mani You made it")
})

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
})