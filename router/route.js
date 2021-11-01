//export dependences
const express = require('express');
const router = express.Router();
const axios = require('axios');

//import dependendes
const api = require('../server/controle/control');


router.get('/',async(req,res)=>{
  await axios.get(`${process.env.WEB_URL}api/find`)
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
     
        e = a-b;
     
     b>0?b:f
     let f =0;
    
        f = b-c;
     
     console.log(e);
    res.render('index',{user:d,bank:b==0?a:e,hand:c==0?b:f,credit:c})
   })
   .catch((err=>{
       res.status(450).send({message:err.message})
   }))
    
});



//API

router.post('/api/create',api.create);

router.get('/api/find',api.find)
module.exports=router;
