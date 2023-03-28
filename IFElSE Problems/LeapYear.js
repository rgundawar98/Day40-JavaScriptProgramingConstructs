var year = 2024;
if((year%4 == 0) &&(year%100!=0))
  console.log(year +" Leap year")
else if(year%400 == 0)
  console.log(year +" Leap year")
else
  console.log(year +" Is not leap year");
