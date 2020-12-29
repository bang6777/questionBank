const express = require("express");
const router = express.Router();
const imgController = require("../controllers/imgs/img.controller");
const uploadImg= require("../middlewares/uploadImgOne");
router.post("/upload", uploadImg.single('file'), imgController.upload);

module.exports = router;