import { Response, Request } from "express";
const db_connection = require('../config/db/db_connection');

export function createTask(req: Request, res: Response) {
    new Promise ((resolve, reject) => {
        let task = {
            id: req.body.id,
            date: Date.now,
            description: req.body.description,
            isFinished: req.body.isFinished ? 1 : 0
        }
        db_connection.query("INSERT INTO todo SET ?", task, function (err, results) {
            if(err){
                reject({
                    status: "Failed",
                    message: err.sqlMessage
                })
            }
            resolve({
                status: results.affectedRows > 0 ? "SUCCES" : "FAILED"
            })
        })
    })
    .then(succesPayload => {
        res.send(succesPayload);
    })
    .catch(() => {
        res.send('Hey');
    })
}