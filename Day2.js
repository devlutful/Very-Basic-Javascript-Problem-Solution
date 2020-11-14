//100Days of code-Day 2



//Football Points - Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
		// wins get 3 points
		// draws get 1 point
		// losses get 0 points
//Solution
function footballPoints(wins, draws, losses){
		var winsScore=3;
		var drawsScore=1;
		losses=0;

		function result(){
			var sum=wins*winsScore+draws+losses;
			return sum
		}
		return result()
}
// console.log(footballPoints(3, 4, 2))




// Multiple of 100- Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.
//Solution
function divisible(num) {
	
	if(num%2===0/100){
		return true 
	}else return false 

}
// console.log(divisible(1))



//Frames Per Second - Create a function that returns the number of frames shown in a given number of minutes for a certain FPS 
//Solution
function frames(minutes, fps) {
	var min=minutes
	var frames=fps*60
	return min*frames
}
// console.log(frames(10,25))



//Return a String as an Integer
//Solution
function stringInt(str) {
		var value=parseInt(str)

		if(value%2===0){
			return value
		}else {
			return value-1
		}
		return value		
}
// console.log(stringInt('3'))


//Upvotes vs Downvotes- Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
//Solution
function getVoteCount(votes) {
		
		if(votes.upvotes>0 && votes.downvotes===0){
			return votes.upvotes
		}else {
			return -Math.abs(votes.downvotes-votes.upvotes)
		}
}
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }))


//Profitable Gamble-
//Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

//solution
function profitableGamble(prob, prize, pay) {
		if(prob*prize>pay){
			return true
		}else {
			return false
		}
}
// console.log(profitableGamble(0.9, 1, 2))


//Compare Strings by Count of Characters
//Solution
function comp(str1, str2) {
	return str1.length===str2.length
}
// console.log(comp("ere", "etet"))



