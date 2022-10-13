import { Response } from "express";
import { db_connection } from '../config/db/db_connection';

export function getTask(res: Response) {
    new Promise((resolve, reject) => {
        db_connection.query("SELECT * from task", function (err, rows) {
            if (err) {
                reject({
                    status: "FAILED",
                    message: err.sqlMessage
                })
            } else {
                resolve(
                    {
                        status: "SUCCESS",
                        data: rows.map( row => {
                            return {
                                id: row.id,
                                date: row.date.toISOString().replace(/T/, ' ').replace(/\..+/, '').substring(0, 10),
                                description: row.description,
                                isFinished: row.isFinished == 1 ? true : false
                            }
                        })
                    }
                )
            }
        })
    })
    .then(rows => {
        res.send(rows)
    })
    .catch((reason) => {
        res.send(reason)
    })
}