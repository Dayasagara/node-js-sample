const controller = require('../controller/controller');

const express = require('express')
const router = express.Router();

router.get("/ping", controller.pingHandler)

module.exports = router;