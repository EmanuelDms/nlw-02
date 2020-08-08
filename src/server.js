// Dados
/* Array que contém os conteúdos dos dados */
const proffys = [
  {
    name: "Emanuel Maia", 
    avatar:  "./images/user1.jpeg", 
    whatsapp: "84979250080", 
    bio: "Entusiasta das melhores tecnologias de Front-end.<br><br>Apaixonado por construir coisas coloridas através textos coloridos que nem todo mundo entende =P. Ensina sobre os conceitos de CSS Flex, CSS Grid e Layouts de Páginas Web.", 
    subject: "Desenvolvedor Web: Front-end", 
    cost: "20", 
    weekday: [0], 
    time_from: [70], 
    time_to: [1220]
  },
  {
    name: "Moisés Duarte", 
    avatar:  "https://avatars3.githubusercontent.com/u/61030658?s=400&u=b6748a48ee9eee10fbb9bf0afb99eeec5b535ed7&v=4", 
    whatsapp: "13963161932", 
    bio: "Entusiasta das melhores tecnologias de back-end.<br><br>Descomplicando o complicado! Ensina o uso de requisições assíncronas, manipulação de banco de dados e de lógicas por trás da página, utilizando PHP e JavaScript.", 
    subject: "Desenvolvedor Web: Back-end", 
    cost: "30", 
    weekday: [1], 
    time_from: [70], 
    time_to: [1220]
  },
  {
    name: "Yan Rabelo", 
    avatar:  "https://avatars0.githubusercontent.com/u/63311216?s=400&u=b9e2a0b8ba1222dd51da8a1d10aa2657bd6f3600&v=4", 
    whatsapp: "13963161932", 
    bio: "Entusiasta das melhores tecnologias de back-end.<br><br>Descomplicando o complicado! Ensina o uso de requisições assíncronas, manipulação de banco de dados e de lógicas por trás da página, utilizando PHP e JavaScript.", 
    subject: "Desenvolvedor Web: Back-end", 
    cost: "30", 
    weekday: [1], 
    time_from: [70], 
    time_to: [1220]
  }
]

const daysWeek = [
  'Domingo', 
  'Segunda-feira',
  'Terça-feira', 
  'Quarta-feira', 
  'Quinta-feira', 
  'Sexta-feira', 
  'Sábado'
]

const subjects = [
  'Artes', 
  'Biologia', 
  'Ciências', 
  'Educação Física', 
  'Física', 
  'Geografia', 
  'História', 
  'Matemática', 
  'Português', 
  'Química'
]

getSubject = (subjectNumber) =>{
  const position = +subjectNumber - 1
  return subjects[position]
}

// Funcionalidades (rotas)
pageLanding = (request, response) =>{
  return response.render("index.html");
}

pageStudy = (request, response) =>{
  const filters = request.query
  return response.render("study.html", { proffys, filters, subjects, daysWeek });
}

pageGiveClasses = (request,response) =>{
  const data = request.query

  const isEmpty = Object.keys(data).length !== 0

  // Essa verificação é para caso o usuário enviar os data via URL
  // se tiver data puxe para o objeto proffys
  if (isEmpty) {
    
    data.subject = getSubject(data.subject)
    // adicionar data ao lista de proffys
    proffys.push(data)
    return response.redirect("/study")
  } // se não tiver dados faça nada
  
  return response.render("give-classes.html", {subjects, daysWeek})
}

// Servidor
const app = require('express')
const server = app()

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