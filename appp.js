const express=require ('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.get('/getpnk',(req,res)=>{
    console.log('Enter the  client request')
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sbi_data");
        // dbo.collection("ffff").find({}).toArray(function(err, result) {
          dbo.collection("ffff").findOne({}, function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
          res.send({status:"success",message:"responce send sucessfully",result:result})
         
        });
    });
     })

     
  app.post('/postpnk',(req,res)=>{
    console.log('Enter the  client request',req.body.fname)
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sbi_data");
        // dbo.collection("ffff").find({}).toArray(function(err, result) {
          // dbo.collection("ffff").insertOne(req.body,function(err, ress) {
            // var myquery = { fname: "ttt" };
            // var newvalues = { $set: {fname: req.body.fname, ph_no: req.body.ph_no } };
            // dbo.collection("ffff").updateOne(myquery, newvalues, function(err, ress) {
              var myquery = { fname: 'uuu' };
              dbo.collection("ffff").deleteOne(myquery, function(err, obj) {
          if (err) throw err;
       
          db.close();
          res.send({status:"success",message:"responce send sucessfully"})
         
        });
    });
     

  })
  app.get('/get',(req,res)=>{
    console.log('Enter the  client request')
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sbi_data");
        dbo.collection("ltgt").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
          res.send({status:"success",message:"responce send sucessfully",result:result})
         
        });
    });
     

  })
  app.post('/post',(req,res)=>{
    console.log('Enter the  client request',req.body.status)
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sbi_data");
        // dbo.collection("ltgt").find({}).toArray(function(err, result) {
          dbo.collection("ltgt").insertOne(req.body, function(err, ress) {
            // var myquery = { status: "B" };
            // var newvalues = { $set: {status: req.body.status, qty: req.body.qty } };
            // dbo.collection("ltgt").updateOne(myquery, newvalues, function(err, ress) {
              // var myquery = { status: "B" };
              // dbo.collection("ltgt").deleteOne(myquery, function(err, obj) {
              // if (err) throw err;
       
              db.close();
              res.send({status:"success",message:"responce send sucessfully"})
             
            });
        });
         
    
      })
    
      app.post('/pppp',(req,res)=>{
        console.log('Enter the  client request',req.body.first_name)
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("sbi_data");
            var myquery = { first_name: 'rrerr' };
  dbo.collection("praveen_doc").deleteOne(myquery, function(err, obj) {
  
              if (err) throw err;
              db.close();
              res.send({status:"success",message:"responce send sucessfully"})
            
            });
        });
         
    
      })

  
app.listen (port,() =>{
  console.log(`Example app listening at http://localhost:${port}`)
})