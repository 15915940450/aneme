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
    var arrAggr=[{$group:{'_id':"$num",total:{$sum:1}}},{$sort:{total:1}}];
    db.collection('te').aggregate(arrAggr).toArray(function(err,result){
      if(err){throw err}
      res.send(result);
    });
    //aggregate
    /*
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
    */
    //find marksix
    /*
    db.collection('marksix').find({}).sort({period:1}).toArray(function(err,result){
      if(err){throw err}
      res.send(result);
    });
    */
    /*
    db.collection('te').find({}).sort({date:1}).toArray(function(err,result){
      if(err){throw err;}
      res.send(result);
    });
    */
  });
});

module.exports=router;
