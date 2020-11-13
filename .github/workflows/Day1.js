




//Power Calculator
function circuitPower(voltage, current){
	return voltage*current
}
// console.log(circuitPower(230, 10))



//Return First Element From Arry
var list=[1,2,3]
function getFirstValue(arr){
		return arr[0]
}
// console.log(getFirstValue(list))




//Return the Remainder from Two Numbers
function remainder(x, y){
	return x%y
}
// console.log(remainder(17, 3))




//Hours to Second converter
function howManySeconds(hours){
	return 60*60*hours
}
// console.log(howManySeconds(10))




//Area of a Triangle
function triArea(base, height){
	return (base*height)/2
}
// console.log(triArea(7,4))



//Return the Next Number from the Integer Passed
function addition(num){
	return num+1
}
// console.log(addition(-3))



//Less Than 100 - Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b){
	return a+b<100
}
// console.log(lessThan100(70, 45))



//Convert Minutes into Seconds 
function convert(minutes){
	return minutes*60
}
// console.log(convert(5))



//convert age to days 
function calcAge(age){
	return age*365
}
// console.log(calcAge(21))


//Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
		var a=num
		if(a<0){
			return true
		}else if(a==0) {
			return true
		}else {
			return false
		}
		return a 

}
// console.log(lessThanOrEqualToZero(-2))



//Pair Management-Given two arguments, return an array which contains these two arguments.
function makePair(num1, num2){
	return [num1, num2]
}
// console.log(makePair(20, 21))



function findPerimeter(length, width) {
		var sum=length+width
		var perimeter=sum*2
		return perimeter
		return sum
}
// console.log(findPerimeter(20,10))


//The Farm Problem - In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species: 
//		chickens = 2 legs
// 		cows = 4 legs
// 		pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals

function animals(chickens, cows, pigs) {
		var chickensLegs=chickens*2;
		var cowsLegs=cows*4;
		var pigsLegs=pigs*4
		var totalLegs=chickensLegs+cowsLegs+pigsLegs
		return "Total Legs"+ totalLegs


}
// console.log(animals(2, 3, 5))



//Are the Numbers Equal?
function isSameNum (a, b){
	if(a===b){
		return true
	}else {
		return false 
	}
}

console.log(isSameNum(2, 33))
