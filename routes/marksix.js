const express=require('express');
const router=express.Router();
const MongoClient=require('mongodb').MongoClient;
const urlMongoDB='mongodb://localhost:27017/ehd';

//http://localhost:1594/marksix/
router.get('/',function(req,res){
  //mongodb driver and return data
  MongoClient.connect(urlMongoDB,function(err,client){
    if(err){
      throw err;
    }
    //數據庫db
    var db=client.db('ehd');
    db.collection('testCollection').find().toArray(function(err,result){
      res.send(result);
    });
  })
})

module.exports=router;
