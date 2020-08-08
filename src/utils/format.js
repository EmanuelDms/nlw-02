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

const daysWeek = [
  'Domingo', 
  'Segunda-feira',
  'Terça-feira', 
  'Quarta-feira', 
  'Quinta-feira', 
  'Sexta-feira', 
  'Sábado'
]

getSubject = (subjectNumber) =>{
  const position = +subjectNumber - 1
  return subjects[position]
}

module.exports = {
  subjects, daysWeek, getSubject
}