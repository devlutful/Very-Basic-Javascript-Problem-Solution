//100Days of code-Day 6 - 
//Auhtor-  Lutful







//Error Messages-Using Arrow Funtion
//Solution
error=(n)=>{
	if(n===1){
		return "Check the fan"
	}else if(n===2){
		return "Emergency stop"
	}else if(n===3){
		return "Pump Error"
	}else if(n===4){
		return "c"
	}else if(n===5){
		return "Temperature Sensor Error"
	}else {
		return 101
	}
}
// console.log(error(0))





//Is the String Odd or Even?- Given a string, return true if its length is even or false if the length is odd.

//Solution
oddOrEven=(s)=>{
	if(s.length%2===0){
		return true + " " + "Number Is: " + s.length
	}else {
		return false
	}
}
// console.log(oddOrEven("pears"))




//Return the Last Element in an Array-Create a function that accepts an array and returns the last item in the array.

//Solution
getLastItem=(arr)=>{
	var a= arr.slice(-1);
	return a[0]
}
// console.log(getLastItem([2,45,6,7,8,45,65]))






// //Drinks Allowed?- A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

//Solution
shouldServeDrinks=(age, onBreak)=>{
	if(age>=18 && onBreak==false){
		return true
	}else {
		return false
	}
}
// console.log(shouldServeDrinks(18, false))






//Triangle and Parallelogram Area Finder -Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.

//Solution
areaShape=(base, height, shape)=>{
	if(shape==="triangle"){
		return 0.5*base*height
	}else if(shape==="parallelogram"){
		return base*height
	}else {
		return " Unknow Shape We accepts only tringle and parallelogram"
	}
}
// console.log(areaShape(2.9, 1.3, "parallelogram"))
