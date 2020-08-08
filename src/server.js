// Servidor
const app = require('express')
const server = app()

const {
  pageLanding, pageStudy, pageGiveClasses
} = require('./pages')

// Configurando nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true, /* cache é guardar em memória os arquivos */
})

// Início e configuração do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(app.static("public"))
// Rotas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
// start do servidor
.listen(5500); 