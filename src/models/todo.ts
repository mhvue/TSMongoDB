import mongoose from "mongoose";

interface ITodo {
    title: string;
    description: string;
};

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}
);

const Todo = mongoose.model("Todo", todoSchema);

// we’ll call this function every time we want to create a new instance of our Todo
const build = (attr: ITodo) => {
    return new Todo(attr)
}

export { Todo }