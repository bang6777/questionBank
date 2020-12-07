const express = require("express");
const router = express.Router();
const db = require("../controllers/exam_question");
router.get("/",db.get_Exam_Question);
router.post("/",db.add_Exam_Question_Byid);
module.exports=router;