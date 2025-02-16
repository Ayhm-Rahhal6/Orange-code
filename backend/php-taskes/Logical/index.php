<?php
//Write a PHP script to see if the specified year is a leap year or not.(1)
// $year = 2013;
// if ($year % 4 == 0 || ($year % 100 != 0 && $year % 400 == 0)) {
//     echo "$year is a leap year.";
// } else {
//     echo "$year This year is not a leap year.";
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP script to check the season depending on the inserted temperature if the temperature is below 20, we are in winter otherwise the season is summer.(2)
// $number = 27;
// if ($number < 20) {
//     echo "Winter";
// } else {
//     echo "Summer";
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP script to calculate the sum of the two integers. If the two values are the same, then calculate the triple of their sum.(3)
// $num1 = 2;
// $num2 = 2;
// if ($num1 == $num2) {
//     echo ($num1 + $num2) * 3;
// } else {
//     echo $num1 + $num2;
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write PHP to check if the sum of the two given numbers equals 30, if the condition is true the return their sum otherwise return false(4)
// $num1 = 10;
// $num2 = 10;
// if ($num1 + $num2 == 30) {
//     echo $num1 + $num2;
// } else {
//     echo "false";
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write in PHP script to check if the given positive number is a multiple of 3.(5)
// $number = 20;
// if ($number % 3 == 0){
//     echo "true";
// } else if ($number % 3 != 0){
//     echo "false";
// } else {
//     echo "ما الك دخل";
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP script to check if the integer value is in the range of [20-50] inclusive.(6)
// $number = 50;
// if ($number >= 20 && $number <= 50) {
//     echo "true";
// } else {
//     echo "false";
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write PHP script to find the largest number between the three integers.(7)
//[1]
// $numbers = [1, 5, 9];
// echo max($numbers);

// [2]
// echo max(1, 5, 9);

//مراجعة الحل
//[3]
// $numbers =  [1, 5, 9];
// for ($i = 0; $i < count($numbers); $i++) {
//     for ($j = $i + 1; $j < count($numbers); $j++) {
//         if ($numbers[$i] < $numbers[$j]) {
//             $temp = $numbers[$i];
//             $numbers[$i] = $numbers[$j];
//             $numbers[$j] = $temp;
//         }
//     }
// }
// echo $numbers[0];

//[4]
// function numbers ($num1 , $num2 , $num3){
//     if ($num1 > $num2 && $num1 > $num3){
//         echo $num1;
//     } elseif ($num2 > $num1 && $num2 > $num3){
//         echo $num2;
//     } else {
//         echo $num3;
//     }
// }
// numbers(1, 5, 9);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write PHP script to calculate the monthly electricity bill according to these rules(8)
// $usage = 150;
// if ($usage <= 50) {
//     $bill = $usage * 3.50;
// } elseif ($usage > 50 && $usage <= 150) {
//     $bill = $usage * 4.00;
// } elseif ($usage > 150 && $usage <= 250) {
//     $bill = $usage * 4.50;
// } else {
//     $bill = $usage * 5.00;
// }
// echo $bill;
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write php script to make a calculator, the calculator should contain the four main operations(9)
// index1.php
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write php script to check if a person is eligible to vote, minimum age required for voting is 18.(10)
// $age = 15;
// if ($age >= 18) {
//     echo "You are eligible to vote.";
// } else {
//     echo "is no eligible to vote";
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write php script to check whether a number is positive, negative or zero.(11)
// $number = -60;
// if ($number > 0) {
//     echo "Positive";
// } elseif ($number < 0) {
//     echo "Negative";
// } else {
//     echo "Zero";
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Write a PHP to find the grade for the student, after calculating the average of his score in all the subjects.(12)
// $math = [60,86,95,63,55,74,79,62,50];
// $average = array_sum($math) / count($math);
// if ($average >= 90) {
//     echo "A";
// } elseif ($average >= 80) {
//     echo "B";
// } elseif ($average >= 70) {
//     echo "C";
// } elseif ($average >= 60) {
//     echo "D";
// } else {
//     echo "F";
// }
?>