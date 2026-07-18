const Todo = require ("../models/todoModel")

const createTodo = async (req,res)=>{
  const {task,status,priority} = req.body

  if (!task||!priority) {
    return res.send ({
        status : false,
        massage : "Todo Not Created , Give data Properly"
    })
  }
const todo = new Todo({
    task : task,
    priority : priority
})
 await todo.save()
 res.send ({
    status : true,
    massage :"Todo Created Successfully"
 })
}


module.exports = createTodo
