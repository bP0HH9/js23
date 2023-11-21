// Задание #1

// let a = 9823

// Решение через тернарный оператор и инкремент
// console.log(a % 2 === 0 ? 'Число четное' : 'Число нечетное', a++)
// console.log(a % 2 === 0 ? 'Число четное' : 'Число нечетное', a++)
// console.log(a % 2 === 0 ? 'Число четное' : 'Число нечетное', a++)
// console.log(a % 2 === 0 ? 'Число четное' : 'Число нечетное', a++)
// console.log(a % 2 === 0 ? 'Число четное' : 'Число нечетное', a++)
// console.log(a)

// Стандартное через констукцию if-else

// if (a % 2 === 0) {
// 	console.log('Число четное')
// } else {
// 	console.log('Число нечетное')
// 	a += 1
// }
// console.log(a)

// Задание #2

// Мой любимый тернарный опертор
// for (let i = 0; i <= 1000; i++) {
// 	i % 2 !== 0 || i % 12 === 0 ? console.log(i) : null
// }

// Дефолтный if

// for (let i = 0; i <= 1000; i++) {
//   if (i % 2 !== 0 || i % 12 === 0) {
//     console.log(i);
//   }
// }

// Задание #3

// Юзаем метод push(), загоняя им полученные элементы в новый массив
// const arr = [1, 10, 15, -100, -23, 19, 15032]
// const arr2 = []
// for (let i = 0; i < arr.length; i++) {
// 	arr2.push((arr[i] += arr[i] * 0.25))
// }
// console.log(arr2)

// Задание #4

// Юзаем конструкцию с значениями по умолчанию для параметров функций
// function sayHello(name = "someone"){
// 	return `Hello, ${name}!`
// }

// Решение через if и тернарник соответственно
// function sayHello(name) {
// 	// if (name) {
// 	// 	return `Hello, ${name}!`
// 	// } else {
// 	// 	return 'Hello, someone!'
// 	// }
// 	return name ? `Hello, ${name}` : 'Hello, someone!'
// }

// console.log(sayHello())

// Задание #5

// Решение через if
// function calc(a, b, operator) {
// 	if (operator === '+') {
// 		return a + b
// 	}
// 	if (operator === '-') {
// 		return a - b
// 	}
// 	if (operator === '*') {
// 		return a * b
// 	}
// 	if (operator === '/') {
// 		return a / b
// 	}
// }

// Решение через switch

// function calc(a, b, operator) {
// 	switch (operator) {
// 		case '+':
// 			return a + b
// 			break
// 		case '-':
// 			return a - b
// 			break
// 		case '*':
// 			return a * b
// 			break
// 		case '/':
// 			return b !== 0 ? a / b : 'Ты инвалид'
// 			break
// 		default:
// 			console.log('Ты клоун')
// 	}
// }
// console.log(calc(1, 0, '/'))

// Задание #6

// Решение
// const age = 22
// const category = age >= 18 ? 'Взрослый' : 'Школьник'
// console.log(category)

// Задание #7

//Решение
// const a = 550
// const b = 93

// const c = a > b ? a : b
// console.log(c)
