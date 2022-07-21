const ingredients = [
   'Potatoes',
   'Mushrooms',
   'Garlic',
   'Tomatos',
   'Herbs',
   'Condiments',
];



const ingredientList = document.querySelector('#ingredients');


// console.log(ingredientList);

const liElements = ingredients.map((ingredient) => {
   const liElement = document.createElement('li');
   liElement.textContent = ingredient;
   liElement.classList.add('item');
   return liElement;
})

// console.log(liElements);


ingredientList.append(...liElements);