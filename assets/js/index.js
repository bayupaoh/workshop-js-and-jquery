var x = "hello";
var y = 1;

console.log(x);

//document.write(x);

console.log(y);

console.log(y + x);

var nama = "zebua";

console.log(`hello ${nama}`)

var obj = {
	nama : "Bayu",
	kota :"Bandung"
}

var arrray = [1,2,3]

var nama = function(){
	return "zebua";
}

console.log(nama());

for (var i = 0 ; i <= 10; i++) {
	if(i % 2 == 1){
		console.log(i);
	}
}

//cara 1
document.querySelectorAll("button")[0].onclick = function() {
	window.alert("hai");
}

//cara 2
function myAlert(){
	window.alert("hai");

}

//cara 1
document.querySelectorAll("button")[0].addEventListener("click" = function() {
	window.alert("hai");
}}
