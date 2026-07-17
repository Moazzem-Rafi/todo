const Todo = require ("../models/todoModel")

const createTodo = async (req,res)=>{
  const {task,status,priority} = req.body

  if (!task||!priority) {
    return res.send ({
        status : false,
        massage : "Todo Not Created"
    })
  }
const todo = new Todo({
    task : task,
    priority : priority
})
 await todo.save()
 res.send ({
    status : true,
    massage :"Todo Created"
 })
}


module.exports = createTodo
<<<<<<< HEAD
=======





































// const Todo = require ("../models/todoModel")
 
// const createTodo = async(req,res)=>{
//     const {task,status,priority} = req.body

//     if (!task||!priority) {
//         return res.send ({
//             success : false,
//             massage : "Data filled required"
//         })
//     }
//     const todo = new Todo({
//         task : task,
//         priority : priority
//     })
//     await todo.save()
//     res.send ({
//         success : true,
//         massage : "Todo Created"
//     })
// }


// module.exports = createTodo
>>>>>>> 1229f741919ec012c14d783866a80643d38b38b5
