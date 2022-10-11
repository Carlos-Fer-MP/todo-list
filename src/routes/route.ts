import * as core from "express-serve-static-core";
import { createTask, getTask, updateTask } from "../UseCases/task-controller";

export function routes(app: core.Express) {
    app.post("/task", createTask),
    app.put("/task", updateTask),
    app.get("/task:id", getTask)
}
