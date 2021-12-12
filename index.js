//export dependence
const mongoose =require('mongoose');
const express = require('express');
const env = require('dotenv');


//import dependence
const path =require('path');
const route = require('./router/route');
const http = require('http')



//configer
const app = express();
env.config();
http.createServer(app)
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine','ejs')
//database connected
mongoose.connect(process.env.DB)
.then(()=>console.log('database'))
.catch(error => handleError(error));

//router
app.use('/',route)




app.listen(process.env.PORT,()=>{
    console.log(`server is connected http://localhost:${process.env.PORT}`);
})