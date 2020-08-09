const database = require('./db')
const createProffy = require('./createProffy')


database.then(async (db) => {
  // =========== CRUD ===========
  // Inserir Dados (CREATE) [Virão através do front-end (formulário)]
  proffyValue = {
    name: "Emanuel Maia",
    avatar: "https://avatars2.githubusercontent.com/u/61608503?s=460&u=d68ccb01f39f2a2b7aa19381b71b0d3f305406f4&v=4",
    whatsapp: "84979250080",
    bio: "Entusiasta das melhores tecnologias de Front-end.<br><br>Apaixonado por construir coisas coloridas através textos coloridos que nem todo mundo entende =P. Ensina sobre os conceitos de CSS Flex, CSS Grid e Layouts de Páginas Web.",
  }

  classValue = {
    subject: "Desenvolvedor Web: Front-end",
    cost: "20",
    // o proffy id virá pelo banco de dados
  }

  classScheduleValues = [
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

  await createProffy(db, {proffyValue, classValue, classScheduleValues})

  // db.all() => o metódo (propriedade) all traz todos os dados baseados em uma determinada query a qual o db é submetido
  // Consultar dados inseridos (READ)
  // todos os proffs
  const selectedProffys = await db.all("SELECT * FROM proffys");
  // console.log(selectedProffys)

  // consultar as classes de um determinado professor
  // e trazer junto os dados do respectivo professor
  const selectClassesAndProffys = await db.all(`
      SELECT 
        classes.*, proffys.* 
      FROM 
        proffys
      JOIN
        classes
      ON
        classes.proffy_id = proffys.id
      WHERE
        classes.proffy_id = 1;
    `)
  // console.log(selectClassesAndProffys)

  // o horário da time_from precisa ser antes ou igual ao horário solicitado, pois o horário dele começa a partir de um momento
  // o time_to precisa ser acima
  const selectClassesSchedules = await db.all(`
      SELECT 
        class_schedule.*
      FROM
        class_schedule
      WHERE
        class_schedule.class_id = "1"
      AND
        class_schedule.weekday = "0"
      AND
        class_schedule.time_from <= "1300"
      AND
        class_schedule.time_to > "1300"
    `)
  // console.log(selectClassesSchedules)
})
