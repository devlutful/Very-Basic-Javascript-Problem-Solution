//100Days of code-Day 6 - 
//Auhtor-  Lutful


//Add up the Numbers from a Single Number -Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

//Solution
function addUp(num) {
	var total=0
	for(var i=1; i<=num; i++){
		total+=i
	}
	return total
}
// console.log(addUp(600))



//Which Function Returns the Larger Number?

//Solution
function whichIsLarger(f, g) {
	if(f()<g()){
		return "g"
	}else if(f()===g()){
		return "neither"
	}else if(f()>g()) {
		return "f"
	}
}
// console.log(whichIsLarger(() => 25, () => 5))



//Inches to Feet
//Solution
function inchesToFeet(inches) {
	if(inches>=12){
		return inches/12
	}else {
		return 0
	}
}
// console.log(inchesToFeet(12))