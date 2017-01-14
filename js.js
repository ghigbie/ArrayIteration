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
	console.log("///////////");
}

colors.forEach(printColor);

var count = 0;

while(count < colors.length){
	console.log(colors[count]);
	count++;
}

var numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(function(item){
	if(item%3 === 0){
		console.log(item);
	}
});

console.log("/////////////");

for(var b = 0; b < numbers.length; b++){
	if(numbers[b] % 3 ===0 ){
	console.log(numbers[b]);
	}
}