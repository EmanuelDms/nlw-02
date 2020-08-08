module.exports = async function(db , {proffyValue, classValue, classScheduleValues}){
  // ==== inserir dados na table de proffys ====
  /* 
  * Cada inserção de dados demora um tempo para ser executada, logo, usa-se o then;
  * Await: aguarda antes de executar a próxima linha, substituindo then;
  * entretato, necessita do async antes da função que a engloba*/
  const insertedProffy = await db.run(`
    INSERT INTO proffys (
      name, 
      avatar, 
      whatsapp, 
      bio
    ) VALUES (
      "${proffyValue.name}",
      "${proffyValue.avatar}",
      "${proffyValue.whatsapp}",
      "${proffyValue.bio}"
    );
  `)

  const proffy_id = insertedProffy.lastID

  // Inserir dados na tabela classes
  const insertedClass = await db.run(`
      INSERT INTO classes (
        subject, 
        cost, 
        proffy_id
      ) VALUES (
        "${classValue.subject}", 
        "${classValue.cost}",
        "${proffy_id}"
      );
  `)

  const class_id = insertedClass.lastID

  // Inserir dados na tabela class_schedule
  const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) =>{
    return db.run(`
      INSERT INTO class_schedule (
        class_id,
        weekday,
        time_from,
        time_to       
      ) VALUES (
        "${class_id}",
        "${classScheduleValue.weekday}",
        "${classScheduleValue.time_from}",
        "${classScheduleValue.time_to}"
      );
    `)
  })

  // aqui vou executar todos os db.run() das class_schedules
  await Promise.all(insertedAllClassScheduleValues)
}