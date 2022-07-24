const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');


btnRef.addEventListener('click', (event) => {
   const color = getRandomHexColor();
   document.body.style.backgroundColor = `${color}`;
   spanRef.textContent = `${color}`;
});


function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
