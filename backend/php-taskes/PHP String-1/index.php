<?php
//Convert the entered string to uppercase.(1/A)
//[1]
// $string = "ayhm";
// $uppercase = strtoupper($string);
// echo $uppercase;
//[2]
// echo strtoupper($string);

// Convert the entered string to lowercase.(1/B)
// $string = "ayhm";
//[1]
// $lowercase = strtolower($string);
// echo $lowercase ;
//[2]
// echo strtolower($string);

//Make the first letter of the string uppercase(1/C)
// $string = "ayhm rahhal";
// $first_letter_uppercase = ucfirst($string);
// echo $first_letter_uppercase;

//Make the first letter of each word capitalized(1.d)
// $string = "ayhm rahhal";
// $first_letter_uppercase = ucwords($string);
// echo $first_letter_uppercase;
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Write a PHP script splitting the following numeric string to be a date format.(2)
//[1]
// echo  "08" .":". "51" .":" . "19" ;

// [2]
// echo date("h:i:sa");

// [3]
//$numeric = '085119';
// $formatted = substr($numeric, 0, 2) . ':' . substr($numeric, 2, 2) . ':' . substr($numeric, 4, 2);
// echo $formatted;
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Write a PHP script to check whether the sentence contains a specific word(3)
//[1]
// $string = "I am a full stack developer at orange coding academy";
// echo str_replace("orange" , "Word Found!", $string);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Write a PHP script to extract the file name from the URL.(4)
//[1]
// $url = "www.orange.com/index.php";
// echo basename($url);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Write a PHP script to extract the username from the following email address.(5)
// [1]
// $email =  "info@orange.com";
// $name = explode('@', $email)[0];
// echo $name;

// [2]
// $email =  "info@orange.com";
// echo strstr($email,'@',true);

//[3]
// $email = "info@orange.com";
// $aa = substr($email, 0, strpos($email, "@"));
// echo $aa;
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Write a PHP script to get the last three characters from the string.(6)

// $email = "info@orange.com";
// [1]
// $aa = substr($email, strpos($email, "c"));
// echo $aa;
// [2]
// $aa = substr($email, 12, strpos($email, "."));
// echo $aa;
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Write a PHP script to generate simple random passwords [do not use rand () function] from a given string (7)
// [1]
// function stringOne($one , $length) {
//     $pass="";
//     $oneLength = strlen($one);
//     for ($i = 0; $i < $length; $i++) {
//     $two = random_int (0, $oneLength - 1);
//     $pass .= $one[$two];
// }
// return $pass;
// }
// $one = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz";
// $length = 16 ;
// echo "newPass : " . stringOne($one , $length);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Write a PHP script to replace the first word of the sentence with another word(8)
//[1]
// $first = "That new trainee is so genius";
// function firstCar($first){
//     echo str_replace("That" , "The" , $first);
// }
// firstCar($first);
//[2]
// function replace($first , $newFirst){
//     $word = explode(" " , $first);
//     $word[0] = $newFirst;
//     return implode(" " , $word);
// }
// echo replace("That new trainee is so genius" , "The");

// $first = "That new trainee is so genius";
// echo str_replace("That" , "The" , $first);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Write a PHP script to find the first character that is different between two strings.(9)

// $string1 = "dragonball";
// $string2 = "dragonboll";
//  function firstDiff($string1 , $string2){
//     $length = min(strlen($string1) , strlen($string2));
//     for ($i = 0; $i < $length; $i++) {
//         if ($string1[$i] != $string2[$i]) {
//             echo " First difference between two strings at position " . ($i+1)."\"{$string1[$i]}\" vs \"{$string2[$i]}\" " ;
//             break;
//  }

//  }
//  }
//  firstDiff($string1 , $string2);

// $string1 = "dragonball";
// $string2 = "dragonboll";
// function difchar($string1, $string2){
//     $length1 = strlen($string1);
//     $length2 = strlen($string2);
//     if ($length1 == $length2) {
//         for ($i=0; $i < $length1; $i++) { 
//             if ($string1[$i] != $string2[$i]) {
//                 $difIndex1 = $string1[$i];
//                 $difIndex2 = $string2[$i];
//                 echo "The first difference between the two strings is at position $i: " . $difIndex1 . " vs " . $difIndex2;
//                 break;
//             }
//         }

//     } else {
//         echo "The two strings are not equal";
//     }
// }
// difchar($string1, $string2);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP script to put a string in an array, use the (var_dump) to view the array.(10)

// $string = "Twinkle, twinkle, little star" ;
// $words = explode(", " , $string);
// var_dump($words);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Write a PHP script to print the next letter of the inputted letter.(11)      
// $char = "a";
// $nextChar = ($char === 'z') ? 'a' : chr(ord($char) + 1);
// echo $char ." ". $nextChar;
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
// 12. Write a PHP script to insert a string at the specified position in a given string.(12)
// $text = "The brown fox" ; 
// $string1 = str_replace("The" , "The quick" , $text);
// $one = explode(" ", $string1)[0];
// echo $string1 . "<br> " . $one;

// $string = "The brown fox" ; 
// for ($i=0; $i < strlen($string); $i++) { 
//    if ($string[$i] == " "){
//     $newString = substr_replace($string, " quick ", $i, 1);
//     echo $newString;
//     echo "<br>";
//     break;
//    }
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP script to remove zeroes from the given number(13)
// $number = "0000657022.24";
// [1]
// $numberRemove= str_replace("0", "", $number);
// echo $numberRemove;
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP script to remove part of a string.(14)
// [1]
// $string = "The quick brown fox jumps over the lazy dog";
// $remove = "fox";
// $pos = strpos($string, $remove);
// if ($pos !== false) {
//     $text = substr($string, 0, $pos);
//     $after = substr($string, $pos + strlen($remove));
//     $newString = $text . $after;
//     echo $newString;
// } else {
//     echo $string; 
// }
// [2]
// $original_string = 'The quick brown fox jumps over the lazy dog';
// $word_to_remove = 'fox';
// $result_string = preg_replace('/\b' . preg_quote($word_to_remove, '/') . '\b/', '', $original_string);
// echo trim(preg_replace('/\s+/', ' ', $result_string));
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Write a PHP script to remove trailing dashes from a string(15)
//[1]
// $text = "The quick brown fox jumps over the lazy dog---";
// $trimmed = rtrim($text, "-");
// echo $trimmed;

//[2]
// $text = "The quick brown fox jumps over the lazy dog---";
// for ($i=0; $i <strlen($text) ; $i++) { 
//     if ($text[$i] == "-"){
//         $newText = substr($text, 0, $i);
//         echo $newText;
//         break;
//     } 
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP script to remove Special characters from the following string.(16)
//[1]
// $num = '\"\1+2/3*2:2-3/4*3';
// $special = str_replace(array("\"", "\\", "/", ":", "*", "+", "-", " "), "", $num);
// echo $special;

//[2]
// $sampleString = '\"\1+2/3*2:2-3/4*3';
// $newString = '';
// for ($i = 0; $i < strlen($sampleString); $i++) {
//     if (is_numeric($sampleString[$i])) {
//         $newString .= $sampleString[$i] . ' ';
//     }
// }
// $newString = trim($newString);
// echo $newString;
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP script to select first 5 words from the following string.(17)
// $originalText = "The quick brown fox jumps over the lazy dog";
//[1]
// $words = explode(" ", $originalText);
// $firstFiveWords = array_slice($words, 0, 5);
// echo implode(" ", $firstFiveWords);

//[2]
// for ($i=0; $i < strlen($originalText); $i++) { 
//     if ($originalText[$i] == " " && $originalText[$i+1] == "o"){
//         $newText = substr($originalText, 0, $i);
//         echo $newText;
//         break;
//     }
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP script to remove comma(s) from the following numeric string.(18)
// $numbers = '2,543.12';
//[1]
// $noCommas = str_replace(",", "", $numbers);
// echo $noCommas;

//[2]
// $noCommas = '';
// for ($i = 0; $i < strlen($numbers); $i++) {
//     if ($numbers[$i] !== ',') {
//         $noCommas .= $numbers[$i];
//     }
// }
// echo $noCommas;
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP script to print letters from 'a' to 'z'.(19)
// for($i = ord('a'); $i <= ord('z'); $i++) {
//     echo chr($i) . " ";
// }

?>