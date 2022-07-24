const myInput = document.querySelector("#validation-input");
myInput.addEventListener("blur", onBlur);


function onBlur(event) {

   const inp = event.currentTarget;

   const inputLength = Number(inp.dataset.length);


   if (inp.value.length === inputLength) {
      inp.classList.remove("invalid");
      inp.classList.add("valid");
   } else {
      inp.classList.remove("valid");
      inp.classList.add("invalid");
   }

};