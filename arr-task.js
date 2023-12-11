// Задание #1

// const john = {
// 	name: 'Паша',
// 	age: 28,
// 	pet: 'Кот',
// }
// const ann = {
// 	name: 'Лиза',
// 	age: 23,
// 	pet: 'Собакен',
// }
// const getInfo = function (arr) {
// 	console.log(
// 		`Меня зовут ${arr.name}, мне ${arr.age} лет, у меня есть питомец ${arr.pet}`
// 	)
// }
// const incrementAge = function (arr) {
// 	return arr.age++
// }
// for (let key in john) {
// 	console.log(key, john[key])
// }
// incrementAge(john)
// incrementAge(ann)
// getInfo(john)
// getInfo(ann)

// Задание #2

// const arr = [1, 50, 20, 75, 90]

// function sum(array) {
// 	// let sums = 0
// 	// // 	for (let i = 0; i < array.length; i++) {
// 	// // 		sums += array[i]
// 	// // 	}
// 	// array.forEach(element => {
// 	// 	sums += element
// 	// })
// 	// console.log(sums)
// 	// console.log(array.reduce((acc, e) => (acc += e), 0))
// }

// sum(arr) // 236

// Задание #3

// const names = []

// names.push('Лиза')
// names.push('Оля')
// names.push('Ирина')
// names.push('Анатолий')
// names.push('Павел')
// console.log(names)

// names.shift()
// names.pop()
// console.log(names)

// Задание #4

// const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya']

// function createListHTML(array) {
// 	// let listHTML = '<ul>'
// 	// array.forEach(element => {
// 	// 	listHTML += `<li>${element}<li/>`
// 	// })
// 	// listHTML += '</ul>'
// 	// return listHTML
// 	// const listHTML = array.map(e => `<li>${e}</li>`)
// 	// const stringHTML = `<ul>${listHTML.join('')}</ul>`
// 	// return stringHTML
// }
// createListHTML(names)

// Задание #5

// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300,
// }

// const { age, favColor, height, pet, money } = obj
// console.log(age, favColor, height, pet)

// Задание #6

// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300,
// }

// const updateObj = {
// 	age: 23,
// 	favColor: 'blue',
// 	money: 11450,
// }

// const obj2 = {
// 	...obj, 
// 	...updateObj
// }
// console.log(obj2)
