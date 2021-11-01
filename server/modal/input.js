//export dependence
const mongoose = require('mongoose');


const s = new mongoose.Schema({
bank:{
    type:Number
},
hand:{
    type:Number
},
credit:{
    type:Number
},
date:{
    type:Date
    
},

});

const inputData = mongoose.model('Input',s);

module.exports=inputData;