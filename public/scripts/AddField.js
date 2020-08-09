/* 
1. Procura o campo
2. Seleciona o campo através de um clique
3. Executa uma ação: duplicar o campo
4. Imprime na tela
*/

// Contagem de quantos schedule items possui no fieldset
const recentlyField = document.getElementsByClassName('schedule-item');
let length = recentlyField.length;

// Cria botão que tira schedule-item

cloneField = () =>{
  if (length < 2 && !tirarButton) {
    let tirarButtonCondicional = document.createElement('button');
    tirarButtonCondicional.setAttribute('type', 'button');
    tirarButtonCondicional.setAttribute('id', 'remove-time');

    let text = document.createTextNode('- Tirar Horário');
    tirarButtonCondicional.appendChild(text);
    document.querySelector('#schedule-items legend').appendChild(tirarButtonCondicional)
  }
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
removeField = () =>{
  if (length == 2) {
    document.querySelector('#schedule-items legend').removeChild(tirarButton)
  }
  let fieldset = document.querySelector('#schedule-items');
  fieldset.removeChild(recentlyField[length-1]);
}

let tirarButton = document.querySelector('#remove-time');
tirarButton.addEventListener('click', removeField);

// =======================================================