import { Response, Request } from "express";
import {db_connection} from '../config/db/db_connection';

export function updateTask(req: Request, res: Response) {
    new Promise((resolve, reject) => {
        // eslint-disable-next-line prefer-const
        let task = {
            date: req.body.date,
            description: req.body.description,
            is_finished: req.body.is_finished ? 1 : 0
        }
        const taskId = req.params.id
        db_connection.query("UPDATE task SET ? WHERE id = ?", [ task, taskId ], function (err, results, field) {
            if (err) {
                reject({
                    status: "FAILED",
                    message: err.sqlMessage
                })
            }
            resolve({
                status: results.affectedRows > 0 ? "SUCCESS" : "FAILED"
            })
        })
    })
    .then(successPayload => {
        res.send(successPayload)
    })
    .catch((reason) => {
        res.send(reason)
    })
}