// Задание #1

// function isPrimeNumber(number) {
// 	if (number <= 1) {
// 		return false
// 	}
// 	for (let i = 2; i < number; i++) {
// 		if (number % i === 0) {
// 			return false
// 		}
// 	}
// 	return true
// }

// console.log(isPrimeNumber(1))

// Задание #2

// const func = function (num, min, max) {
// 	if (num < min) return min ** 2
// 	if (num > max) return max ** 2
// 	if (num < max - (max - min) / 2) return num ** 2
// 	else return Math.floor(num)
// }
// console.log(func(3, 1, 10)) // 9
// console.log(func(15, 1, 10)) // 100
// console.log(func(5, 1, 10)) // 25
// console.log(func(8.5, 1, 10)) // 8

// Задание #3

// const isPerfectNumber = num => {
// 	let sum = 0
// 	for (let i = 1; i < num; i++) {
// 		if (num % i === 0) {
// 			sum += i
// 		}
// 	}
// 	return sum === num ? true : false
// }
// console.log(isPerfectNumber(6)) // true
// console.log(isPerfectNumber(28)) // true
// console.log(isPerfectNumber(12)) // false
// console.log(isPerfectNumber(16)) // false

// Задание #4

// function getNumberDigit(number, digitPosition) {
// 	// const numbStr = number.toString()
// 	// console.log(numbStr[digitPosition])
// 	let digitArray = []
// 	let absoluteNumber = Math.abs(number)

// 	while (absoluteNumber > 0) {
// 		digitArray.unshift(absoluteNumber % 10)
// 		absoluteNumber = Math.floor(absoluteNumber / 10)
// 	}
// 	console.log(digitArray[digitPosition])
// }
// getNumberDigit(123, 0) // 1
// getNumberDigit(123, 1) // 2
// getNumberDigit(123, 2) // 3
// getNumberDigit(1, 2) // undefined
