/* 
1. Procura o campo
2. Seleciona o campo através de um clique
3. Executa uma ação: duplicar o campo
4. Imprime na tela
*/

cloneField = () =>{
  // Clona o schedule item
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
  
  // Captura todos os campos já inseridos
  const fields = newFieldContainer.querySelectorAll('input');

  // para cada campo, limpar
    // pegar o field atual e limpa
  fields.forEach((field) => field.value = "")

  // Aplica clonagem na no fieldset schedule items
  let fieldset = document.querySelector('#schedule-items');
  fieldset.appendChild(newFieldContainer);
}

document.querySelector('#add-time').addEventListener('click', cloneField);

// ==================== tirar horário ====================
/* removeField = () =>{
} */
// =======================================================