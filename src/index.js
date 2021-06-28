import validator from "./validator.js";

console.log(validator);

console.log(document.getElementById("numberTc").value);

document.getElementById("botonalerta").addEventListener("click", () => {
  if (document.getElementById("numberTc").value !== "") {
    validator.isValid(document.getElementById("numberTc").value);
    validator.maskify(document.getElementById("numberTc").value);
  } else {
    alert("No has ingresado valor.. ");
  }
});

document.getElementById("formTc").addEventListener("click", function (event) {
  event.preventDefault();
});
