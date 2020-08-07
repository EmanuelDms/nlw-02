const express = require('express');
const { request, response } = require('express');
const server = express();

server.use(express.static("public"))
.get('/', (request, response)=>{
  return response.sendFile(__dirname + "/views/index.html")
})
.get('/study', (request, response) =>{
  return response.sendFile(__dirname + "/views/study.html")
})
.get('/give-classes', (request, response) =>{
  return response.sendFile(__dirname + "/views/give-classes.html")
})
.listen(5500);