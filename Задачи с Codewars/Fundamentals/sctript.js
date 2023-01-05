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