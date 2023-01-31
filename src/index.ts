import express from "express"


const app=express();
const PORT=3000


app.use("/",(req,res)=>{
    res.send("Hi Mani You made it")
})

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
})