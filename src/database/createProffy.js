module.exports = async function(db , {proffyValue, classValue, classScheduleValue}){
  // ==== inserir dados na table de proffys ====

  // aguarda antes de executar a próxima linha, substituindo then;
  // entretato, necessita do async antes da função que a engloba
  const insertedProffy = await db.run(`
    INSERT INTO proffys (
      name, avatar, whatsapp, bio
    ) VALUES (
      ${proffyValue.name},
      ${proffyValue.avatar},
      ${proffyValue.whatsapp},
      ${proffyValue.bio}
    );
  `)


  /* Cada inserção de dados demora um tempo para ser executada, logo, usa-se o then*/
}