
// This code updates total cart quantity product//

var count1 = 0;
function myFunction() {
  var x = document.getElementById("tony").selectedIndex;
   var y = document.getElementsByTagName("option")[x].value;
	count1 = parseInt(y) +count1;
	
	document.getElementById("cartquantity").innerHTML = count1;
	alert ("Added"+" "+ y + " " + "buns to cart!");
}

// This code updates total cost on product//
var count2 = 0.00;
function myFunction2() {
  var k = document.getElementById("tony").selectedIndex;
   var z = document.getElementsByTagName("option")[k].value;
	count2 = ((0.25)*parseInt(z))
	
	document.getElementById("totalCost").innerHTML = "Total:" +" "+ "$"+  count2;
}

//var button = document.getElementById("clickme"),
  //count = 0;
//button.onclick = function() {
  //count += 1;
  //button.innerHTML = "Click me: " + count;
//};



