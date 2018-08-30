var x, y, check = false, operasi;

function koma(){
	
}
function satu(){
	document.getElementById('hasil').innerHTML = "1";
	if(check){
		y = 1.0;
	} else{
		x = 1.0;
	}
}
function dua(){
	document.getElementById('hasil').innerHTML = "2";
	if(check){
		y = 2.0;
	} else{
		x = 2.0;
	}
}
function tiga(){
	document.getElementById('hasil').innerHTML = "3";
	if(check){
		y = 3.0;
	} else{
		x = 3.0;
	}
}
function empat(){
	document.getElementById('hasil').innerHTML = "4";
	if(check){
		y = 4.0;
	} else{
		x = 4.0;
	}
}
function lima(){
	document.getElementById('hasil').innerHTML = "5";
	if(check){
		y = 5.0;
	} else{
		x = 5.0;
	}
}
function enam(){
	document.getElementById('hasil').innerHTML = "6";
	if(check){
		y = 6.0;
	} else{
		x = 6.0;
	}
}
function tujuh(){
	document.getElementById('hasil').innerHTML = "7";
	if(check){
		y = 7.0;
	} else{
		x = 7.0;
	}
}
function delapan(){
	document.getElementById('hasil').innerHTML = "8";
	if(check){
		y = 8.0;
	} else{
		x = 8.0;
	}
}
function sembilan(){
	document.getElementById('hasil').innerHTML = "9";
	if(check){
		y = 9.0;
	} else{
		x = 9.0;
	}
}
function nol(){
	document.getElementById('hasil').innerHTML = "0";
	if(check){
		y = 0.0;
	} else{
		x = 0.0;
	}
}

function tambah(){
	check = true;
	document.getElementById('hasil').innerHTML = "+";
	operasi = 0;
}
function kurang(){
	check = true;
	document.getElementById('hasil').innerHTML = "-";
	operasi = 1;
}
function kali(){
	check = true;
	document.getElementById('hasil').innerHTML = "x";
	operasi = 2;
}
function bagi(){
	check = true;
	document.getElementById('hasil').innerHTML = ":";
	operasi = 3;
}
function reset(){
	document.getElementById('hasil').innerHTML = "0";
	x = y = 0.0;
}
function hasil(){
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