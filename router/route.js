//export dependences
const express = require('express');
const router = express.Router();
const axios = require('axios');

//import dependendes
const api = require('../server/controle/control');


router.get('/',async(req,res)=>{
  await axios.get(`${process.env.WEB_URL}api/find`)
   .then((da)=>{


     let db_data = da.data;    let u =0;
   

     let a =0;
        
     let b =0;
    
     let c =0;
     
     for(let x in db_data){
       
        a+=db_data[x].bank;
         b+=db_data[x].hand;
        c+=db_data[x].credit;
     }

     let e =0;
        e = a-b;
     
    
     let f =0;
        f = b-c;
     
     
    res.render('index',{user:db_data,bank:b==0?a:e,hand:c==0?b:f,credit:c})
   })
   .catch((err=>{
       res.status(450).send({message:err.message})
   }))
    
});



//API

router.post('/api/create',api.create);

router.get('/api/find',api.find)
module.exports=router;
