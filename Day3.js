//100Days of code-Day 3




//Convert Hours and Minutes into Seconds- Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

//solution
function convert(hours, minutes) {
	this.hours=hours*60*60;
	this.minutes=minutes*60;
	return this.hours+this.minutes
}
// console.log(convert(2, 0))


//Is the String Empty?
//Solution
function str(a){
	if(a===""){
		return true 
	}else {
		return false
	}
}
// console.log(str(" "))