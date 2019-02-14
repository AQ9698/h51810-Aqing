var express = require('express');
var router = express.Router();
var mg = require('./mg');

/* GET home page. */
router.get('/', function(req, res, next){
  
  console.log('ajx',req.query)
  // req.session.username=req.query.username;
  // console.log(req.session);
  //读库
  mg({
    // url:'mongodb://127.0.0.1:27017',
    dbName:'1228',
    collectionName:'zdq'
  },(collection,client)=>{
    collection.find({
      username:req.query.username,
      password:req.query.password
    }).toArray((err,data)=>{
      console.log("数据",data)
      if(data.length>0){
        if(req.query.password==data[0].password&&req.query.username==data[0].username){
          res.send("2") //登陆成功
        // res.send({data:data})
        }else{ 
         res.send("0") //用户名或者密码错误
        } 
      }else{
        res.send("1") //用户名密码为空
      }
      client.close()
    })
  })
  

});

router.post('/', function(req, res, next) {
  
  console.log('ajx',req.body)

  //读库
  

});

module.exports = router;
