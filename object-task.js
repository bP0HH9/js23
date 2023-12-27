// Задание #1

// class Circle {
// 	constructor(radius) {
// 		this.radius = radius
// 	}
// 	gerArea() {
// 		return (Math.PI * this.radius ** 2).toFixed(2)
// 	}
// }

// const circle = new Circle(5)
// console.log(circle.gerArea())

// Задание #2

// class Product {
// 	constructor(name, price) {
// 		this.name = name
// 		this.price = price
// 	}
// 	priceWithDiscount(discount) {
// 		const disc = discount * 0.01
// 		return this.price - this.price * disc
// 	}
// }
// const product = new Product('Phone', 1000)
// console.log(product.priceWithDiscount(10)) // 900
// console.log(product.priceWithDiscount(20)) // 800

// Задание #3

// class Person {
// 	constructor(frends) {
// 		this.frends = frends
// 	}
// 	addFriend(name) {
// 		this.frends.push(name)
// 	}
// 	showFriends() {
// 		console.log(this.frends)
// 	}
// }
// const person = new Person([])

// person.addFriend('Иван')
// person.addFriend('Сергей')
// person.addFriend('Игорь')
// person.showFriends() // Иван, Сергей, Игорь

// Задание #4

// class Animal {
// 	constructor(name, favoriteFood) {
// 		this.name = name
// 		this.favoriteFood = favoriteFood
// 	}
// 	makeSound() {
// 		console.log(`${this.name} издает звук`)
// 	}
// 	sayName() {
// 		console.log(`Животное по имени ${this.name}`)
// 	}
// 	sayInfo() {
// 		console.log(`Любимый хавчик у ${this.name} - ${this.favoriteFood}`)
// 	}
// }
// class Dog extends Animal {
// 	makeSound() {
// 		console.log(`${this.name} гавкает`)
// 	}
// }
// class Cat extends Animal {
// 	makeSound() {
// 		console.log(`${this.name} мяукает`)
// 	}
// }
// const dog = new Dog('Rex', 'Meat')
// const cat = new Cat('Barsik', 'Fish')

// cat.makeSound() // Meow
// dog.makeSound() // Gav!

// dog.sayName() // My name is Rex
// cat.sayName() // My name is Barsik

// dog.sayInfo() // Rex's favorite food is Meat
// cat.sayInfo() // Barsik's favorite food is Fish

// Задание #5

// const foo = {
// 	a: 5,
// 	baz: () => {
// 		console.log(this.a) // не создает собственный контекст, заимствует его из глобального объекта - window, в котором нет поля "a" - выведет undefined
// 	},
// 	bar: function () {
// 		console.log(this.a)
// 	},
// }
// foo.baz()
// foo.bar()

// Задание #6

// const boxFactory = {
// 	type: 'box',
// 	count: 0,
// 	produce: function () {
// 		this.count++
// 		return 'Box №' + this.count
// 	},
// }

// const produceBox = produceFn => {
// 	const boxName = produceFn()
// 	console.log(boxName)
// }

// for (let i = 0; i < 25; i++) {
// 	produceBox(boxFactory.produce.bind(boxFactory))
// }
