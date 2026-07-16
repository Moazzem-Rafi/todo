const mongoose = require ('mongoose')
const {Schema} = mongoose

const todoSchema = new Schema ({
task:{
    type : String,
    required : true
},
status :{
    type : String,
    enum : ["pending","active","deActive"],
    default :'active'
},
priority:{
    type : String,
    enum : ["high","medium","low"]
}
})


module.exports = mongoose.model("createTodo",todoSchema)































// const mongoose = require ('mongoose');
// const {Schema} = mongoose

// const todoSchema = new Schema({
// task:{
//     type : String,
//     required : true
// },
// status:{
//     type : String,
//     enum : ["pending","active","blocked"],
//     default : 'pending'
// },
// priority :{
//     type : String,
//     enum : ["low","medium","high"],
//     require : true
// }

// })

// module.exports = mongoose.model("Todo",todoSchema)