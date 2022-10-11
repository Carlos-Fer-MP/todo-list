import { Response, Request } from "express";
import {mySqlConnection} from "../db/connection";

export function createTask(req: Request, res: Response) {
    new Promise((resolve, reject) => {
        let task = {
            id: req.body.id,
            date: req.body.date,
            description: req.body.description,
            isFinished: req.body.isFinished
        }
        //some SQL will go arround here, although is not cool to do this i will change it.
    });
}

