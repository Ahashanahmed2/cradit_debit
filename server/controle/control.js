
//export dependences
const moment = require('moment-timezone')
//database connect
const Dd = require('../modal/input')
let day = moment.tz("Asia/Kuala_Lumpur").format("lll")
exports.create = (req,res)=>{
    if(!req.body){
        res 
        return;
    };



new Dd({
bank:req.body.bank,
hand:req.body.hand,
credit:req.body.credit,

date:day,
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
