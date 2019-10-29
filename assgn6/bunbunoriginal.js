
// This code updates total cost on product page before customer adds to cart //
var costy = .75
var count2 = 0.00;

function myFunction2() {
  var k = document.getElementById("tony").selectedIndex;
  var z = document.getElementsByTagName("option")[k].value;
  var glazeval = document.getElementById("glaze").selectedIndex;
	//alert ( glazeval);		//debugging 
  if (glazeval != 0 ){
		costy = 1.00
	}
	else{
		costy = 0.75
	}
  count2 = ((costy)*parseInt(z));
  document.getElementById("totalCost").innerHTML = "Total:" +" "+ "$"+  count2;
}



var totalProduct=[]
var carty = sessionStorage.getItem( "cart" ); //gets cart data back
var cart = JSON.parse( carty ); //makes cart data readable 
if (cart != null){ 				//sets cart to be full if not null
	totalProduct=cart;
}
var cost = 0; //sets cost variable as 0

var totalquantit= 0  //checks if there is quantity already in shopping cart
var quanty = sessionStorage.getItem( "totalquantit" ); //gets quantity data back
var quant1 = JSON.parse( quanty ); //makes quantity data readable 
if (quant1 != 0){ 				//sets cart to be full if not null
	totalquantit=quant1;
}

var cartquant= 0;
function drawCartValue(){
		for (var i=0; i< totalProduct.length; i++){
		cartquant = parseInt(totalProduct[i][2]) + cartquant;
		}
		document.getElementById("cartquantity").innerHTML = cartquant; //setting value of words
	cartquant= 0;
}


function addProduct(){
	var pro = document.getElementById("1originalbun").innerHTML
	var quant = document.getElementById("tony").selectedIndex;
	var quantit = document.getElementsByTagName("option")[quant].value;
	var glaze = document.getElementById("glaze").selectedIndex;
	
	if (glaze == 0){
	cost= 0.75;
	}
	else{
	cost = 1.00;
	}
		if (glaze == 0){ 
		glaze = "Non-glazed"; }
	else if (glaze == 1 ){
		glaze = "Sugar + milk";
	}
	else if (glaze == 2 ){
		glaze = "Vanilla + Milk";
	}
	else {
		glaze = "Double choc.";
	}
	cost = cost*quantit;
	var product = [pro,glaze,quantit,cost]; //creating individual product array
	totalProduct.push(product);  //adding it to master list of all products in cart
	var jsonStr = JSON.stringify( totalProduct ); //sending that information to JSON
	sessionStorage.setItem( "cart", jsonStr ); //sets item labeled "cart"
	
	totalquantit = parseInt(quantit) + totalquantit; // getting cart 
	alert ("Added"+" "+ quantit + " " + "buns to cart!"); //alerts user it is added
	var jsonStr2 = JSON.stringify( totalquantit ); //sending that quantity information to JSON
	sessionStorage.setItem( "totalquantit", jsonStr2 ); //sets item labeled "totalquantit"
	//alert(totalProduct)
	drawCartValue();
}
	



var totalquantityCart = 0;
var totalcost=0;
function createCart(){
	//for length of totalProduct darws all the elements 
	for (var i=0; i< totalProduct.length; i++){
	var table = document.getElementById("bunbox");
	var row = table.insertRow(1);
	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
		cell1.classList.add("productimage");
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);	
		
	var img = new Image(); 
		if ( totalProduct[i][0] == " Original Bun Bun GF"){	//checking to see which image will use for product 
			img.src =  'BUN2.png';
		}
		else if (totalProduct[i][0] ==" Walnut Bun Bun"){
			img.src =  'BUN8.png'
		}
		else{
			img.src =  'BUN3.png';
		}
    cell1.appendChild(img); 								//appending product image to cell
	cell2.innerHTML = (totalProduct[i][0]); 				// setting product name
	cell3.innerHTML = (totalProduct[i][1]); 				//setting product glaze name 
	cell4.innerHTML = (totalProduct[i][2]) + " " + "qty"; 	//setting total quantity
	cell5.innerHTML = "$ " + (totalProduct[i][3]);			//setting cost associatedf with product 
	totalcost = totalcost + (totalProduct[i][3]); 		//setting sub total and cost calculations 
	totalquantityCart = totalquantityCart + parseInt(totalProduct[i][2]); //setting cart total
	
	var button = document.createElement("button"); //creating button
	button.classList.add("addtocart"); // naming class of button
	button.setAttribute("id", i);
	button.innerHTML = "Delete";
	var k = 0;
	button.onclick = function(){  //creates button onclick funcrion!
	k = this.id;					//sends the id of the button clicked to delete funcrtion - the id represenrts the index in the product list 
	deletBoi(k);};                //naming the function that we are calling and sending it an index based on i value to delete
	cell6.appendChild(button);
		
	}
var table2 = document.getElementById("bunboxtotal"); // drawing lower table for cart 
	var row2= table2.insertRow(1);
	var cell1a = row2.insertCell(0);
	var cell2a = row2.insertCell(1);
	var cell3a = row2.insertCell(2);
	var cell4a = row2.insertCell(3);
	var cell5a = row2.insertCell(4);
	cell1a.innerHTML = totalquantityCart;
	cell2a.innerHTML = "$ " + totalcost;
	cell3a.innerHTML = "$ " + (totalcost*.08); 
	cell4a.innerHTML = "$ " + ((totalcost*.08)+totalcost);
	var button2 = document.createElement("button"); 		//creates finalize order button
		button2.classList.add("addtocart");
		button2.innerHTML = "Finalize Order!"; 				//button text
	cell5a.appendChild(button2); 							//appends it to proper cell
}
	
function deletBoi(val1){
	
	//alert (totalProduct + "val1 " + val1);
	totalProduct.splice(val1,1); //deletes selecited index from master list 
	//list.splice (x,y);  x is the where we are starting delete, y is how many indexes we are deleting
	var jsonStr = JSON.stringify( totalProduct ); //sending that information to JSON
	sessionStorage.setItem( "cart", jsonStr ); //sets item labeled "cart"
	location.reload();
}
// add index to product list (current spot) call that information and pop it 


// slider code //


var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

