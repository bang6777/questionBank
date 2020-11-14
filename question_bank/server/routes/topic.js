const express = require("express");
const router = express.Router();
const db = require("../controllers/Topic");
//get list'
router.get("/", db.get_List_Topic);
// router.get("/:id", db.get_Topic_ById);
// router.post("/", db.add_Topic);
// router.post("/update/",db.update_Topic);
// router.delete("/move/",db.delete_Topic);
module.exports = router;    