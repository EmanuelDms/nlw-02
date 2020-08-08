const database = require('./db')
const createProffy = require('./createProffy')


database.then((db) =>{
  // =========== CRUD ===========
  // Inserir Dados (CREATE) [Virão através do front-end (formulário)]
  proffyValue = {
    name: "Emanuel Maia", 
    avatar:  "./images/user1.jpeg", 
    whatsapp: "84979250080", 
    bio: "Entusiasta das melhores tecnologias de Front-end.<br><br>Apaixonado por construir coisas coloridas através textos coloridos que nem todo mundo entende =P. Ensina sobre os conceitos de CSS Flex, CSS Grid e Layouts de Páginas Web.", 
  }

  classValue = {
    subject: "Desenvolvedor Web: Front-end", 
    cost: "20", 
    // o proffy id virá pelo banco de dados
  }

  classScheduleValue = [
    // class_id virá pelo banco de dados, após cadastrarmos a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  // createProffy(db, {proffyValue, classValue, classScheduleValue})

  // Consultar dados inseridos (READ)

})