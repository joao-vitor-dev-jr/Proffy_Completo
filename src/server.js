//servidor com express
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess} = require('./pages')


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


//config de paginas staticas (css, scripts, imagens)
server
//recebr os dados pelo req.body
.use(express.urlencoded({extended: true}))
.use(express.static("public"))
//rotas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/success", pageSuccess)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

.listen(5500)