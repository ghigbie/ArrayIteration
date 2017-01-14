//this file was created in the terminal
//for each loop   arr.forEach(someFucntion)

var colors = ["red", "orange", "yellow", "green", "blue"];

colors.forEach(function(item){  //can be annonymous function
	console.log(`My favorite color is ${item}`);      //item is a place holder, call it whatever you want
});  //item holds the value for whatever is in the array

for(var a = 0; a < colors.length; a++){
	console.log(colors[a]);
}

function printColor(color){
	console.log("///////////");
	console.log(color);
	console.lgo("///////////");
}

colors.forEach(printColor);

