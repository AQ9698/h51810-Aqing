var express = require('express');
var router = express.Router();
var mg = require('./mg');

router.get('/', (req,res,next)=>{
  
    console.log('getcjy',req.query)
    // if( parseInt(req.query.username)){
    //   var username = parseInt(req.query.username)
    //   console.log("username")
    // }
    // else{
    //   var username = req.query.username
    // }
    // if( parseInt(req.query.password)){
    //   var password = parseInt(req.query.password)
    // }
    // else{
    //   var password = req.query.password
    // }
    // 读库
    mg({
      url:'mongodb://127.0.0.1:27017',
      dbName:'1228',
      collectionName:'zdq'
    },(collection,client)=>{ 
      collection.find({username:req.query.username}).toArray((err,data)=>{
        if(data.length>0){
          res.send("0") //响应出去状态 该用户名已存在
        }else{
          mg({
               url:'mongodb://127.0.0.1:27017',
               dbName:'1228',
                collectionName:'zdq'
          },(collection,client)=>{
            collection.insertOne({username:req.query.username,password:req.query.password},()=>{
              res.send("1")   //注册成功 
            })
          })     
        }
        client.close()
      })
    })
    
  });
  module.exports = router;