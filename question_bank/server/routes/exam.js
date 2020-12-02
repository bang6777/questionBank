const express = require("express");
const router = express.Router();
const db = require("../controllers/exam");
//get list'
router.get("/",db.get_List_Exam);
router.post("/",db.add_Exam);
module.exports = router;    