
//export dependences
const moment = require('moment')
//database connect
const Dd = require('../modal/input')

exports.create = async (req,res)=>{
    if(!req.body){
        res 
        return;
    };



await new Dd({
bank:req.body.bank,
hand:req.body.hand,
credit:req.body.credit,
date:moment.locale().format("ddd-MMM-YY,h:mm:ss a"),
dat:new Date()



}).save()
.then((data)=>{
res.redirect('/');
})
.catch((err)=>{
res.send({message:err.message});
})
}

exports.find = async(req,res)=>{
   await Dd.find().sort('-dat')
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>res.status(500).send({message:err.message}))
}
