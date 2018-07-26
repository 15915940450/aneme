const express=require('express');
const router=express.Router();

//http://localhost:1594/marksix/
router.get('/',function(req,res){
  res.send('oo');
})

module.exports=router;
