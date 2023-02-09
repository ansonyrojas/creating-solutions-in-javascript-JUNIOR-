

/*solving cofla problem in javascript*/

moneyCofla = prompt(" How much money do you have Cofla ? "); 
moneyRoberto = prompt("How much money do you have Roberto ? "); 
moneyPedro = prompt("How much money do you have Pedro? "); 

moneyCofla= parseInt(moneyCofla);

if(moneyCofla >= 0.6 && moneyCofla < 1 ){

	alert("Cofla; Buy the popsicle ice cream");
		alert(" y te sobran " + (moneyCofla -0.6));

}

else if (moneyCofla >= 1 && moneyCofla < 1.6){

	alert("Cofla; Buy the ice cream");
	alert(" y te sobran " + (moneyCofla -1));
}

else if (moneyCofla >= 1.6 && moneyCofla < 1.7){

	alert("Cofla; Buy the Heladix Ice Cream");
	alert(" y te sobran " + (moneyCofla -1.6));
}

else if (moneyCofla >= 1.7 && moneyCofla < 1.8){

	alert("Cofla; Buy ice cream from heladovich");
	alert(" y te sobran " + (moneyCofla -1.7));
}

else if (moneyCofla >= 1.8 && moneyCofla < 2.9){

	alert("Cofla; Buy the Chocolate Covered Ice Cream Sundae");
	alert(" y te sobran " + (moneyCofla -1.8));
}

else if (moneyCofla >= 2.9){

	alert("Cofla; Ice cream with sprinkles or 1/4kg pot");
	alert(" and you have plenty " + (moneyCofla -2.9));


}else {

	alert ("I'm sorry Cofla, it's not enough for any ice cream")
}

/*Robert's purchase*/


if(moneyRoberto >= 0.6 && moneyRoberto < 1 ){

	alert("Roberto;  Buy the popsicle ice cream");


}

else if (moneyRoberto >= 1 && moneyRoberto < 1.6){

	alert("Roberto; Buy the ice cream");
}

else if (moneyRoberto >= 1.6 && moneyRoberto < 1.7){

	alert("Roberto; Buy the Heladix Ice Cream");
}

else if (moneyRoberto >= 1.7 && moneyRoberto < 1.8){

	alert("Roberto; Buy ice cream from heladovich");
}

else if (moneyRoberto >= 1.8 && moneyRoberto < 2.9){

	alert("Roberto; Buy the Chocolate Covered Ice Cream Sundae");
}

else if (moneyRoberto >= 2.9){

	alert("Roberto; Ice cream with sprinkles or 1/4kg pot");


}else {

	alert ("I'm sorry Roberto, it's not enough for any ice cream ")
}


/*Pedro purchase purchase*/

if(moneyPedro >= 0.6 && moneyPedro < 1 ){

	alert("Pedro;  Buy the popsicle ice cream");


}

else if (moneyPedro >= 1 && moneyPedro < 1.6){

	alert("Pedro; Buy the ice cream");
}

else if (moneyPedro >= 1.6 && moneyPedro < 1.7){

	alert("Pedro; Buy the Heladix Ice Cream");
}

else if (moneyPedro >= 1.7 && moneyPedro < 1.8){

	alert("Pedro; Buy ice cream from heladovich");
}

else if (moneyPedro >= 1.8 && moneyPedro < 2.9){

	alert("Pedro; Buy the Chocolate Covered Ice Cream Sundae");
}

else if (moneyPedro >= 2.9){

	alert("Pedro; Ice cream with sprinkles or 1/4kg pot");


}else {

	alert ("I'm sorry Pedro, it's not enough for any ice cream ")
}
