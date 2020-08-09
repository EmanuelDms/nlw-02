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

getSubject = (subjectNumber) => {
  const position = +subjectNumber - 1
  return subjects[position]
}

convertHoursToMinutes = (time) => {
  const [hour, minutes] = time.split(':')
  return Number((hour * 60) + minutes)
}



module.exports = {
  subjects, daysWeek, getSubject, convertHoursToMinutes
}