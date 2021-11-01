
//export dependences
const moment = require('moment-timezone')
//database connect
const Dd = require('../modal/input')

exports.create = (req,res)=>{
    if(!req.body){
        res 
        return;
    };



new Dd({
bank:req.body.bank,
hand:req.body.hand,
credit:req.body.credit,

date:moment.tz("Asia/Kuala_Lumpur").format("llll"),




}).save()
.then((data)=>{
res.redirect('/');
})
.catch((err)=>{
res.send({message:err.message});
})
}

exports.find =(req,res)=>{
   Dd.find().sort('-date')
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>res.status(500).send({message:err.message}))
}
