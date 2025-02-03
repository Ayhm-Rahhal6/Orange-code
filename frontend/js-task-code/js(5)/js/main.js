// for (let i = 1; i < 11; i++) {
//    console.log(i);
// }
// //
// let num = 1;
// while(num <= 10){
    
//     console.log(num);
//     num ++
// }



//
let arr1 = [1, 2, 3, 4, 5];
for (let num of arr1) {
    console.log(num);
}


//
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
//
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);
//
let arr2 = [1, 2, 3, 4, 5];
let max = arr2[0];
for (let num of arr2) {
    if (num > max) max = num;
}
//
let arr3 = [5, 4, 3, 2, 1];
let min = arr3[0];
for (let num of arr3) {
    if (num < min) min = num;
}
console.log(min);
//
let arr4 = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let num of arr4) {
    sum2 += num;
}
console.log(sum2 / arr4.length);
//
let num = 5;
let factorial = 1;
for (let i = 1; i<= num; i++) {
    factorial *= i;
}
console.log(factorial);
//
var input = 10;
var seq = 0;
var beforeSeq = 0;

let inp = 10;
let x = 0;
let y = 1;
console.log(x);
console.log(y);

while(true){
    let seq = x + y;
    if (seq >= inp)
        break;
    console.log(seq);
    x = y;
    y = seq;
}

// prime
function printPrime (num){ //20
    for(let i = 2 ; i <= num; i++){
        if(i === 2){
            console.log(i);
        }
        for(let j=2;j<i;j++){
            if(i%j === 0){
                break;
            }
            else {
                console.log(i);
                break;
            }
        }

    }
}
printPrime(20);
//
let mul = 5;
for (let i = 1; i <= 10; i++) {
    console.log(mul + " x " + i + " = " + mul * i + ",");
}
//
let array = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
    }
}
//

let array3 = [1,2,3,4,5];

for (let i = array3.length -1; i >= 0; i--) {
    console.log(array3[i]);
}
//
let start = 2;
let end = 4;
for (let i = start; i <= end; i++) {
    console.log(array3[i]);
    
}
//

for (let i = 0; i < array3.length; i+=2) {
    console.log(array3[i]);
}
//
let number3 = 4;
for (let i = 0; i < array3.length; i++) {
    if (number3 == array3[i])
        console.log(true);
}
//
let counter = 0;
let rndArray = [1,2,1,3,2,1];
let rndNum = 1;
for (let i = 0; i < rndArray.length; i++) {
    if(rndNum == rndArray[i])
        counter ++;
    
}
console.log(counter);