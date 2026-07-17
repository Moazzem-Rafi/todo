const Todo = require ('../models/todoModel')
const deleteTodo = async (req,res)=>{
    const {id} = req.params

    const deleteData = await Todo.findByIdAndDelete(id)
    res.send({
        status : true,
<<<<<<< HEAD
        massage : "Todo Deleted successfully!"
=======
        massage : "Todo Deleted "
>>>>>>> 1229f741919ec012c14d783866a80643d38b38b5
    })
}

module.exports = deleteTodo




























<<<<<<< HEAD
=======



>>>>>>> 1229f741919ec012c14d783866a80643d38b38b5
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