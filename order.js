//Here we create variables for welcom message
var greeting = "Howdy ";
var name = " Teri";
var message = ", Please check your order: "; 

//Now we will concatenate the three variables in order to display the required greeting message
var welcome = greeting + name + message;

//now we create the variable to hold the sign
var sign = "Montague House";
var tiles = sign.length ;
var subTotal = tiles * 25;
var shipping = 55;
var grandTotal = subTotal + shipping;

//Now, we will add the above details into out HTML, bt retrieving the first element - the greeting.
var el= document.getElementById('greeting');
    //replacing the content of the element with the personalized welcome message on lines 2-5.
el.textContent = welcome;

    //get the id witht he element of sign and update it with the above details on lines 10-14
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

    //now update teh contents for the tiles.
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

    //attain the subtotal
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = "R" + "" + subTotal;

    //now, update the shipping price
var elShipping = document.getElementById('shipping');
elShipping.textContent = "R" + "" + shipping;

    //ending it off with the overall grand total
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = "R" + "" + grandTotal;




