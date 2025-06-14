import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"

dotenv.config();

const app =express();
const PORT=process.env.PORT||3000
const DB_URI=process.env.MONGO_URI



app.use(cors());

app.use(express.json());



//connect to mongodb
try{
   await mongoose.connect(DB_URI);
   console.log("Connected to mongodb");

}catch(error){
    console.log( error);

}

//routes
app.use("/book", bookRoute);
app.use("/user", userRoute);



app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})