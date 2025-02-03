//1.Create a function that will display the smallest value in the array. 
var params = [7, 30, 45, 60, 3, 1];
function smallestValue(params){
    var newValue = params[0];
    for (let i = 1; i < params.length; i++) {
        if (params[i] < newValue ) {
            newValue = params[i];
        }
    }
    return newValue;
}
console.log(smallestValue(params));


//2. Function that will return your string in Alphabetical order 
function AlphabeticalOrder(params1) {
    let newParams1 = params1.split('').sort().join('');
    return newParams1;
}
console.log(AlphabeticalOrder("hello"));


//3. In mathematics, the factorial of a non-negative integer n, denoted by n! is the product of all positive integers less than or equal to n. In simple terms, the Factorial of 8 is solved like this: 
function factorial(params2){
    let newFactorial = 1;
    for (let i = 1; i <= params2; i++) {
        newFactorial *= i;
    }
    return newFactorial;
}
console.log(factorial(8));


//4. A Write a function that lets you know if a number is Even or Odd .
function oddOrEven(params3){
    if (params3 % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
oddOrEven(9);


//5. Remove all Odd number(s) in an array and return a new array that contains Even numbers only.
function evenNum(params4) {
    for (let i = 0; i < params4.length; i++) {
        if(params4[i] % 2 !==0){
            params4.splice(i , 1);
        }
    }
    return params4;
}
console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9]));


//6. Create a function that takes in an array as an argument, checks the data type of each element, and removes any elements that are strings. The function should return the modified array. 
function numbersOnly(params5) {
    for (let i = 0; i < params5.length; i++) {
        if(typeof(params5[i]) == 'string'){
            params5.splice(i , 1);
        }
    }
     return params5;
}
console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding']));
    

//7. Return the sum of a number going back to it's root. In other words, the function will work like this: 
function addUp(params6) {
    var newAddUp = 0;
    for (let i = 0; i <= params6; i++) {
        newAddUp += i;
    }
    return newAddUp;
}
console.log(addUp(8));


//8. Create a function that will accept an array and do the following: 
function minMaxLengthAverage(params7){
    var newParams7 = [];
    var min = params7[0];
    var max = params7[0];
    var sum = 0;
    for (let i = 0; i < params7.length; i++) {
        if(params7[i] < min){
            min = params7[i];
        }
        if(params7[i] > max){
            max = params7[i];
        }
        sum += params7[i];
    }
    newParams7.push(min);
    newParams7.push(max);
    newParams7.push(params7.length);
    newParams7.push(sum / params7.length);
    return newParams7;
}


//9. Convert the given number to a Roman Numeral 
function romanNumbers(params8) {
    const romanValue = {M:1000, CM:900, LXXX:80, IX:9};
    var result = '';
    for (let key in romanValue) {
        while (params8 >= romanValue[key]) {
            result += key;
            params8 -= romanValue[key];
        }
    }
    return result;
}
console.log(romanNumbers(1989));


//10. Return how many words was given 
function countWords(params9) {
    let newCountWords = params9.split(" ");
    console.log(newCountWords.length);
}
countWords("hello from CodingAcademy!")


//11.Create function to Multiply all elements in an array by it's length 
function MultiplyByLength(params10) {
    let newResult = [];
    for (let i = 0; i < params10.length; i++) {
        newResult.push(params10[i] * params10.length);
    }
    return newResult;
}
console.log(MultiplyByLength([4, 2, 5]));


//12. Create a function that will check if str1 ends with the characters in str2 
function checkEnding(str1, str2){
    if (str2[0] == str1[str1.length-2] && str2[1] == str1[str1.length-1])
        return true;
    return false
}

console.log(checkEnding("CodingSchool", "Ac"));


//13. Create a function that will repeat each string character two times 
function doubleChar(params11) {
    let newDoubleChar = "";
    for (let i = 0; i < params11.length; i++) {
        newDoubleChar += params11[i] + params11[i];
    }
    return newDoubleChar;
}
console.log(doubleChar("Coding"));

//14. Return the index location of an element from a given array. First argument is the array you'd like to search and the second one is the element (either string/number) to look for. 
function findIndex(arr1,elm1){
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == elm1)
            return i;
    }
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));

//
function getAbsSum(arr2){
    var sum1 = 0;
    for (let i = 0; i < arr2.length; i++) {
        sum1 += Math.abs(arr2[i]);
    }
    return sum1;
}
console.log(getAbsSum([-1, -3, -5, -4, -10, 0]));