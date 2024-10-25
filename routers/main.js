const express = require("express");
const router = express.Router();
const { getRouterDoctor } = require("../controller/doctor");
router.get("/", getRouterDoctor);

module.exports = router;
