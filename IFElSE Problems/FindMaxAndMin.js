let number1 = 30;
let number2 = 40;
let number3 = 50;
let val1= (number1+number2) * number3;
let val2= (number1%number2) + number3;
let val3= (number3+number1) / number2;
let val4= (number1*number2) + number3;
console.log("Value will be :"+val1);
console.log("Value will be :"+val2);
console.log("Value will be :"+val3);
console.log("Value will be :"+val4);

let Array = [val1,val2,val3,val4];
console.log("Array will be: "+Array);
let min =Array[0];
let max = Array[0];
for(let num=1;num<Array.length;num++)
{
   if(Array[num] > max)
   { 
     max=Array[num];
     console.log("Maximum value will be :" +max);
   }
   if(Array[num] < min)
   {
      min=Array[num];
      console.log("Minimum value will be :" +min);
   }
}