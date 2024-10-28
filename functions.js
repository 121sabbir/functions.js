// problem 1 StringCompare between two string
let string1 = 'Hello World';
let string2 = 'hello there';
function stringCompare(n1, n2){
    if (n1.toLowerCase() === n2.toLowerCase()){
        return true;
    } else {
        return false;
    }
} 
console.log(stringCompare(string1, string2));




// problem 2 Checking The Word is "JavaScript" found or not found using function with condition
let theSentence = "I am Enjoying JavaScript";
let theSentence2 = "I Love Java" 
function checkSomething(Word) {
  if (Word.includes("JavaScript") === true) {
    return "The word ['JavaScript'] is found!!!";
  } else {
    return "The word ['JavaScript'] is not found!!!";
  }
}
console.log(checkSomething(theSentence));
console.log(checkSomething(theSentence2));



// problem 3 split and join sentence using functions
let myInitialSentence = "I am learning JavaScript for the firstime"
function splitAndJoinSentence(sentence){
    let wordsArray = sentence.split(" ")
    let hyphenatedSentence = wordsArray.join("-")
    return hyphenatedSentence;
}
console.log(splitAndJoinSentence(myInitialSentence));



// problem 4 slice 
let mySentence = 'Dhaka is the Capital Of Bangladesh';
function getSlicedPart(sentence, startIndex, endIndex) {
let slicedPart = sentence.slice(startIndex, endIndex);
   return slicedPart;
}
console.log(getSlicedPart(mySentence,0 , 12));
console.log(getSlicedPart(mySentence,13));

// problem 5

// একটি অবজেক্ট তৈরি করা
let person = {
    name1: "Sabbir",
    email: "nssabbir121@gmail.com",
    age: 21,
};
let { name1, email, age } = person;
console.log(name1, email, age);    // Output: Name: John Doe