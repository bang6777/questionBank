const express=require("express");
var router=express.Router();
var db=require('../controllers/pagination');
router.get("/",db.get_Pagination);
module.exports=router;