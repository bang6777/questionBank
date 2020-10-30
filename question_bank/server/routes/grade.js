const express = require("express");
const router = express.Router();
const db = require("../controllers/grade");
//get list
router.get("/", db.get_grade);
module.exports = router;