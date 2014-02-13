function makeArray(len)
{ 
 for (var i = 0; i < len; i++) this[i] = null;
 this.length = len;
}
var dayNames = new makeArray(7);
 dayNames[0] = "Sunday";
 dayNames[1] = "Monday";
 dayNames[2] = "Tuesday";
 dayNames[3] = "Wednesday";
 dayNames[4] = "Thursday";
 dayNames[5] = "Friday";
 dayNames[6] = "Saturday";
var monthNames = new makeArray(12);
 monthNames[0] = "January";
 monthNames[1] = "February";
 monthNames[2] = "March";
 monthNames[3] = "April";
 monthNames[4] = "May";
 monthNames[5] = "June";
 monthNames[6] = "July";
 monthNames[7] = "August";
 monthNames[8] = "September";
 monthNames[9] = "October";
 monthNames[10] = "November";
 monthNames[11] = "December";
var now = new Date();
var day = now.getDay();
var month = now.getMonth();
var year = now.getYear();
var date = now.getDate();
if (year < 100)
{
 if (year <= 36)
 {
  if (year < 10)
  {
   document.write(dayNames[day] + ", " + monthNames[month] + "  " + date + ", 200" + year);
  }
  else
  {
   document.write(dayNames[day] + ", " + monthNames[month] + "  " + date + ", 20" + year);
  }
 }
 else
 {
  document.write(dayNames[day] + ", " + monthNames[month] + "  " + date + ", 19" + year);
 }
}
else if (year >= 2000)
{
 document.write(dayNames[day] + ", " + monthNames[month] + "  " + date + ", " + year);
}
else
{
 document.write(dayNames[day] + ", " + monthNames[month] + "  " + date + ", 2000");
}