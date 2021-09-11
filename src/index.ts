import express from "express";
import {json} from "body-parser";
import { todoRouter } from "./routes/todo";
import mongoose from "mongoose";

const app = express ();
app.use(json());
//register our route
app.use(todoRouter);

//connect to mongoDB
mongoose.connect("mongodb://localhost:27017/todos")
.then(() => {
    console.log("mongoDB connected successfully!")
    //listening for our server 
    app.listen(3000, () => {
        console.log("server is listening to port 3000")
    });
}).catch((error) => {
    console.log("error", error)
})
