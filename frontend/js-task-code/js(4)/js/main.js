//print
var arr = [1,2,3,4,5,6,7,8,9]
arr.forEach(element => {
    console.log(element);
});
//double
arr2 = arr.map((num) => num*2);

console.log(arr2);
//even
evenArr = arr.filter((num) => num%2 == 0);

console.log(evenArr);
//sum
sumArr = arr.reduce((acc,cur) => acc + cur, 0);

console.log(sumArr);
//sort
var fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);
//reverse
fruits.reverse();
console.log(fruits);
//concat
var conArr = arr.concat(arr2);// gonna use this arr in the below methods
console.log(conArr);

//slice
var slicedArr = conArr.slice(0,5);// slice from position(inclusive) to another(exclusive)
console.log(slicedArr);
console.log(slicedArr.slice(2));//slice from position(inclusive) onwards
//splice, index of, join and split
//spliced array will be used to demonstrate the usage of splice, index of, join and split
splicedArr = conArr.splice(2,1) //save the spliced num
console.log(splicedArr);//print spliced num
console.log(conArr); // print conArray after 3 is spliced

splicedArr = conArr.splice(2);//save the spliced numbers
console.log(splicedArr); // print spliced numbers
console.log(conArr); //print conArray after all numbers from index 2 onwards are deleted

splicedArr.splice(splicedArr.length-1,0,18);//add element to the array using splice
console.log(splicedArr);
splicedArr.splice(splicedArr.indexOf(18)) //splice the number even if you don't know it's index
console.log(splicedArr);

splicedArr.splice(splicedArr.length-1,1,7) //use splice to replace an item from an array
console.log(splicedArr);

var arrToString = splicedArr.join(); // use splice to turn an array into a string
console.log(arrToString);

var stringToArr = arrToString.split(',');// splice to turn string into an array
console.log(stringToArr);
console.log(typeof stringToArr[2]);//although the string is back to an array, the type of elements in this array is still a string
var nums = stringToArr.map((num) => parseInt(num));//  turn back the array of string numbers into array of actual numbers data type
console.log(nums);
//Length
console.log(nums.length);

//for-of and for-in
for (const num of nums){
    console.log(num);
}
for (const num in nums){
    console.log(nums[num]);
}
//Array.isArray

console.log(Array.isArray([1,2,3,4,5]));//check if input is array

console.log(Array.from({0: "a", 1: "b", 2: "c", length: 3}));//turn obj to an array

console.log(Array.of(1,2,3));// turn elements into an array

var testArray = [1,2,3,4,5];//Array.fill // sub-task 19 has a mistake
testArray.fill(0,3);
console.log(testArray);

var testArray2 = [1,2,3,4,5]
console.log(testArray2.copyWithin(1,0,1));//copy within