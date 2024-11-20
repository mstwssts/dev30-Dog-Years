// myAge returns my age in years,
var myAge = 22

// earlyYears is set to 2 years
var earlyYears = 2

// The first two human years of a dog's life count as 10.5 dog years each.
earlyYears = earlyYears * 10.5

// We proceed to subtract 2 from myAge and assign it to a new variable (laterYears)
var laterYears = myAge - 2

// Multiply laterYears by 4 to calculate the number of dog years accounted by later years
laterYears *= 4

// To get my age in dog years we add earlyYears and laterYears together
var myAgeInDogYears = earlyYears + laterYears

// write name as a string and use .toLowerCase method to return a string with all lowercase letters
var myName = "Marvin".toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
