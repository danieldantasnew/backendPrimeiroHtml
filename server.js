const express = require('express')
const nunjucks = require('nunjucks')

const server = express()


server.use(express.static("public"))
server.set("view engine", "html")


nunjucks.configure("views",{
    express:server
})

server.get("/",function(req, res){
    return res.render("home")
})


server.get("/programacao",function(req, res){
    return res.render("programacao")
})


server.listen(5000, function(){
	console.log("server is running")
})