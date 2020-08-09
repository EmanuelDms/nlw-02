// Routes
const { pageLanding, pageStudy, pageGiveClasses, saveClass } = require('./pages')

// Servidor
const express = require('express')
const server = express()

// Configurando nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true /* cache é guardar em memória os arquivos */
})

// Início e configuração do servidor
server
// receber os dados do req body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static('public'))

// Rotas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/give-classes', saveClass)

// start do servidor
.listen(5500); 