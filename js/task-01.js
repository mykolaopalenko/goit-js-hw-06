

// declare a category

const arrCategory = document.querySelectorAll(".item");


// Number of categories

console.log(`Number of categories: ${arrCategory.length}`);


// function to output the title and number of items

arrCategory.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
