// const http = require('http')
const colors = require('colors')
// const HandleServer = function(req,res){

//     res.writeHead(200);
//     res.write("<h1>Hola Mundo con Node Js</h1>");
//     res.end();

// }

// const server = http.createServer(HandleServer)

// server.listen(3000,function(){
//     console.log("Server on port 3000".green)
// })
const express = require("express")

const server = express();

server.get("/", (req,res)=>{
    res.send(<h1>Hola Mundo</h1>)
    res.end()
})

server.listen(3000,()=>{
    console.log("server on port 3000".red)

})