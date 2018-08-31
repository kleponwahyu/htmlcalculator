var x, y, check = false, operasi;		//Declaring variable

function koma(){		//Declaring a coma function, will add this later for sure...
	
}
function satu(){		//Declaring a function for '1' button. Satu means one
	document.getElementById('hasil').innerHTML = "1";
	if(check){		//Using if else and check variable because we need to know whether we fill the x variable or the y variable
		y = 1.0;
	} else{
		x = 1.0;
	}
}
function dua(){		//Declaring a function for '2' button. Dua means two
	document.getElementById('hasil').innerHTML = "2";
	if(check){
		y = 2.0;
	} else{
		x = 2.0;
	}
}
function tiga(){		//Declaring a function for '3' button. Tiga means three
	document.getElementById('hasil').innerHTML = "3";
	if(check){
		y = 3.0;
	} else{
		x = 3.0;
	}
}
function empat(){		//Declaring a function for '4' button. Empat means four
	document.getElementById('hasil').innerHTML = "4";
	if(check){
		y = 4.0;
	} else{
		x = 4.0;
	}
}
function lima(){		//Declaring a function for '5' button. Lima menas five
	document.getElementById('hasil').innerHTML = "5";
	if(check){
		y = 5.0;
	} else{
		x = 5.0;
	}
}
function enam(){		//Declaring a function for '6' button. Enam means six
	document.getElementById('hasil').innerHTML = "6";
	if(check){
		y = 6.0;
	} else{
		x = 6.0;
	}
}
function tujuh(){		//Declaring a function for '7' button. Tujuh means seven
	document.getElementById('hasil').innerHTML = "7";
	if(check){
		y = 7.0;
	} else{
		x = 7.0;
	}
}
function delapan(){		//Declaring a function for '8' button. Delapan means eight
	document.getElementById('hasil').innerHTML = "8";
	if(check){
		y = 8.0;
	} else{
		x = 8.0;
	}
}
function sembilan(){		//Declaring a function for '9' button. sembilan means nine
	document.getElementById('hasil').innerHTML = "9";
	if(check){
		y = 9.0;
	} else{
		x = 9.0;
	}
}
function nol(){		//Declaring a function for '0' button. Nol means zero
	document.getElementById('hasil').innerHTML = "0";
	if(check){
		y = 0.0;
	} else{
		x = 0.0;
	}
}

function tambah(){		//Declaring a function for addition button
	check = true;
	document.getElementById('hasil').innerHTML = "+";
	operasi = 0;
}
function kurang(){		//Declaring a function for subtraction button
	check = true;
	document.getElementById('hasil').innerHTML = "-";
	operasi = 1;
}
function kali(){		//Declaring a function for multiplication button
	check = true;
	document.getElementById('hasil').innerHTML = "x";
	operasi = 2;
}
function bagi(){		//Declaring a function for division button
	check = true;
	document.getElementById('hasil').innerHTML = ":";
	operasi = 3;
}
function reset(){		//Declaring a function for resetting x and y variable
	document.getElementById('hasil').innerHTML = "0";
	x = y = 0.0;
}
function hasil(){		//Declaring a function for the final operation
	switch(operasi){
		case 0:
		operasi = x + y;
		document.getElementById('hasil').innerHTML = operasi;
		check = false;
		break;
		case 1:
		operasi = x - y;
		document.getElementById('hasil').innerHTML = operasi;
		check = false;
		break;
		case 2:
		operasi = x * y;
		document.getElementById('hasil').innerHTML = operasi;
		check = false;
		break;
		case 3:
		operasi = x / y;
		document.getElementById('hasil').innerHTML = operasi;
		check = false;
		break;
	}
}