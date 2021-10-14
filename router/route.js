//export dependences
const express = require('express');
const router = express.Router();
const axios = require('axios');

//import dependendes
const api = require('../server/controle/control');


router.get('/',(req,res)=>{
   axios.get(`${process.env.WEB_URL}api/find`)
   .then((da)=>{
     let d = da.data;
     let a =0;
     let b =0;
     let c =0;
     for(let x in d){

         a+=d[x].bank;
         b+=d[x].hand;
         c+=d[x].credit;
     }
     let e =0;
     if(!b == ''){
        e = a-b;
     }
     let f =0;
     if(!c == ''){
        f = b-c;
     }
     
    res.render('index',{user:da.data,bank:e,hand:f,credit:c})
   })
   .catch((err=>{
       res.status(450).send({message:err.message})
   }))
    
});



//API

router.post('/api/create',api.create);

router.get('/api/find',api.find)
module.exports=router;
