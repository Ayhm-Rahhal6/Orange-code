<?php
//Write a PHP script to check if the inserted number is a prime number(1)
// function primeNumber($number){
// if($number/2 != 0){
//     echo $number . " is a prime number";
// } else{
//     echo $number . "is not a prime number ";
// }
// }
// primeNumber(3);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP script to reverse a string(2)
//[1]
// function reverseText($text){
//     $reversed = strrev($text);
//     echo $reversed;
// }
// reverseText("remove");

//[2]
// function reverseText($text){
//     $reversed = "";
//     for($i = strlen($text) - 1; $i >= 0; $i--){
//         $reversed .= $text[$i];
//     }
//     echo $reversed;
// }
// reverseText("remove");
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP script to check if the all string characters are lower cases(3)
//[1]
// function LowerCase($string){
//     if (ctype_lower($string)) {
//         echo "Your String is Ok";
//     } else {
//         echo "Not all characters are lowercase";
//     }
// }
// LowerCase("remove");

//[2]
// function LowerCase($string){
//     $lower = strtolower($string);
//     if ($string == $lower) {
//         echo "Your String is Ok";
//     } else {
//         echo "Not all characters are lowercase";
//     }
// }
// LowerCase("remove");
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP function to swap to variables?(4)
//[1]
// function swapNumbers($x, $y){
//     $temp = $x;
//     $x = $y;
//     $y = $temp;
//     echo "x = $x, y = $y";
// }
// swapNumbers(12, 10);

//[2]
// function swapNumbers($x, $y){
//     $x = $x + $y;
//     $y = $x - $y;
//     $x = $x - $y;
//     echo "x = $x, y = $y";
// }
// swapNumbers(12, 10);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP function to swap to variables?(5)
//[1]
// function swapNumbers($x, $y){
//     $temp = $x;
//     $x = $y;
//     $y = $temp;
//     echo "x = $x, y = $y";
// }
// swapNumbers(12, 10);

//[2]
// function swapNumbers($x, $y){
//     $x = $x + $y;
//     $y = $x - $y;
//     $x = $x - $y;
//     echo "x = $x, y = $y";
// }
// swapNumbers(12, 10);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP function to check if a number is an Armstrong number or not?(6)
// function isArmstrong($number) {
//     $digits = str_split($number);
//     $sum = 0;
//     foreach ($digits as $digit) {
//         $sum += pow($digit, 3);
//     }
//     return $sum == $number;
// }
// $number = 407;
// if (isArmstrong($number)) {
//     echo "$number is an Armstrong number.";
// } else {
//     echo "$number is not an Armstrong number.";
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP function that checks whether a passed string is a palindrome or not?(7)
// function isPalindrome($string) {
//     $string = strtolower($string);
//     $reversed = strrev($string);
//     return $string == $reversed;
// }
//     $string = "level";
//     if (isPalindrome($string)) {
//     echo "$string is a palindrome.";
//     } else {
//     echo "$string is not a palindrome.";
//     }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Write a PHP function to remove duplicates from an array?(8)
//[1]
// function removeDuplicates($array) {
//     $unique = array_unique($array);
//     return $unique;
// }
// $numbers = [2, 4, 7, 4, 8, 4];
// print_r(removeDuplicates($numbers));

//[2]
// function removeDuplicates($array) {
//     $uniqueArray = [];
//     $size = count($array);
//     for ($i = 0; $i < $size; $i++) {
//         $isDuplicate = false;
//         for ($j = 0; $j < count($uniqueArray); $j++) {
//             if ($array[$i] == $uniqueArray[$j]) {
//                 $isDuplicate = true;
//                 break;
//             }
//         }
//         if (!$isDuplicate) {
//             $uniqueArray[] = $array[$i];
//         }
//     }
//     return $uniqueArray;
// }
// $array = [2, 4, 7, 4, 8, 4];
// $result = removeDuplicates($array);
// print_r($result);
?>