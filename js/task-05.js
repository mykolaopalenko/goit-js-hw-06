
const fieldInput = document.querySelector('#name-input' );

const nameSpan = document.querySelector('#name-output');


function newInput(i) {

    nameSpan.textContent = i.currentTarget.value;

    if (i.currentTarget.value.length === 0) {
        nameSpan.textContent = 'Anonymous'
    }
}




fieldInput.addEventListener('input', newInput);




