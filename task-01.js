// Задание #1

// var a = 5
// let b = 10
// const c = 13

// console.log(a)
// console.log(b)
// console.log(c)

// a = 6
// b = 11
// // c = 14 // Нельзя изменять значения переменных, заданных с const

// console.log(a)
// console.log(b)
// console.log(c)

// Задание #2

// const a = 100
// a = 20
// console.log(a) // Переменные с const изменять нельзя

// console.log(a)
// let a = 15
// console.log(a) // Ошибка, т.к. переменные с let недоступны до их объявления(no hoisting)

// console.log(a) // Выведет undefined, т.к. для var лишь объявление переменной имеет глобальную область видимости и доступно до ее инициализации, но не присвоение значения
// var a
// a = 10
// console.log(a)

// Задание #3

// const productName = 'Хлеб'
// const productPrice = 100
// const productQuantity = 40
// const resultCost = productPrice * productQuantity

// console.log(
// 	'Вы купили ' +
// 		productName +
// 		'(' +
// 		productQuantity +
// 		'шт.) по ' +
// 		productPrice +
// 		'₽. Всего было потрачено: ' +
// 		resultCost +
// 		'₽'
// ) // Использование шаблонных строк с `` и с местазаполнителями ${}

// console.log(
// 	`Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽`
// ) // Стандартная конкатенация с +

// Задание #4

// console.log("'hello'", typeof 'Hello') // Stringd
// console.log('10', typeof 10) // Number
// console.log('{}', typeof {}) // Object
// console.log('null', typeof null) // Object-null
// console.log('undefined', typeof undefined) // undefined
// console.log('true', typeof true) // Boolean
// console.log('[]', typeof []) // Object
// console.log('(() => {})', typeof (() => {})) // Function

// Задание #5

// console.log('10 == 10', 10 == 10)
// console.log('10 != 10', 10 != 10)
// console.log("12 == 'Привет'", 12 == 'Привет')
// console.log('10 < 11', 10 < 11)
// console.log('12 > 20', 12 > 20)
// console.log('true && true', true && true)
// console.log('true && false', true && false)
// console.log('false && true', false && true)
// console.log('false || true', false || true)
// console.log('true || false', true || false)
// console.log('true || true', true || true)
// console.log('10 <= 10', 10 <= 10)
// console.log('18 <= 20', 18 <= 20)
// console.log('50 >= 50', 50 >= 50)
// console.log('51 >= 50', 51 >= 50)
// console.log('{} === {}', {} === {}) // Здесь создаются два разных объекта, которые всегда не равны друг другу
// console.log('{} == {}', {} == {}) // То же самое, даже если их структура будет одинаковой, равны они не будут

// const a = {}
// const b = a
// console.log(a === b) // В этом случае a и b ссылаются на один и тот же объект

// Задание #6

// const a = 4
// const b = 2
// console.log(a > b);
