// function pizza(size, crust) {
//     this.size = size;
//     this.crust = crust;
//     this.toppings = [];
//   }
//   var sizePrices = {
//     small: 600,
//     medium: 800,
//     large: 1200
//   };
//   var toppingPrices = [
//     {
//       mushroom: {
//         small: 250,
//         medium: 400,
//         large: 750
//       },
//       beef: {
//         small: 100,
//         medium: 150,
//         large: 175
//       },
//       chicken: {
//         small: 150,
//         medium: 175,
//         large: 200
//       }
//     }
//   ];
  
//   var crustPrice = {
//     thincrust: 500,
//     thickcrust: 300,
//     flatbread: 100,
//     custom:50,
//   };
//   function calcSizePrices(size) {
//     if (size === "small") {
//       return sizePrice.small * 1;
//     } else if (size === "medium") {
//       return sizePrice.medium * 1;
//     } else {
//       return sizePrice.large * 1;
//     }
//   }
//   function calcCrustPrices(crust) {
//     if (crust === "crispy") {
//       return crustPrice.crispy * 1;
//     } else if (crust === "stuffed") {
//       return crustPrice.stuffed * 1;
//     } else {
//       return crustPrice.gluten * 1;
//     }
//   }
  
//   function calcToppingsPrices(toppings) {
//     var noOfTopping = 0;
//     for (i = 0; i < toppings.length; i++) {
//       if (toppings[i] == "mushroom") {
//         noOfTopping += 100;
//       }
//       if (toppings[i] == "beef") {
//         noOfTopping += 50;
//       }
//       if (toppings[i] == "chicken") {
//         noOfTopping += 75;
//       }
//     }
//     return noOfTopping * 1;
//   }
  
  
//   function checkPepperoni(topping) {
//     return topping === "mushroom";
//   }
  

//   $("document").ready(function() {
    
//     function getPizzaSize() {
//       return $("#sizes")
//         .find(":selected")
//         .val();
//     }
    
//     function getCrust() {
//       return $("#crusts")
//         .find(":selected")
//         .val();
//     }
    
//     function getToppings() {
//       var toppingList = [];
//       $("#toppings :checked").each(function() {
//         toppingList.push($(this).val());
//       });
//       return toppingList;
//     }
//     $("form#myform").submit(function(event) {
//       event.preventDefault();
//       var pizzaSize = getPizzaSize();
//       var crust = getCrust();
//       var toppingList = getToppings();

//       var newPizza = new Pizza(pizzaSize, crust);
//       newPizza.toppings.push(toppingList);
//       $("#cart").hide();
//       $("#ordered-options").show();
//       $("#checkout").show();
//       var oneOrder =
//         sizeCalcPrice(pizzaSize) +
//         crustCalcPrice(crust) +
//         toppingsCalcPrice(toppingList);

//         $("#items").append(
//           "<tr>" +
//             "<td>" +
//             newPizza.size +
//             "</td>" +
//             "<td>" +
//             "<p>" +
//             newPizza.crust +
//             "</p>" +
//             "</td>" +
//             "<td>" +
//             newPizza.toppings +
//             "</td>" +
//             "<td>" +
//             oneOrder +
//             "</td>" +
//             "</tr>"
//         );
//       });
//       var totalQuantity = parseInt($("#quantity").val());
//       function calcTotal() {
//         var priceOnePizza =
//         calcSizePrices(getPizzaSize()) +
//         calcCrustPrices(getCrust()) +
//         calcToppingsPrices(getToppings());
//         return priceOnePizza;
//       }
//       var pizzaList = [];
      
//       $("#order-button").on("click", function() {
//         totalQuantity += 1;
//         $("#quantity").text(totalQuantity);
//         pizzaList.push(calcTotal());
//       });

//       $("#gettotal").click(function() {
//         var total = 0;
//         pizzaList.forEach(function(pizza) {
//           total += pizza;
//         });
//         $("#money").text(total);
//       });
//       $("#myModel").click(function() {
//         var deliver = confirm(
//           "Would you like us deliver your pizza to your doorstep? transport cost ksh 150."
//         );
//         if (deliver) {
//           var place = prompt("Enter your location");
//           $("#place").text(place);
//           $("#success").show();
//         } else {
//           $("#no-delivery").show();
//         }
        
//         $("#pizza-size").val("");
//         $("#pizza-crust").val("");
//         $("#items").remove();
//         $("#quantity").text(0);
//       });
//     });
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