'use strict';

var express = require('express');
const server = express();
var router = express.Router();
const path = require('path');

const db = require('../config/db_connection')[server.get('env')];

router.get('/', (req, res, next) => {
    //todo, just mock an API endpoint
    res.json({ "JonSnow": "You know nothing" })
})

router.get('/GetInventorylist', (req, res, next) => {
    //todo, just mock an API endpoint
    var SQL = 'SELECT * FROM inventory';
    db.manyOrNone(SQL).then((result) => {
            //no matchin results, return 401
            if (result === null) {
                return res.status(404).json({ "ErrorMessage": "No inventory exists" });
            }
            return res.json(result);
        })
        .catch((error) => {
            ResolveDbError(error, res);
        })
});

router.put('/UpdateInventory', (req, res, next) => {
    //update to db
    db.manyOrNone('UPDATE inventory SET name = ${name}, category=${category}, quantity=${quantity}, price = ${price} WHERE id = ${id} RETURNING *', req.body)
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((error) => {
            ResolveDbError(error, res);
        })
});


function ResolveDbError(error, resFunc) {
    console.log('DB trx error', error);
    return resFunc.status(500).json({
        "ErrorName": error.name,
        "ErrorCode": error.code,
        "ErrorMessage": error.message
    });

}
module.exports = router;