
//export dependences
const moment = require('moment')
//database connect
const Dd = require('../modal/input')

exports.create = (req,res)=>{
    if(!req.body){
        res 
        return;
    };

let d =new Date();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

new Dd({
bank:req.body.bank,
hand:req.body.hand,
credit:req.body.credit,
date:`${date},${month},${year}/${h}:${m}:${s}`,
dat:new Date()



}).save()
.then((data)=>{
res.redirect('/');
})
.catch((err)=>{
res.send({message:err.message});
})
}

exports.find =(req,res)=>{
   Dd.find().sort('-dat')
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>res.status(500).send({message:err.message}))
}
