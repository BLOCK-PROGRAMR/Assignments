
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Test leap year function
const yearToCheck = 2024;
if (isLeapYear(yearToCheck)) {
    console.log(yearToCheck + ' is a leap year.');
} else {
    console.log(yearToCheck + ' is not a leap year.');
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}


const celsiusTemp = 60;
const fahrenheitTemp = 45;
console.log(celsiusTemp + '°C is ' + celsiusToFahrenheit(celsiusTemp) + '°F');
console.log(fahrenheitTemp + '°F is ' + fahrenheitToCelsius(fahrenheitTemp) + '°C');


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


const num = 5;
console.log('Factorial of ' + num + ' is ' + factorial(num));
