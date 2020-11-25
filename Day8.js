//100Days of code-Day 6 - 
//Auhtor-  Lutful


//Divides Evenly
//Solution
dividesEvenly=(a, b)=> {
	if(Number.isInteger(a/b)){
		return true 
	}else {
		return false
	}
}
// console.log(dividesEvenly(85, 4))



//Convert an Array to a String
//Solution
arrayToString=(str)=> str.join('')
// console.log(arrayToString([23,34,5,6]))



//Find the Index - Create a function that takes an array and a string as arguments and return the index of the string.
//SOlution
findIndex=(arr, str)=> arr.indexOf(str)

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"))



//To the Power of - Create a function that takes a base number and an exponent number and returns the calculation
//Solution
calculateExponent=(num, exp)=> Math.pow(num, exp)
// console.log(calculateExponent(5, 5))




//Concat Las & Fast Name
concatName=(firstName, lastName)=> lastName+", "+firstName
// console.log(concatName("Lutful", "Ahmed"))


