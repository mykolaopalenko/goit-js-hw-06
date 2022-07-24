
const fieldInput = document.querySelector('#name-input');

const nameSpan = document.querySelector('#name-output');


function newInput(event) {

   nameSpan.textContent = event.currentTarget.value;

   if (event.currentTarget.value.length === 0) {
      nameSpan.textContent = 'Anonymous'
   }
}




fieldInput.addEventListener('input', newInput);




