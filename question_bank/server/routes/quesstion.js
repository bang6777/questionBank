const express = require("express");
const router = express.Router();
const db = require("../controllers/Quesstion");
//get list
router.get("/", db.get_List_Quesstion);
router.post("/id", db.get_Quesstion_ById);
router.post("/", db.add_Quesstion);
// router.get("/:id", db.get_Quesstion_ById);
// 
// router.post("/update/",db.update_Quesstion);
// router.delete("/move/",db.delete_Quesstion);
module.exports = router;    