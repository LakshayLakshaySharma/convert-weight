let weight = document.getElementById("weight");
let pound = document.getElementById("pound");

weight.addEventListener("click", function(){
  let input = document.getElementById("input").value;
  document.getElementById("output").value = input / 2.2046 + " Kilogram";
});

pound.addEventListener("click", function(){
  let input = document.getElementById("input").value;
  document.getElementById("output").value = input * 2.2046 + " Pound";
});

function clearInput(){
  let input = document.getElementById("input").value = "";
  let output = document.getElementById("output").value = "";
}