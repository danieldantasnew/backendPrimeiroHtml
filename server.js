const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./dados")

server.use(express.static("public"))
server.set("view engine", "njk")


nunjucks.configure("views",{
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/",function(req, res){
    const home = {
        avatar_url: "https://yt3.ggpht.com/ytc/AKedOLTlsg15b-HJ3OmlIDy0xDPanZzTLOmDpbzXLCzn=s900-c-k-c0x00ffffff-no-rj",
        title1: "STAR WARS",
        title2: "História:",
        description: 'A série teve início com o simples título Star Wars, escrito e dirigido por George Lucas, lançado em 25 de maio de 1977. Na época da sua estreia se tornou a maior bilheteria de todos os tempos, arrecadando US$ 775 398 007 milhões de dólares e ganhando sete prêmios no Óscar. A 20th Century Fox desacreditando um filme que ambientado no espaço, permitiu que George Lucas tivesse todos os direitos do filme. O sucesso garantiu a ele dinheiro suficiente para abrir sua própria empresa cinematográfica: a Lucasfilm e, o filme foi transformado em uma franquia e série, ganhando produtos derivados.',

        links: [
            {name: "Facebook ", url: "https://www.facebook.com/StarWars.br/"},
            {name: "Twitter", url: "https://twitter.com/starwars"},
            {name: "Instagram", url: "https://www.instagram.com/starwars/"}
        ]
    }

    return res.render("home", {home: home})
})


server.get("/programacao",function(req, res){
    return res.render("programacao", {items: videos})
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if(!video){
        res.send("PÁGINA NÃO ENCONTRADA")
    }
    /*filtrando array de videos*/

    return res.render("video", {item: video})
})

server.listen(5000, function(){
	console.log("server is running")
})