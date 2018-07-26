//mongodb driver and return data
  var MongoClient=require('mongodb').MongoClient;
  var urlMongoDB='mongodb://localhost:27017/ehd';
  MongoClient.connect(urlMongoDB,function(err,client){
    if(err){
      throw err;
    }
    //數據庫db
    var db=client.db('ehd');
    db.collection('testCollection').find().toArray(function(err,result){
module.exports=function(){
      return (result);
};
    });
  })
