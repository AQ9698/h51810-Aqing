let mongodb = require('mongodb');//引入对象
let MongoClient = mongodb.MongoClient;//实例化客户端

/* module.exports=(url,dbName,collectionName,callback)=>{

  MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);//连接库
    const collection = db.collection(collectionName);//连接表|集合
    callback(collection,client);
  });

} */

module.exports=(options,callback)=>{
  options=options||{};
  options.url=options.url||'mongodb://127.0.0.1:27017';
  options.dbName=options.dbName||null;
  options.collectionName=options.collectionName||null;

  MongoClient.connect(options.url, function(err, client) {
    const db = client.db(options.dbName);//连接库
    const collection = db.collection(options.collectionName);//连接表|集合
    callback(collection,client);
  });

}