const Todo = require ('../models/todoModel')
const deleteTodo = async (req,res)=>{
    const {id} = req.params

    const deleteData = await Todo.findByIdAndDelete(id)
    res.send({
        status : true,
        massage : "Todo Deleted succcessfully!"
    })
}

module.exports = deleteTodo
