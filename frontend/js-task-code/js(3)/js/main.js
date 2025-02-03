//1-Check if a variable named "age" is greater than 18 and display a message "You are an adult" if it is. 
function ageValue(params) {
    if(params > 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a child.");
    }
}
ageValue(27);


//2-Check if a variable named "score" is less than or equal to 50 and display a message "You failed the test" if it is. 
function scoreValue(params2) {
    if(params2 <= 50) {
        console.log("You failed the test");
    } else {
        console.log("You passed the test");
    }
}
scoreValue(45);


//3- Check if a variable named "name" is equal to "John" and display a message "Hello, John" if it is. 
function nameValue(params3) {
    if(params3 == "John") {
        console.log("Hello, " + params3);
    } else {
        console.log("You are not John");
    }
}
nameValue("John");


//4-Check if a variable named "day" is not equal to "Saturday" and "Sunday" and display a message "It's a weekday" if it is. 
function dayValue(params4) {
    if(params4 != "Saturday" && params4 != "Sunday"){
        console.log("It's a weekday");
    } else {
        console.log("It's a weekend");
    }
}
dayValue("Monday");


//5- Check if a variable named "num" is divisible by 2 and display a message "The number is even" if it is
function numValue(params5) {
    if(params5 %2 == 0){
        console.log("even");
    } else if(params5 %2 !== 0) {
        console.log("odd");
    }
            
}
numValue(4);


//6- Check if a variable named "char" is a letter and display a message "It's a letter" if it is. 
function charValue(params6) {
    if(typeof(params6) === "string" && params6.length === 1){
        console.log("It's " + params6 + " letter");
    } else {
        console.log("It's " + params6 + " not letter");
    }
}
charValue("a");


//7-Check if a variable named "list" is an array and display a message "It's an array" if it is. 
function listValue(params7){
    if(Array.isArray(params7)){
        console.log("It's an array");
    } else {
        console.log("It's not an array");
    }
}
listValue([1, 2, 3]);


//8-Check if a variable named "x" is a positive number and display a message "x is a positive number
function positiveValue(params8) {
    if(params8 > 0){
        console.log("params8 is a positive number");
    } else {
        console.log("params8 is not a positive number");
    }
}
positiveValue(5);


//9-Check if a variable named "y" is a negative number and display a message "y is a negative number" if it is. 
function negativeValue(params9) {
    if(params9 < 0){
        console.log("params8 is a negative number");
    } else {
        console.log("params8 is not a negative number");
    }
}
negativeValue(-5);


//10-Check if a variable named "z" is a multiple of 3 and display a message "z is a multiple of 3" if it is. 
function multipleValue(params10) {
    if(params10 %3 == 0){
        console.log("is a multiple of");
    } else {
        console.log("is not a multiple of");
    }
}
multipleValue(9);


//11- Check if a variable named "gpa" is greater than or equal to 3.0 and display a message "Congratulations, you have a good GPA!" if it is. 
function gpaValue(params11){
    if(params11 >= 3.0){
        console.log("Congratulations, you have a good GPA!");
    } 
}
gpaValue(3.5);


//12- Check if a variable named "password" is at least 8 characters long and display a message "Your password is strong" if it is. 
function passValue(params12){
    if(params12.length >= 8){
        console.log("Your password is strong.");
    } else {
        console.log("Your password is weak.");
    }
}
passValue("mypassword123");


//13-Check if a variable named "age" is between 18 and 65 (inclusive) and display a message "You are of working age" if it is. 
function workingAgeValue(params13) {
    if(params13 >= 18 && params13 <= 65) {
        console.log("You are of working age");
    } else {
        console.log("You are not of working age");
    }
}
workingAgeValue(30);


//14- Check if a variable named "color" is either "red", "green", or "blue" and display a message "color is a primary color" if it is. 
function primaryColor(params14){
    if (params14 == "red" || params14 =="blue" || params14 == "green"){
        console.log(params14 + " is a primary color");
    }
    else {
        console.log(params14 + " is not a primary color");
    }
}


//15-using Function `isNumber()` checks if input variable is a number by using isNaN() in-built JavaScript function
function isValidNumber(params15){
    if(isNaN(params15)){
        console.log(params15 + " is not a valid number");
    }
    else {
        console.log(params15 + " is a valid number");
    }
}
isValidNumber(11) 
isValidNumber("19") 
isValidNumber("xyz") 
isValidNumber("17.5")
isValidNumber("21F")