const express = require("express");
const router = express.Router();
const imgController = require("../controllers/imgs/img.controller");
const uploadImg= require("../middlewares/uploadImg");
router.post("/upload/img", uploadImg.array('imgCollection', 6), imgController.uploadImg);
// router.get("/tutorials", excelController.getTutorials);
module.exports = router;