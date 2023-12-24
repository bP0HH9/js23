// Задание #1

// function sumNumbers(...array) {
// 	const sum = array.reduce((acc, num) => (acc += num), 0)
// 	return sum
// }
// console.log(sumNumbers(4, 4, 4, 4))

// Задание #2

// function findMaxValue(numArr) {
// 	if (numArr.length === 0) {
// 		return 'ты петух'
// 	}
// 	let maxNum = numArr[0]
// 	numArr.forEach(num => {
// 		// if (num > maxNum) maxNum = num
// 		maxNum = num > maxNum ? num : maxNum
// 	})
// 	return maxNum
// }
// const numbers1 = [1, 2, 3, 4, 5]
// const max1 = findMaxValue(numbers1)
// console.log(max1) // 5

// const numbers2 = [10, 20, 5, 30, 15]
// const max2 = findMaxValue(numbers2)
// console.log(max2) // 30

// const emptyArray = []
// const maxEmpty = findMaxValue(emptyArray)
// console.log(maxEmpty) // undefined

// Задание #3

// function calculateAverage(arr) {
// 	if (arr.length === 0) {
// 		return 'петушара'
// 	}
// 	let sumNum = 0
// 	let countNum = 0
// 	arr.forEach(num => {
// 		sumNum += num
// 		countNum++
// 	})
// 	return sumNum / countNum
// }
// const numbers1 = [1, 2, 3, 4, 5]
// console.log(calculateAverage(numbers1)) // 3

// const numbers2 = [10, 20, 30, 40, 50]
// console.log(calculateAverage(numbers2)) // 30

// const emptyArray = []
// console.log(calculateAverage(emptyArray)) // 0

// Задание #4

// function isPalindrome(str) {
// 	const arrStr = str.split('')
// 	const reverseArr = arrStr.toReversed()
// 	return reverseArr[0] === arrStr[0]
// }
// console.log(isPalindrome('level')) // true
// console.log(isPalindrome('radar')) // true
// console.log(isPalindrome('hello')) // false

// Задание #5

// function removeDuplicates(arr) {
// 	const notDublicate = []
// 	arr.forEach(element => {
// 		if (!notDublicate.includes(element)) {
// 			notDublicate.push(element)
// 		}
// 	})
// 	return notDublicate
// }
// const numbers1 = [1, 2, 3, 3, 4, 5, 5]
// console.log(removeDuplicates(numbers1)) // [1, 2, 3, 4, 5]

// const numbers2 = [10, 20, 30, 30, 40, 40, 50]
// console.log(removeDuplicates(numbers2)) // [10, 20, 30, 40, 50]

// const emptyArray = []
// console.log(removeDuplicates(emptyArray)) // []

// Задание #6

// function createCounter(value) {
// 	let counterValue = value

// 	return {
// 		inc: function () {
// 			counterValue++
// 		},
// 		dec: function () {
// 			counterValue--
// 		},
// 		get: function () {
// 			return counterValue
// 		},
// 	}
// }

// const { inc, dec, get } = createCounter(5)
// console.log(get()) // Выведет 5
// inc()
// inc()
// inc()
// dec()
// console.log(get()) // Выведет 7
