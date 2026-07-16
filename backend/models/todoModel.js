const mongoose = require ('mongoose');
const {Schema} = mongoose

const todoSchema = new Schema({
task:{
    type : string,
    required : true
}

})