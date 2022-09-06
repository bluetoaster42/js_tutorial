let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];


//urlification
function urlify(string){
	return string.toLowerCase().split(/\s+/).join("-");
}
//urls: imperative version
function imperativeUrls(elements){
	let urls = [];
	elements.forEach(function(element){
		urls.push(urlify(element));
	});
	return urls;
}

console.log(imperativeUrls(states));

//urls: functional version
function functionalUrls(elements){
	return elements.map(element => urlify(element));
}

//excercise 6.1.1
//using map, write a function that takes the states variable
//and returns an array of urls in the form https://example.com/<urlified-form>
function fullUrlification(elements){
	return elements.map(element => `https://example.com/${urlify(element)}`);
}

console.log(functionalUrls(states));

console.log(fullUrlification(states));

//6.2 filter

//filter the list of states to create a new list that only contains
//one-word-named states.
//Yes: Nebraska
//No: North Dakota

//imperative version
function imperativeFilter(elements){
	let result = [];
	elements.forEach(function(element){
		if(element.split(/\s+/).length === 1){
			result.push(element);
		}
	});
	return result;
}

console.log("Filter: imperative version");
console.log(imperativeFilter(states));

//functional version

function functionalFilter(elements){
	return elements.filter(element => element.split(/\s+/).length === 1);
}

console.log("Filter: functional version");
console.log(functionalFilter(states));


//Excerseice 6.2.1
//1. write two filter functions that return the Dakotas - one using 
//string#includes (section 2.5) to test for the prescence of the string 
//"Dakota" and one using regex that tests for the length of the split 
//array being 2

function filterDakotaIncludes(elements){
	return elements.filter(element => element.includes("Dakota"));
}

console.log("Exercise 6.2.1");
console.log(filterDakotaIncludes(states));

function filterDakotaRegex(elements){
	return elements.filter(element => element.split(/\s+/).length === 2);
}

console.log(filterDakotaRegex(states));

// 6.3.1

let nums = [1,2,3,4,5,6,7,8,9];

//return the sum of an array of numbers
function imperativeSum(elements){
	let sum = 0;
	elements.forEach(element => sum += element);
	return sum;
}

console.log("6.3.1");
console.log("Imperative Sum");
console.log(imperativeSum(nums));

function functionalSum(elements){
	return elements.reduce((total, element) => total += element);
}

console.log("Functional Sum");
console.log(functionalSum(nums));

//6.3.2 - Reduce, example 2

function imperativeLengths(elements){
	let lengths = {};
	elements.forEach(function(element){
		lengths[element] = element.length;
	});
	return lengths;
}
console.log("6.3.2 - Reduce, example 2");
console.log("Imperative Lengths");
console.log(imperativeLengths(states));

function functionalLengths(elements){
	return elements.reduce((lengths,element) => {
		lengths[element] = element.length;
		return lengths;
	} , {});
}

console.log("Functional Lengths");
console.log(functionalLengths(states));

// 6.3.4 Exercises

// using reduce, write a function that returns the product of all of 
// the elements in an array

function functionalProduct(elements){
	return elements.reduce((product,element) => product *= element);
}

console.log("6.3.4 Exercises");
console.log("Functional Product");
console.log(functionalProduct(nums));

// remove the newlines in the reduce solution fromlisting 6.9
// to turn it into a single long line. Does it still give the right answer?
// How long is the resulting line of code?

function functionalLengthsLong(elements){
	return elements.reduce((lengths,element) => {lengths[element] = element.length;	return lengths;	} , {});
}

console.log("Functional Lengths Long");
console.log(functionalLengthsLong(states));

//it does return the right answer but the line is really, really long.
// 108 characters, in fact.

