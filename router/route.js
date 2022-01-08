//export dependences
const express = require('express');
const router = express.Router();
const axios = require('axios');

//import dependendes
const api = require('../server/controle/control');


router.get('/',async(req,res)=>{
  await axios.get(`${process.env.WEB_URL}api/find`)
   .then((da)=>{


     let db_data = da.data;
    let u =0;
    let m=0;
    let i=0;

     let a =parseFloat(u).toFixed(2);
     let b =parseFloat(m).toFixed(2);
     let c =parseFloat(i).toFixed(2);
     for(let x in db_data){
       
         u+=db_data[x].bank;
         m+=db_data[x].hand;
         i+=db_data[x].credit;
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
