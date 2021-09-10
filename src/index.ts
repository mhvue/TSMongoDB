import express from "express";
import {json} from "body-parser";
import { todoRouter } from "./routes/todo";

const app = express ();
app.use(json());
//register our route
app.use(todoRouter);

//listening for our server 
app.listen(3000, () => {
    console.log("server is listening to port 3000")
});