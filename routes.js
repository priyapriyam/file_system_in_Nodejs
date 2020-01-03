var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.json());



app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "login.json", 'utf8', function (err, data) {
      console.log( data );
      res.send( ['hello word'] );
   });
})


// Routes of post data..  


app.post("/add",(req,res)=>{

 })

app.post('/',(req,res)=>{
    fs.readFile(__dirname+"/login.json",(err,data)=>{
        if(err){
           return res.send(err,"check your json file")
        }else{
           var change_data = JSON.parse(data);
           var courses = {
              "name":req.body.name,
              "age":req.body.age,
              "profession":req.body.profession,
              "language":req.body.language
           }
           change_data.push(courses)
           // console.log(courses);
           fs.writeFileSync(__dirname+"/login.json",JSON.stringify(change_data,null,2))
              return res.send(courses)
        }
     })
})
//  var server = app.listen(8081, function () {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)
//  })
 

app.listen(8081,()=>{
    console.log('working...');
    
})