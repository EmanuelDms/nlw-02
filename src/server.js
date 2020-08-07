require('express')()
.get('/', (request, response)=>{
  return response.send('Hi from NLW')
})
.get('/study', (request, response) =>{
  return response.send('Página Study')
})
.listen(5500);

