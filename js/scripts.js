function getTypes() {
  var types = document.getElementById("types").value;
  return parseInt(types);
}
function getSize() {
  var size = document.getElementById("size").value;
  return parseInt(size);
}
function getCrust() {
  var crust = document.getElementById("crust").value;
  return parseInt(crust);
}
function getTopping() {
  var topping = document.getElementById("topping").value;
  return parseInt(topping);
}
function getNumber() {
  var number = document.getElementById("number").value;
  return parseInt(number);
}

function getPizza() {
  var calculate = (getTypes() + getSize() + getCrust() + getTopping()) * getNumber()
  if (confirm (getNumber() + " pizzas is what you need" + " and the price will be Kshs." + calculate + "."+ " Would you like a delivery?")){
      prompt("Enter your location")
  }
   else{
      return;
  }
  alert("Your pizza will be delivered in an hour, and you'll pay 100ksh as transportation fee");
}