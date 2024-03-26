function isLeapYear(year) {
   
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


const yearToCheck = 2024;
if (isLeapYear(yearToCheck)) {
    console.log(yearToCheck + ' is a leap year.');
} else {
    console.log(yearToCheck + ' is not a leap year.');
}
