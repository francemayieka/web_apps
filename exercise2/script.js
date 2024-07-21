var personName = "Your name";
var regNumber = "your regno";

// Exercise 2: Find the Largest of Two Numbers
function findLargestOfTwo(a, b) {
    return (a > b) ? a : b;
}

function executeLargestOfTwo() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = findLargestOfTwo(num1, num2);
    document.getElementById('resultLargestOfTwo').innerText = "Largest: " + result;
}

// Exercise 3: Find the Largest of Three Numbers
function findLargestOfThree(a, b, c) {
    if (a > b) {
        return (a > c) ? a : c;
    } else {
        return (b > c) ? b : c;
    }
}

function executeLargestOfThree() {
    var numA = parseFloat(document.getElementById('numA').value);
    var numB = parseFloat(document.getElementById('numB').value);
    var numC = parseFloat(document.getElementById('numC').value);
    var result = findLargestOfThree(numA, numB, numC);
    document.getElementById('resultLargestOfThree').innerText = "Largest: " + result;
}

// Exercise 4: Display Day of the Week
function getDayUsingIfElse(dayNumber) {
    if (dayNumber === 1) return "Sunday";
    else if (dayNumber === 2) return "Monday";
    else if (dayNumber === 3) return "Tuesday";
    else if (dayNumber === 4) return "Wednesday";
    else if (dayNumber === 5) return "Thursday";
    else if (dayNumber === 6) return "Friday";
    else if (dayNumber === 7) return "Saturday";
    else return "Invalid day number";
}

function executeDayOfWeek() {
    var dayNumber = parseInt(document.getElementById('dayNumber').value);
    var result = getDayUsingIfElse(dayNumber);
    document.getElementById('resultDayOfWeek').innerText = "Day: " + result;
}

// Exercise 5: Sum of Numbers 1-10
function sumUsingFor() {
    var sum = 0;
    for (var i = 1; i <= 10; i++) {
        sum += i;
    }
    return sum;
}

function sumUsingWhile() {
    var sum = 0;
    var i = 1;
    while (i <= 10) {
        sum += i;
        i++;
    }
    return sum;
}

function sumUsingDoWhile() {
    var sum = 0;
    var i = 1;
    do {
        sum += i;
        i++;
    } while (i <= 10);
    return sum;
}

function executeSum(loopType) {
    var result;
    if (loopType === 'for') {
        result = sumUsingFor();
    } else if (loopType === 'while') {
        result = sumUsingWhile();
    } else if (loopType === 'doWhile') {
        result = sumUsingDoWhile();
    }
    document.getElementById('resultSum').innerText = "Sum (1-10): " + result;
}
