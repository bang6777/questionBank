const express= require('express');
const router=express.Router();
const db=require('../controllers/teacher');
router.get('/',db.get_Teacher);
router.post('/',db.add_Teacher);
module.exports=router;