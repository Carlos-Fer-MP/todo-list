import * as core from "express-serve-static-core";
import { createTask } from "../useCases/createTask";
import { updateTask } from "../useCases/updateTask";
import { getTask } from "../useCases/getTask";

export function routes(app: core.Express) {
    app.post("/task", createTask),
    app.put("/task", updateTask),
    app.get("/task:id", getTask)
}
