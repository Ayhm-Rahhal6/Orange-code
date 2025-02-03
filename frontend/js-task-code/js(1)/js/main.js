function CashFlowLiabilities(cash,liabilities){
    console.log(cash/liabilities);
}

function NetIncome(revenues,expenses){
    console.log(revenues-expenses);
}

function TotalAssets(liabilities, equity){
    console.log(liabilities+equity);
}

function NetIncome (profit, sales){
    console.log(profit * sales);
}

function Average(x,y,z){
    console.log((x+y+z)/3);
}

function Discount(price,discount){
    console.log(price-(price*discount/100));
}

function isAllowed (age){
    if (age>18 && age < 30)
        return true;
    return false;
}

function Exponential (number,pow){
    let result = 1;
    for(i = 1; i<=pow; i++){
        result = result * number;
    }
    console.log(result);
}

function Remainder(x,y){
    console.log(x%y);
}
/////////////////////////////////////////////////////

// console.log(typeof(100));        // "number"
// console.log(typeof(73.9));       // "number"
// console.log(typeof(NaN));        // "number"
// console.log(typeof("Water"));    // "string"
// console.log(typeof(false));      // "boolean"
// console.log(typeof(9 != 11));    // "boolean"

// console.log("Orang" + "e");      // "Orange"
// console.log("Orange" - "s");     // NaN (Not a Number)
// console.log("4" + "8");          // "48" (string concatenation)
// console.log("4" - "8");          // -4 (string converted to number)
// console.log("name" + 3);         // "name3" (string concatenation)
// console.log("name" - 3);         // NaN (string cannot be converted to number)
// console.log(82 * "word");        // NaN (string cannot be converted to number)
// console.log(1 + "hello");        // "1hello" (string concatenation)
// console.log("hello" + 1);        // "hello1" (string concatenation)
// console.log(1 + true);           // 2 (true is converted to 1)
// console.log("hello" + true);     // "hellotrue" (string concatenation)
// console.log(typeof (Infinity));  // "number"
// console.log(1 == '1');           // true (loose equality, type coercion)
// console.log(1 === '1');          // false (strict equality, different types)
///////////////////////////////////////////////////////////////////////////////////////

// let phrase = "Welcome to Orange";

// console.log(phrase.toUpperCase());
// /// TWO WAYS TO GET THE SAME RESULT
// console.log(phrase.substring(8,10).toUpperCase());
// console.log(phrase.split(" ")[1].toLocaleUpperCase());
// ///
// console.log(phrase.replace("to","from"));
// ///
// console.log(phrase.toLocaleLowerCase());
// ////
// console.log(phrase.length);
// //////////// THREE WAYS TO GET THE SAME RESULT
// console.log("Welcome to \"Orange\"");
// console.log(phrase.replace("Orange",'"Orange"'));
// console.log(phrase.replace("Orange",`"Orange"`));
// ///////////////////
// console.log(phrase + " Jordan");
// ///////////////////

// let word = "expensive";
// console.log(word.substring(0,1) + word.substring(1,word.length + 1).replaceAll(word[0],"*"));

// let array = ["Coding","Academy","By","Orange"];
// array.push("Jordan");
// console.log(array);
//////////////////////////
// array.pop();
// array.pop();
// console.log(array);
///////////////////////// Unshift adds elements to the beginning of the array without deleteing from it
// array.unshift("Welcome","To");
// console.log(array);
///////////////////////////// shift removes elements to the beginning of the array without deleteing from it
// array.shift();
// console.log(array);
///////////////////////////////////
// let phrase = "";
// for (let i = 0; i < array.length; i++){
//     phrase += array[i] + " ";
// }
// console.log(phrase);
// /////////////////////////
// console.log(array);
// /////////////////////////
// array.splice(1,2);
// console.log(array);
///////////////////////////
// var fruit = ["banana", "apple", "orange", "watermelon"];

// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// vegetables.pop();

// fruit.shift();

// fruit.indexOf("orange");

// fruit.push(fruit.indexOf("orange"));

// vegetables.length;

// vegetables.push(vegetables.length);

// console.log(vegetables);

// var food  =  fruit.concat(vegetables);

// console.log(food);

// food.splice(4,2);
// console.log(food);

// food.reverse();
// console.log(food);

// console.log(food.join(" "));//turn the array into a string

////////////////////////////////////////////////////////////////

// function toArray(phrase){
//     var array = phrase.split(" ");
//     console.log(array);
// }

// ///////////////////////////////////// Replace first 7 numbers in a string
// var phone = "0791234567";


// function replaceFirst7(phone){
//     phone = "*******" + phone.slice(7); // slice removes the first n numbers from the string
//     console.log(phone);
// }

//////////////////////////////////////////////// Hide an email
// var email = "orange_academy@orange.jo";
// function hideEmail (email){
//     var array = email.split("@");
//     console.log(email);
//     console.log(array);
//     console.log(array[0]);
//     console.log(array[1]);
//     var hidden = array[0].slice(0,6) + "...@" + array[1];
//     console.log(hidden);
// }

// hideEmail(email);

///////////////////////////////////////// Capitalize the first letter of a string
// var phrase = "Coding academy by orange";
// function capitalize(phrase){
//     console.log(phrase.charAt(0).toUpperCase() + phrase.slice(1));
// }


// capitalize(phrase);






//////////////////////////////////////// Capitalize the first letter of each word in a string
// var phrase = "coding academy by orange";


// function capitalize(phrase){
//     var array = phrase.split(" ");
//     for (let i = 0; i < array.length; i++){
//         array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
//     }
//     console.log(array.join(" "));
// }
/////////////////////////////////////////////// Reverse a number
//first way is by using the built in functions
// var x = 123456;
// function reverse(x){
//     console.log(x.toString().split('').reverse().join(''););
// }
//second way is by using a loop
// var x = 123456;
// function reverse(x) {
//     let numStr = x.toString();
//     let reversedStr = '';
//     for (let i = numStr.length - 1; i >= 0; i--) {
//         reversedStr += numStr[i];
//     }
//     console.log(parseInt(reversedStr));
// }
// reverse(x);
///////////////////////////////////////////Write a function that swaps the value of 2 variables in at least three ways. 
//first way
// var a = 3;
// var b = 4;
// b = b-a;
// a = a+b;
// b = a-b;
// console.log(a);
// console.log(b);

//second way
// var a = 3;
// var b = 4;
// var c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);

//third way
// var a = 3;
// var b = 4;
// a = a+1;
// b = b-1;
/////////////////////////////////////Write a function that removes an indexed character from a string. 
// var phrase = "Orange";

// function removeAtIndex(string,index){
//    var  newString = "";
//     for(let i = 0; i <string.length; i++){
//         if (index == i)
//             continue;
//         newString += string[i];
//     }
//     console.log(newString);
// }
// removeAtIndex(phrase,2);
////////////////////////////////// 9.Write a function that merges two strings after removing the first character of each one. 
// var string1 = "lora";
// var string2 = "inge";
// function removeAndMerge(string1,string2){
//     var newString = string1.slice(1) + string2.slice(1);
//     console.log(newString);
// }
// removeAndMerge(string1,string2);
////////////////////////////////////////// 10.Write a function that ensures a specific character appears in a string's first or last position. 

// var string = "orange";
// function isTrue(char,word){
//     if (char == word[0])
//         return true;
//     else if (char == word[word.length-1])
//         return true;
//     else
//         return false;
// }
// console.log(isTrue("g",string));
///////////////////////////////////////////11.Write a function that takes a string and returns every word in the string as an array element. 
// Repeated Exercice !!!!!!
// var string = "Coding Academy by Orange";
// function toArray(string){
//     var array = string.split(" ");
//     console.log(array);
// }
// toArray(string);

////////////////////////////////////// 12.Write a function that takes a string and reorders the characters alphabetically. 
// var string = "Orange";

// function reorder(string){

//     console.log(string.toLowerCase().split("").sort().join(""));
// }
// reorder(string);
//////////////////////////////////////
// function oddOrEven(num){
//     if (num % 2 == 0)
//         return "Even";
//     else
//         return "Odd";
// }
///////////////////////////////////////
// function isNumber(num){
//     if (typeof num == "number")
//         return true;
//     else
//         return false;
// }
////////////////////////////////////////
// function isBigger(x,y){
//     if (x > y)
//         return x;
//     else
//         return y;
// }
////////////////////////////////////////
// function triangleType(x,y,z){
//     if (x == y && y == z)
//         return "Equilateral";
//     else if (x == y || x == z || y == z)
//         return "Isosceles";
//     else
//         return "Scalene";
// }
/////////////////////////////////////////
// function isInRange(num,range){
//     if (num >= range[0] && num <= range[1])
//         return true;
//     else
//         return false;
// }
/////////////////////////////////////
// function isLeapYear(year){
//     if (year % 4 == 0 && year % 100 != 0)
//         return true;
//     else if (year % 4 ==0 && year % 100 ==0 && year % 400 == 0)
//         return true;
//     else
//         return false;
// }
// console.log(isLeapYear(2380));


/// divisible by 4 but not by 100 = leap year //divisible by 4 and 100 = not leap year// divisible by 4 and 100 and 400 = leap year
//////////////////////////////////////

//Loops
// var counter = 1;
// while (counter <= 50){
//     if (counter % 2 == 0){
//         for (let i = 0; i < 2; i++) {
//             console.log(counter);
//         }
//     }
//     counter++;
// }
///////////////////////////////////////////

// var counter = 1;
// while (counter <= 50){
//     if (counter % 2 == 0){
//         console.log(counter);
//         console.log(counter);
//     }
//     counter++;
// }
///////////////////////////////////////////
// var counter = 1;
// while (counter <= 50){
//     if (counter % 2 == 0){
//         for (let i = 0; i < 2; i++) {
//             console.log(counter);
//         }
//     } else {
//         console.log(counter);
//         console.log(counter);
//     }
//     counter++;
// }
////////////////////////////////////////////

// for (let i = 1; i <=100; i++) {
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0){
//         console.log("Fizz");
//     } else if (i % 5 == 0){
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
////////////////////////////////////////////

// function fizzBuzz(number){
//     var phrase = "";
//     for (let i = 1; i <=number; i++) {
//         if (i % 3 == 0 && i % 5 == 0){
//             phrase = "FizzBuzz"
//         } else if (i % 3 == 0){
//             phrase = "Fizz"
//         } else if (i % 5 == 0){
//             phrase = "Buzz"
//         } else {
//             phrase = i;
//         }
//     }
//     return phrase;
// }
// console.log(fizzBuzz(9));
////////////////////////////////////////////
//The code below doesn't work for some reason, the one below however does
///////////////////////////////////////////////////
// function recursiveFizzBuzz(limit,n){

//     if (n > limit){
//         return"task completed";
//     }
        
//     if (n % 3 == 0 && n % 5 == 0){
//         console.log("FizzBuzz");
//     } else if (n % 3 == 0){
//         console.log("Fizz");
//     } else if (n % 5 == 0){
//         console.log("Buzz");
//     } else {
//         console.log(n);
//     }

//     recursiveFizzBuzz(limit,n+1);
// }

// console.log(recursiveFizzBuzz(100,1));
/////////////////////////////////////////////////////////

// function fizzBuzz(n, limit) {
//     if (n > limit){
//         return;
//     }
//     if (n % 3 === 0 && n % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (n % 3 === 0) {
//       console.log("Fizz");
//     } else if (n % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(n);
//     }
//     fizzBuzz(n + 1, limit);
//   }

//   fizzBuzz(1 , 100);

///////////////////////////////////////////
// function bankNotes(amount,notes){
//     var notesReturned = [];
//     for (let i = 0; i < notes.length; i++){
//         if(amount >= notes[i]){
//             notesReturned.push(notes[i]);
//             amount -= notes[i];
//             i--;
//         }
//     }
//     console.log(notesReturned);
// }
// bankNotes(277,[100,50,20,10,5,1]);
///////////////////////////////////////////
// function countLetter(phrase,letter){
//     var count = 0;
//     for (let i = 0; i < phrase.length; i++) {
//         if (phrase[i] == letter)
//             count++;
//     }
//     return count;
// }
// console.log(countLetter("Coding Academy by Orange","r"));
///////////////////////////////////////////
// for (let i = 0; i <= 20; i++) {
//    console.log(i);
// }
///////////////////////////////////////////
// for (let i = 3; i <= 29; i++) {
//     if (i % 2 == 0)
//         console.log(i);
// }
///////////////////////////////////////////
// for (let i = 12; i >= -14; i-=2) {
//     if (Math.abs(i) % 2 == 0)
//         console.log(i);
// }
///////////////////////////////////////////
// for (let i = 50; i >= 20; i--) {
//     if (i % 3 == 0)
//         console.log(i);
// }
///////////////////////////////////////////
// var phrase = "CodingAcademy";
// var array = [7, 500, 'KH404', 'black', 36];
// //print each element of the array
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// reverse a string
// var splitPhrase = phrase.split("");
// var reversed = "";
// for (let i = splitPhrase.length - 1; i >= 0; i--) {
//     reversed += splitPhrase[i];
// }
// console.log(reversed);
///////////////////////////////////////////
// var array = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
// var evenArray = [];
// var oddArray = [];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0)
//         evenArray.push(array[i]);
//     else
//         oddArray.push(array[i]);
// }
///////////////////////////////////////////
var protien = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
var grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
var vegetable = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
var beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
var dessert = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

function meals(number) {
    var meals = [];
    for (let i = 0; i < number; i++) {
        var meal = [];
        meal.push(protien[Math.floor(Math.random() * protien.length)]);
        meal.push(grain[Math.floor(Math.random() * grain.length)]);
        meal.push(vegetable[Math.floor(Math.random() * vegetable.length)]);
        meal.push(beverage[Math.floor(Math.random() * beverage.length)]);
        meal.push(dessert[Math.floor(Math.random() * dessert.length)]);
        //check if the random meal exists before adding it to meals
        if (!meals.some(existingMeal => 
            existingMeal.protein === meal.protein &&
            existingMeal.grain === meal.grain &&
            existingMeal.vegetable === meal.vegetable &&
            existingMeal.beverage === meal.beverage &&
            existingMeal.dessert === meal.dessert)) {
            meals.push(meal);
          }

    }
    console.log(meals);
}
meals(5);