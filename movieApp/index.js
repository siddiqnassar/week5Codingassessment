//import express
let express=require('express');
let apiRoutes = require('./api-routes');
let bodyParser=require('body-parser');
let mongoose=require('mongoose');
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');
    var cors1=require('cors');
    
  

let app=express();
app.use(cors1());
//configure bodyparser to handler posts requests
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());
//connect to mongodb and set connection variable
mongoose.connect('mongodb://localhost/moviesdb1',{useNewUrlParser : true});
var db=mongoose.connection;
//added check for db connection

if(!db)
   console.log("Error connecting db");
else
   console.log("Db connected succesfully");


let port = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    res.send(JSON.stringify({message:'Hello World from Express!!'}))
});

app.use('/api',apiRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, ()=>{
    console.log("Server started!!");
});