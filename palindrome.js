//reverses a string
function reverse(string){
	return Array.from(string).reverse().join("");
}



// Defines a Phrase object, from section 7.1
function Phrase(content){
	this.content = content;
	
	this.palindrome = function palindrome(){
		let processedContent = content.toLowerCase();
		return processedContent === reverse(processedContent);
	}
	
	//Exercise 7.1.1
	//makes the phrase LOUDER
	this.louder = function(){
		let louderContent = content.toUpperCase();
		return louderContent;
	}
}
