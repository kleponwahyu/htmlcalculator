var x, y, check = false, operation;		//Declaring variable

function coma(){		//Declaring a coma function, will add this later for sure...
	
}
function one(){		//Declaring a function for '1' button.
	document.getElementById('result-box').innerHTML = "1";
	if(check){		//Using if else and check variable because we need to know whether we fill the x variable or the y variable
		y = 1.0;
	} else{
		x = 1.0;
	}
}
function two(){		//Declaring a function for '2' button.
	document.getElementById('result-box').innerHTML = "2";
	if(check){
		y = 2.0;
	} else{
		x = 2.0;
	}
}
function three(){		//Declaring a function for '3' button.
	document.getElementById('result-box').innerHTML = "3";
	if(check){
		y = 3.0;
	} else{
		x = 3.0;
	}
}
function four(){		//Declaring a function for '4' button. 
	document.getElementById('result-box').innerHTML = "4";
	if(check){
		y = 4.0;
	} else{
		x = 4.0;
	}
}
function five(){		//Declaring a function for '5' button.
	document.getElementById('result-box').innerHTML = "5";
	if(check){
		y = 5.0;
	} else{
		x = 5.0;
	}
}
function six(){		//Declaring a function for '6' button.
	document.getElementById('result-box').innerHTML = "6";
	if(check){
		y = 6.0;
	} else{
		x = 6.0;
	}
}
function seven(){		//Declaring a function for '7' button.
	document.getElementById('result-box').innerHTML = "7";
	if(check){
		y = 7.0;
	} else{
		x = 7.0;
	}
}
function eight(){		//Declaring a function for '8' button.
	document.getElementById('result-box').innerHTML = "8";
	if(check){
		y = 8.0;
	} else{
		x = 8.0;
	}
}
function nine(){		//Declaring a function for '9' button.
	document.getElementById('result-box').innerHTML = "9";
	if(check){
		y = 9.0;
	} else{
		x = 9.0;
	}
}
function zero(){		//Declaring a function for '0' button.
	document.getElementById('result-box').innerHTML = "0";
	if(check){
		y = 0.0;
	} else{
		x = 0.0;
	}
}

function plus(){		//Declaring a function for addition button
	check = true;
	document.getElementById('result-box').innerHTML = "+";
	operation = 0;
}
function minus(){		//Declaring a function for subtraction button
	check = true;
	document.getElementById('result-box').innerHTML = "-";
	operation = 1;
}
function multi(){		//Declaring a function for multiplication button
	check = true;
	document.getElementById('result-box').innerHTML = "x";
	operation = 2;
}
function divide(){		//Declaring a function for division button
	check = true;
	document.getElementById('result-box').innerHTML = ":";
	operation = 3;
}
function reset(){		//Declaring a function for resetting x and y variable
	document.getElementById('result-box').innerHTML = "0";
	x = y = 0.0;
}
function result(){		//Declaring a function for the final operation
	switch(operation){
		case 0:
		operasi = x + y;
		document.getElementById('result-box').innerHTML = operasi;
		check = false;
		break;
		case 1:
		operasi = x - y;
		document.getElementById('result-box').innerHTML = operasi;
		check = false;
		break;
		case 2:
		operasi = x * y;
		document.getElementById('result-box').innerHTML = operasi;
		check = false;
		break;
		case 3:
		operasi = x / y;
		document.getElementById('result-box').innerHTML = operasi;
		check = false;
		break;
	}
}