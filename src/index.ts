import express from "express"
import {PORT} from "./config/Constants/Constants";
import {AdminRoute,VendorRoute} from "./routes";

const app=express();
app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);



app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
})