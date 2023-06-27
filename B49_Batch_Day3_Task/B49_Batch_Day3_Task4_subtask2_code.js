//Question1. Square of a number


let squaredNumber = Math.pow(5,2);
console.log("5*5 = ",squaredNumber);




//Question2.Swapping 2 numbers

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);


//Output

/* Enter the first variable: 4
Enter the second variable: 2
The value of a after swapping: 2
The value of b after swapping: 4 */



//Question3. Addition of 3 numbers

var x = 10;
var y = 20;
var z = x + y;


//Question4.Celsius to Fahrenheit conversion



let c = 50;
let f = 0;

// Using the above formula
f = (c * (9 / 5)) + 32;
console.log("The value of the temperature in Fahrenheit is " + f);



//Question5. Meter to miles


function getMiles(meters) {
    return meters*0.000621371192;
}
function getMeters(miles) {
    return miles*1609.344;
}


//Question6. Pounds to kg


function convertPoundsToKilograms(pounds) {
    var kilograms = pounds * 0.453592;
    return kilograms;
  }


  //Question7. Calculate Batting Average


  function averageRuns(runs, matches, notout)
{
     
    // Calculate number of
    // dismissals
    let out1;
    out1 = matches - notout;
 
    // Check for 0 times out
    if (out1 == 0)
        return -1;
 
    // Calculate batting average
    let avg = parseInt((runs) / out1, 10);
 
    return avg;
}
 
// Driver code     
let runs = 10000;
let matches = 250;
let notout = 50;
let avg = averageRuns(runs, matches, notout);
 
if (avg == -1)
    document.write("NA");
else
    document.write(avg);



//Question8. Calculate five test scores and print their average


var score1 = 85;
var score2 = 90;
var score3 = 92;
var score4 = 88;
var score5 = 95;

// Calculate the average
var average = (score1 + score2 + score3 + score4 + score5) / 5;

// Print the average
console.log("The average test score is: " + average);


//Question9. Power of any number x ^ y

var x = 2;
var y = 3;
var result = Math.pow(x, y);
console.log(result); // Output: 8


//Question10. Calculate Simple Interest 


// Define the variables to store the principal, rate of interest, and time
var p = 1000; // Principal amount
var r = 0.05; // Rate of interest
var t = 2;    // Time in years

// Calculate the interest using the formula
// Simple Interest = (principal * rate * time) / 100
var interest = (p * r * t) / 100;

// Display the result
console.log("Simple Interest: " + interest);


//Question11. Calculate area of an equilateral triangle


a= 5  
area = ( 1.73 * a*a) / 4  
console.log("Area of Equilateral Triangle is: ");  
console.log(area);   


//Question12. Area Of Isosceles Triangle


// Define the base and height of the isosceles triangle
var base = 8;
var height = 5;

// Calculate the area
var area = (base * height) / 2;

// Print the area
console.log("The area of the isosceles triangle is: " + area);



//Question13. Volume Of Sphere


// Define the radius of the sphere
var radius = 5;

// Calculate the volume
var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

// Print the volume
console.log("The volume of the sphere is: " + volume);


//Question14. Volume Of Prism


// Define the base area and height of the prism
var baseArea = 25;
var height = 10;

// Calculate the volume
var volume = baseArea * height;

// Print the volume
console.log("The volume of the prism is: " + volume);



//Question15. Find area of a triangle.


const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);



//Question16. Give the Actual cost and Sold cost, Calculate Discount Of Product



// Define the actual cost and sold cost of the product
var actualCost = 50;
var soldCost = 40;

// Calculate the discount
var discount = ((actualCost - soldCost) / actualCost) * 100;

// Print the discount
console.log("The discount percentage is: " + discount + "%");



//Question17. Given their radius of a circle and find its diameter, circumference and area.


// Define the radius of the circle
var radius = 5;

// Calculate the diameter
var diameter = 2 * radius;

// Calculate the circumference
var circumference = 2 * Math.PI * radius;

// Calculate the area
var area = Math.PI * Math.pow(radius, 2);

// Print the results
console.log("Diameter: " + diameter);
console.log("Circumference: " + circumference);
console.log("Area: " + area);



//Question18. Given two numbers and perform all arithmetic operations.



// Define the two numbers
var number1 = 10;
var number2 = 5;

// Addition
var sum = number1 + number2;
console.log("Addition: " + sum);

// Subtraction
var difference = number1 - number2;
console.log("Subtraction: " + difference);

// Multiplication
var product = number1 * number2;
console.log("Multiplication: " + product);

// Division
var quotient = number1 / number2;
console.log("Division: " + quotient);

// Modulo (Remainder)
var remainder = number1 % number2;
console.log("Modulo: " + remainder);

// Exponentiation
var power = number1 ** number2;
console.log("Exponentiation: " + power);



//Question19.Display the asterisk pattern as shown below(No loop needed): 

*****
*****
*****
*****
*****




function printn(num) {
    // base case
    var pattern = "*****"
    if (num == 0)
        return;
    console.log(pattern);

    // recursively calling printn()
    printn(num - 1);
}
printn(5);










/* Question20. Calculate electricity bill?
For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10? */



// Define the daily consumption in watts and the per unit rate
var dailyConsumption = 100;
var perUnitRate = 10;

// Calculate the total energy consumed in kWh
var totalEnergyConsumed = (dailyConsumption * 24 * 30) / 1000;

// Calculate the total bill
var totalBill = totalEnergyConsumed * perUnitRate;

// Print the total bill
console.log("The total energy bill is: " + totalBill);




//Question21. Program To Calculate CGPA



// Define the grades obtained in each course and their respective credit hours
var grades = [3.7, 4.0, 3.3, 3.0, 3.5];
var creditHours = [3, 4, 3, 3, 4];

// Calculate the total grade points and total credit hours
var totalGradePoints = 0;
var totalCreditHours = 0;

for (var i = 0; i < grades.length; i++) {
  totalGradePoints += grades[i] * creditHours[i];
  totalCreditHours += creditHours[i];
}

// Calculate the CGPA
var cgpa = totalGradePoints / totalCreditHours;

// Print the CGPA
console.log("Your CGPA is: " + cgpa.toFixed(2));




