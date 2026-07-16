require("node:dns").setServers(["1.1.1.1"], ["8.8.8.8"]);
const express = require ('express')
const app = express ()
const mongoose = require('mongoose')

app.post('/create/todo',)


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



