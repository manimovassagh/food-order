import express from "express"
import {PORT} from "./config/Constants/Constants";
import {AdminRoute,VendorRoute} from "./routes";
import bodyParser from "body-parser";

const app=express();
app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));




app.listen(PORT,()=>{
    console.clear();
    console.log(`App is listening on port ${PORT}`)
})