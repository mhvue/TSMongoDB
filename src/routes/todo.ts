import express, {Request, Response} from "express";
import { Todo } from "../models/todo";

const router = express.Router();

//get 
router.get("/api/todo", [], async (req: Request, res: Response) => {
    const todo = await Todo.find({})
    return res.json({
        todo
    })
});

//post
router.post("/api/todo", async (req: Request, res: Response) => {
    const { title, description } = req.body;

    const todo = Todo.build({title, description})
    await todo.save()
    return res.json({
        message: "created!"
    })
});

export { router as todoRouter }