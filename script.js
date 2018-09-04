var x = 0.0, y = 0.0, check = false, operation;	//Declaring variable

function coma(){					//Declaring a coma function, will add this later for sure...
	
}
function inputVariable(temps){		//Declaring a function for inputting x and y variable
	if(check){
		if(y == 0)
			y = temps;
		else {
			y = temps + (y * 10);
		}
		document.getElementById('result-box').innerHTML = y;
	} else{
		if(x == 0)
			x = temps;
		else {
			x = temps + (x * 10);
		}
		document.getElementById('result-box').innerHTML = x;
	}
}
function one(){			//Declaring a function for '1' button.
	inputVariable(1);
}
function two(){			//Declaring a function for '2' button.
	inputVariable(2);
}
function three(){		//Declaring a function for '3' button.
	inputVariable(3);
}
function four(){		//Declaring a function for '4' button. 
	inputVariable(4);
}
function five(){		//Declaring a function for '5' button.
	inputVariable(5);
}
function six(){			//Declaring a function for '6' button.
	inputVariable(6);
}
function seven(){		//Declaring a function for '7' button.
	inputVariable(7);
}
function eight(){		//Declaring a function for '8' button.
	inputVariable(8);
}
function nine(){		//Declaring a function for '9' button.
	inputVariable(9);
}
function zero(){		//Declaring a function for '0' button.
	inputVariable(0);
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
	check = false;
}
function result(){		//Declaring a function for the final operation
	switch(operation){
		case 0:
			x = x + y;
			break;
		case 1:
			x = x - y;
			break;
		case 2:
			x = x * y;
			break;
		case 3:
			x = x / y;		
			break;
	}
	document.getElementById('result-box').innerHTML = x;
	y = 0;
}