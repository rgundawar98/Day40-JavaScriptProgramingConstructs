let First_Val = Math.floor(Math.random()*500);
let Second_Val = Math.floor(Math.random()*500);
let Third_Val = Math.floor(Math.random()*500);
let Fourth_Val = Math.floor(Math.random()*500);
let Fifth_Val = Math.floor(Math.random()*500);
console.log(+First_Val+" "+Second_Val+" "+Third_Val+" "+Fourth_Val+" "+Fifth_Val);
let Array=[First_Val,Second_Val,Third_Val,Fourth_Val,Fifth_Val];
console.log(Array);
let min =Array[0];
let max = Array[0];
for(let num=1;num<Array.length;num++)
{
   if(Array[num] > max)
   { 
     max=Array[num];
     console.log(max);
   }
   if(Array[num] < min)
   {
      min=Array[num];
      console.log(min);
   }
}
