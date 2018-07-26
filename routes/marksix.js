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
    db.collection('testCollection').aggregate([
      {
        $group:{
          '_id':"$num", //必須為'_id'
          total:{
            $sum:1
          }
        }
      },
      {
        $sort:{
          total:1
        }
      }
    ]).toArray(function(err,result){
      if(err){throw err}
      res.send(result);
    });
  });
});

module.exports=router;
