import express, {Request, Response} from "express";

const router = express.Router();

//get 
router.get("/api/todo", [], (req: Request, res: Response) => {
    return res.send("the todo")
});

//post
router.post("/api/todo", (req, res) => {
    return res.send("this is for new to do created")
});

export { router as todoRouter }