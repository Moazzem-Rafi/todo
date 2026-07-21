require("node:dns").setServers(["1.1.1.1"], ["8.8.8.8"]);
const express = require ('express')
const cors = require ('cors')
const app = express ()
app.use(express.json())
app.use(cors())
const mongoose = require('mongoose');
const createTodo = require("./controllers/createControllers");
const deleteTodo = require("./controllers/deleteController");

app.post('/create/todo',createTodo)
app.delete("/deleteTodo/:id",deleteTodo)

 mongoose
  .connect(
    "mongodb+srv://moazzem:Pd%40ufLBz4csyA_2@cluster0.dzmv75i.mongodb.net/todo?appName=Cluster0",
  )
  .then(() => {
    console.log("Database Connected");
  }); 




app.listen (5000,()=>{
  console.log("server is running");
  
})



