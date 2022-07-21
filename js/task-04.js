
const decrem = document.querySelector("button[data-action='decrement']");

const increm = document.querySelector("button[data-action='increment']");

const dynamicValue = document.querySelector("#value");

let counterValue = 0;



const counterDecrem = () => {
   counterValue -=1;
   dynamicValue.textContent = counterValue;
}

// console.log(counterDecrem);


const counterIncrem = () => {
   counterValue +=1;
   dynamicValue.textContent = counterValue;
}

// console.log(counterIncrem);


decrem.addEventListener('click', counterDecrem);

increm.addEventListener('click', counterIncrem);