<?php
//Create a script that displays 1-2-3-4-5-6-7-8-9-10 on one line. There will be no dash (-) at the start and end position.(1)
// for ($i = 1; $i <= 10; $i++) {
//     echo $i;
//     if ($i >= 1 && $i < 10) {
//         echo "-";
//     }
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Create a script using a for loop to add all the integers between 0 and 30 and display the total.(2)
//[1]
// $sum = 0;
// for ($i = 0; $i <= 30; $i++) {
//     $sum += $i;
// }
// echo $sum;
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Create a script to generate the following pattern, using the nested for loop.(3)
//[1]
// $string = "A,B,C,D,E";
// $letters = explode(",", $string);
// for ($i = 0; $i < count($letters); $i++) {
//     $letter = $letters[$i];
//     switch ($letter) {
//         case 'A':
//             echo "$letter $letter $letter $letter $letter<br>";
//             break;
//         case 'B':
//             echo "A A A $letter $letter<br>";
//             break;
//         case 'C':
//             echo "A A $letter $letter $letter<br>";
//             break;
//         case 'D':
//             echo "A $letter $letter $letter $letter<br>";
//             break;
//         case 'E':
//             echo "$letter $letter $letter $letter $letter<br>";
//             break;
//     }
// }

//[2]
// $string = "A,B,C,D,E";
// $letters = explode(",", $string);
// $size = count($letters);
// for ($i = 0; $i < $size; $i++) {
//     for ($j = 0; $j < $size; $j++) {
//         if ($j < $size - $i - 1) {
//             echo "A ";
//         } else {
//             echo $letters[$i] . " ";
//         }
//     }
//     echo "<br>";
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Create a script to generate the following pattern, using the nested for loop.(4)
//[1]
// $string = "1,2,3,4,5";
// $letters = explode(",", $string);
// for ($i = 0; $i < count($letters); $i++) {
//     $letter = $letters[$i];
//     switch ($letter) {
//         case '1':
//             echo "$letter $letter $letter $letter $letter<br>";
//             break;
//         case '2':
//             echo "1 1 1 $letter $letter<br>";
//             break;
//         case '3':
//             echo "1 1 $letter $letter $letter<br>";
//             break;
//         case '4':
//             echo "1 $letter $letter $letter $letter<br>";
//             break;
//         case '5':
//             echo "$letter $letter $letter $letter $letter<br>";
//             break;
//     }
// }

//[2]
// $string = "1,2,3,4,5";
// $letters = explode(",", $string);
// $size = count($letters);
// for ($i = 0; $i < $size; $i++) {
//     for ($j = 0; $j < $size; $j++) {
//         if ($j < $size - $i - 1) {
//             echo "1 ";
//         } else {
//             echo $letters[$i] . " ";
//         }
//     }
//     echo "<br>";
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Create a script to generate the following pattern, using the nested for loop.(5)
//[1]
// $numbers = "1,2,3,4,5";
// $letters = explode(",", $numbers);
// for ($i = 0; $i < count($letters); $i++) {
//     switch ($letters[$i]) {
//         case '1':
//             echo "1 0 0 0 0<br>";
//             break;
//         case '2':
//             echo "0 2 0 0 0<br>";
//             break;
//         case '3':
//             echo "0 0 3 0 0<br>";
//             break;
//         case '4':
//             echo "0 0 0 4 0<br>";
//             break;
//         case '5':
//             echo "0 0 0 0 5<br>";
//             break;
//     }
// }

//[2]
// $numbers = "1,2,3,4,5";
// $letters = explode(",", $numbers);
// $size = count($letters);

// for ($i = 0; $i < $size; $i++) {
//     for ($j = 0; $j < $size; $j++) {
//         if ($i == $j) {
//             echo $letters[$i] . " ";
//         } else {
//             echo "0 ";
//         }
//     }
//     echo "<br>";
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a program to calculate and print the factorial of a number using a for loop. The factorial of a number is the product of all integers up to and including that number.(6)
// $number = 5;
// $factorial = 1;
// for ($i = 1; $i <= $number; $i++) {
//     $factorial *= $i;
// }
// echo $factorial;
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a program to calculate and print the Fibonacci sequence using a for loop. Fibonacci is a series of numbers where a number is the sum of previous two numbers. Starting with 0 and 1, the sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.(7)
// $n = 10;
// $first = 0;
// $second = 1;
// echo $first . " " . $second . " ";
// for ($i = 0; $i < $n - 2; $i++) {
//     $next = $first + $second;
//     echo $next . " ";
//     $first = $second;
//     $second = $next;
// }

//[2]
// function generateFibonacci($n) {
//     $num = [0, 1];
//     for ($i = 2; $i < $n; $i++) {
//         $num[$i] = $num[$i - 1] + $num[$i - 2];
//     }
//     return $num;
// }
// $n = 10;
// $fibonacciSequence = generateFibonacci($n);
// echo implode(" ", $fibonacciSequence);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a program which will count the "c" characters in the text "Orange Coding Academy".(8)
// $string = "Orange Coding Academy";
// $count = 0;
// for ($i = 0; $i < strlen($string); $i++) {
//     if ($string[$i] == "c" || $string[$i] == "C") {
//         $count++;
//     }
// }
// echo $count;
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP script that creates the following table using for loops. Add cellpadding="3px" and cell spacing="0px" to the table tag.(9)
// echo "<table cellpadding='3px' cellspacing='0px' border='1px'>";
// for ($i = 1; $i <= 6; $i++) {
//     echo "<tr>";
//     for ($j = 1; $j <= 6; $j++) {
//         echo "<td>$i * $j = " . $i * $j . "</td>";
//     }
//     echo "</tr>";
// }
// echo "</table>";
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//10. Write a PHP program that repeats integers from 1 to 50. For multiples of three, print "Fizz" instead of the number, and for multiples of five print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".(10)
//[1]
// for ($i = 1; $i <= 50; $i++) {
//     if ($i % 3 == 0 && $i % 5 == 0) {
//         echo "FizzBuzz ";
//     } elseif ($i % 3 == 0) {
//         echo "Fizz ";
//     } elseif ($i % 5 == 0) {
//         echo "Buzz ";
//     } else {
//         echo $i . " ";
//     }
// }

//[2]
// $fizzBuzzArray = [];
// for ($i = 1; $i <= 50; $i++) {
//     if ($i % 3 == 0 && $i % 5 == 0) {
//         $fizzBuzzArray[] = "FizzBuzz";
//     } elseif ($i % 3 == 0) {
//         $fizzBuzzArray[] = "Fizz";
//     } elseif ($i % 5 == 0) {
//         $fizzBuzzArray[] = "Buzz";
//     } else {
//         $fizzBuzzArray[] = $i;
//     }
// }
// echo implode(" ", $fizzBuzzArray);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP program to generate and display the first n lines of a Floyd triangle.(11)
//[1]
// $n = 5;
// $num = 1;
// for ($i = 1; $i <= $n; $i++) {
//     for ($j = 1; $j <= $i; $j++) {
//         echo $num . " ";
//         $num++;
//     }
//     echo "<br>";
// }

//[2]
// $n = 5;
// $num = 1;
// $array = array();
// for ($i = 1; $i <= $n; $i++) {
//     for ($j = 1; $j <= $i; $j++) {
//         $array[$i][$j] = $num;
//         $num++;
//     }
// }
// for ($i = 1; $i <= $n; $i++) {
//     for ($j = 1; $j <= $i; $j++) {
//         echo $array[$i][$j] . " ";
//     }
//     echo "<br>";
// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Write a PHP program to print the following pattern.(12)
//[1]
// function generatePattern($n) {
//     for ($i = 0; $i < $n; $i++) {
//         for ($j = 0; $j <= $i; $j++) {
//             echo chr(65 + $j) . " ";
//         }
//         echo "<br>";
//     }
//     for ($i = $n - 2; $i >= 0; $i--) {
//         for ($j = 0; $j <= $i; $j++) {
//             echo chr(65 + $j) . " ";
//         }
//         echo "<br>";
//     }
// }
// $n = 5;
// generatePattern($n);

//[2]
// function generatePattern($n) {
//     $i = 0;
//     while ($i < $n) {
//         $j = 0;
//         while ($j <= $i) {
//             echo chr(65 + $j) . " ";
//             $j++;
//         }
//         echo "<br>";
//         $i++;
//     }
//     $i = $n - 2;
//     while ($i >= 0) {
//         $j = 0;
//         while ($j <= $i) {
//             echo chr(65 + $j) . " ";
//             $j++;
//         }
//         echo "<br>";
//         $i--;
//     }
// }
// $n = 5;
// generatePattern($n);

//[3]
// function generatePattern($n) {
//     $i = 0;
//     do {
//         $j = 0;
//         do {
//             echo chr(65 + $j) . " ";
//             $j++;
//         } while ($j <= $i);
//         echo "<br>";
//         $i++;
//     } while ($i < $n);

//     $i = $n - 2;
//     do {
//         $j = 0;
//         do {
//             echo chr(65 + $j) . " ";
//             $j++;
//         } while ($j <= $i);
//         echo "<br>";
//         $i--;
//     } while ($i >= 0);
// }
// $n = 5;
// generatePattern($n);
?>