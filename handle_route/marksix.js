//mongodb driver and return data
var MongoClient=require('mongodb').MongoClient;
var urlMongoDB='mongodb://localhost:27017/ehd';
MongoClient.connect(urlMongoDB,function(err,client){
  if(err){
    throw err;
  }
  var db=client.db('ehd');
  db.collection('testCollection').insertOne({
    "date":"2018-07-26",
    "num":Math.ceil(Math.random()*49)
  });
})
module.exports=function(){
  return ('mongodb');
};
