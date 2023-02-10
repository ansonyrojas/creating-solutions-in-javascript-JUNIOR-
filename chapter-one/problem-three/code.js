const add = (num1,num2) =>{

	return parseInt(num1) + parseInt(num2);
}

const subtract = (num1,num2) =>{

	return parseInt(num1) - parseInt(num2);
}

const split = (num1,num2) =>{

	return parseInt(num1) / parseInt(num2);
}

const multiply = (num1,num2) =>{

	return parseInt(num1) * parseInt(num2);
}


alert("What operation do you want to perform??");

operation = prompt("1: addition, 2: subtraction, 3: division, 4: multiplication"); 


if (operation == 1){

	let number1= prompt("First number to add");
	let number2= prompt("Second number to add");

	result = add(number1,number2);

	alert(`the sum has a result of: ${result}`)
}else if (operation == 2) {

	let number1= prompt("First number to subtract");
	let number2= prompt("Second number to subtract");

	result = subtract(number1,number2);
	alert(`the subtraction carried out has a result of: ${result}`)
}else if (operation == 3) {

	let number1= prompt("First number to split");
	let number2= prompt("Second number to split");

	result = split(number1,number2);

	alert(`The division carried out has a result of: ${result}`)

}else if (operation == 4) {

	let number1= prompt("First number to multiply");
	let number2= prompt("Second number to multiply");

	result = multiply(number1,number2);
	alert(`the multiplication performed has a result of: ${result}`)
}else{

	alert("The operation was not found");
	
}


