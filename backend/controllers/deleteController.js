const Todo = require ('../models/todoModel')
const deleteTodo = async (req,res)=>{
    const {id} = req.params

    const deleteData = await Todo.findByIdAndDelete(id)
    res.send({
        status : true,
        massage : "Todo Deleted successfully!"
    })
}

module.exports = deleteTodo




























// const Todo = require ("../models/todoModel")

// const deleteTodo = async (req,res)=>{
//   const {id} = req.params

//   const deleteData = await Todo.findByIdAndDelete(id)

//   res.send ({
//     success : true,
//     massage : "Todo Deleted"
//   })
// }


// module.exports = deleteTodo