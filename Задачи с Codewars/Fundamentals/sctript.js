/*
1.
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false. 
 */

const validatePIN = pin => {
   if (pin.length !== 4 && pin.length !== 6) {
      return false;
   }

   for (let i = 0; i < pin.length; i++) {
      if (pin[i] > '9' || pin[i] < '0') {
         return false;
      }
  
   }
   
   return true;
}

/* 

Можно было и так

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

*/

/*
2. This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

const accum = s =>{
   const result = [];
   const lowerStr = s.toLowerCase();
   for(let i = 0; i<s.length; i++){
      let str = lowerStr[i].toUpperCase();
      for(let j = 0; j < i; j++){
         str+=lowerStr[i];
      }
      result.push(str);
   }
   return result.join('-');
}


/*
3. 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


*/
const squareSum = (numbers) => {
   let sum = 0;
   let value;
   for(let i=0; i<numbers.length; i++ ){
     value = numbers[i] * numbers[i];
     sum += value;
   }
   return sum;
 }
  

/*
4. Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}

*/

const getGrade = (s1, s2, s3) => {
   let average = (s1+s2+s3)/3;
   if(average >= 90){
     return 'A';
   }
   if(average >= 80){
     return 'B';
   }
   if(average >= 70){
     return 'C';
   }
   if(average >= 60){
     return 'D';
   }
   else{
     return 'F';
   }
 }

/*
5. Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/
const bmi = (weight, height) => {
   let mass = (weight / (height*height));
   if (mass > 30)
     return 'Obese';
   else if (mass <= 18.5)
     return 'Underweight';
   else if (mass <= 25.0)
     return 'Normal';
   else if (mass <= 30)
     return 'Overweight';
 }

