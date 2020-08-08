const { subject, daysWeek, getSubject } = require('./utils/format')

// Rotas
pageLanding = (request, response) =>{
  return response.render("index.html");
}

pageStudy = (request, response) =>{
  const filters = request.query
  return response.render("study.html", { proffys, filters, subjects, daysWeek });
}

pageGiveClasses = (request,response) =>{
  const data = request.query

  const isEmpty = Object.keys(data).length > 0

  // Essa verificação é para caso o usuário enviar os data via URL
  // se tiver data puxe para o objeto proffys
  if (isEmpty) {
    
    data.subject = getSubject(data.subject)
    // adicionar data ao lista de proffys
    proffys.push(data)
    return response.redirect("/study")
  } 
  // se não tiver dados faça nada
  
  return response.render("give-classes.html", {subjects, daysWeek})
}

module.exports = {
  pageLanding, pageStudy, pageGiveClasses
}