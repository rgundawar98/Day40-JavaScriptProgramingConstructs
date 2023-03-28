let WeekDay = Math.floor(Math.random() * 7);
console.log("Random WeekDay will be :"+WeekDay);
switch (WeekDay) {
    case 0:
        Text = "Sunday";
        console.log("WeekDay will be :"+Text);
        break;
    case 1:
        Text = "Monday";
        console.log("WeekDay will be :"+Text);
        break;
    case 2:
        Text = "Tuesday";
        console.log("WeekDay will be :"+Text);
        break;
    case 3:
        Text = "Wednesday";
        console.log("WeekDay will be :"+Text);
        break;
    case 4:
        Text = "Thursday";
        console.log("WeekDay will be :"+Text);
        break;
    case 5:
        Text = "Friday";
        console.log("WeekDay will be :"+Text);
        break;
    case 6:
        Text = "Saturday";
        console.log("WeekDay will be :"+Text);
        break;
    default:
         Text="Not Valid";
         console.log("WeekDay will be :"+Text);
         break;
}
