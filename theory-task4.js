// Задание #1

// function calculateAge(date) {
// 	const curDate = new Date()
// 	// const result = curDate.getFullYear() - date.getFullYear()
// 	// const result = curDate.getTime() - date.getTime()
// 	// const msYear = 365.25 * 24 * 60 * 60 * 1000
// 	// return result / msYear
// }
// const birthDate = new Date('1990-05-20')
// const age = calculateAge(birthDate)
// console.log(age)
// console.log(birthDate.getDate())

// Задание #2

// const date1 = new Date('2027-06-01')
// const date2 = new Date('2027-06-10')
// const difference = getDateDifference(date1, date2)

// function getDateDifference(date1, date2) {
// 	const msDate = 24 * 60 * 60 * 1000
// 	const result = (date1.getTime() - date2.getTime()) / msDate
// 	return Math.abs(result)
// }
// console.log(difference) // 9

// Задание #3

// const targetDate = new Date('2027-12-31T23:59:59')
// const timeUntilTargetDate = getTimeUntilDate(targetDate)
// function getTimeUntilDate(date) {
// 	const curYear = new Date()
// 	const result = date.getTime() - curYear.getTime()
// 	const seconds = Math.round(result / 1000)
// 	const minutes = Math.round(seconds / 60)
// 	const hours = Math.round(minutes / 60)
// 	const days = Math.round(hours / 24)
// 	const monts = Math.round(days / 30)
// 	const years = Math.round(monts / 12)
// 	return {
// 		years,
// 		monts,
// 		days,
// 		hours,
// 		minutes,
// 		seconds,
// 	}
// }
// console.log(timeUntilTargetDate)

// Задание #4

// const date1 = new Date('2027-07-10') // Суббота
// const date2 = new Date('2027-07-11') // Понедельник
// console.log(date2)
// function isWeekend(date) {
// 	const result = date.toDateString()
// 	if (result.indexOf('Sat') === -1 && !result.includes('Sun')) {
// 		return false
// 	}
// 	return true
// }
// console.log(isWeekend(date1)) // true
// console.log(isWeekend(date2)) // false

// Задание #5

// function isLeapYear(year) {
// 	// if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
// 	// 	return true
// 	// }
// 	// return false
// 	return year % 4 === 0 || year % 100 === 0 || year % 400 === 0 ? true : false
// }

// console.log(isLeapYear(2023)) // false
// console.log(isLeapYear(2024)) // true

// Задание #6

// function getLastDayOfMonth(year, month) {
// 	const date = new Date(year, month + 1, 0)
// 	return date.getDate()
// }
// // июнь 2027
// console.log(getLastDayOfMonth(2027, 5)) // 30

// // февраль 2027
// console.log(getLastDayOfMonth(2027, 1)) // 28

// // январь 2027
// console.log(getLastDayOfMonth(2027, 0)) // 31
