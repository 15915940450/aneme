const express=require('express');
const router=express.Router();
const MongoClient=require('mongodb').MongoClient;
const urlMongoDB='mongodb://localhost:27017/ehd';

function routerGet(url,paramSettings){
  var objSettings=Object.assign({
    collection:'te',
    aggregate:false,
    sort:false
  },paramSettings);
  function callbackResult(err,result,res){
    if(err){
      throw err;
    }
    res.send(result);
  }
  router.get(url,function(req,res){
    MongoClient.connect(urlMongoDB,{useNewUrlParser:true},function(err,client){
      if(err){
        throw err;
      }
      var db=client.db('ehd');
      if(objSettings.aggregate){
        db.collection(objSettings.collection).aggregate(objSettings.aggregate).toArray(function(err,result){
        callbackResult(err,result,res);
        });
      }else{
        db.collection(objSettings.collection).find({}).sort(objSettings.sort).toArray(function(err,result){
          callbackResult(err,result,res);
        });
      }
    });
  });

}

//http://localhost:1594/marksix/
routerGet('/',{
  aggregate:[{$group:{'_id':"$num",total:{$sum:1}}},{$sort:{total:1}}]
});

routerGet('/all',{
  sort:{date:-1}
});

router.post('/insert',function(req,res){
  //console.log(typeof req.body);  //object
  objInsert=req.body;
  MongoClient.connect(urlMongoDB,{useNewUrlParser:true},function(err,client){
    var db=client.db('ehd');
    db.collection('te').insertOne(objInsert).then(function(result){
      res.send(result.result);
    });
  });
});

module.exports=router;
