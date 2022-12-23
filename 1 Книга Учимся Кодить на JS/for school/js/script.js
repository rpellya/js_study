let val1 = 1;
let val2 = 2;
let val3 = 3;

let x;
function func (x){
   let answer = (x -3 * Math.sin(x));
   return answer;
}

while(val2 - val1 > 2*val3){
   let x1 = (val1 + val2 - val3) /2;
   let x2 = (val1 + val2 + val3) /2;
   
   if (func(x1) <= func (x2)){
      val2 = x2;
   }
   else{
      val1 = x1
   }
}
let xMin = (val1+val2) / 2;
let min = func(xMin);
document.write( "Xmin = " + xMin);
document.write( "\n min = "+ Math.round(min,2));