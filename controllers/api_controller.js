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


function ResolveDbError(error, resFunc) {
    console.log('DB trx error', error);
    return resFunc.status(500).json({
        "ErrorName": error.name,
        "ErrorCode": error.code,
        "ErrorMessage": error.message
    });

}
module.exports = router;