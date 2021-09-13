import mongoose from "mongoose";

interface ITodo {
    title: string;
    description: string;
};

// add the build function to our existing Todo model
interface todoModelInterface extends mongoose.Model<TodoDoc> {
    build(attr: ITodo): TodoDoc
}

//define an interface for our documents, this interface will define the properties that we want to be contained in our Todo document
interface TodoDoc extends mongoose.Document {
    title: string;
    description: string;
}

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

//we are going to attach the build function to the statics property of our todoSchema,
todoSchema.statics.build = (attr: ITodo) => {
    return new Todo(attr)
}
const Todo = mongoose.model<TodoDoc, todoModelInterface>("Todo", todoSchema);

//we can call build directly on our Todo model
Todo.build({
    title: "some title",
    description: "some description"
});

export { Todo }