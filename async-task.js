// Задание #1

// console.log('a')
// new Promise(resolve => {
// 	console.log('b')
// 	setTimeout(() => {
// 		console.log('c')
// 		resolve()
// 	}, 0)
// }).then(() => console.log('d'))

// console.log('e')
// setTimeout(() => console.log('f'), 0)
// console.log('g')

// a e b b c d f

// Задание #2

// const task = document.querySelector('.task')
// // console.log(task)

// const url = 'https://jsonplaceholder.typicode.com/todos'

// const start = async () => {
// 	try {
// 		const resp = await fetch(url)
// 		const data = await resp.json()
// 		data.map(e => {
// 			task.innerHTML += `<li>${e.title}</li>`
// 		})
// 	} catch (err) {
// 		console.log(err)
// 	}
// }

// start()

// Задание #3

// function sumWithDelay(delay, a, b) {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			const result = a + b
// 			resolve(result)
// 		}, delay)
// 	})
// }

// async function start() {
// 	const result = await sumWithDelay(1000, 5, 5)
// 	console.log(result)
// }

// start()

// Задание #4

// const USERS = [
// 	{ id: '001', name: 'Алексей', age: 25 },
// 	{ id: '002', name: 'Иван', age: 28 },
// 	{ id: '003', name: 'Егор', age: 30 },
// ]

// function fetchUser(id) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const user = USERS.find(user => {
// 				return user.id === id
// 			})
// 			if (user) {
// 				resolve(user)
// 			} else {
// 				reject(new Error(`Пользователь с id ${id} не найден`))
// 			}
// 		}, 2500)
// 	})
// }
// async function start() {
// 	try {
// 		const result = await fetchUser('001')
// 		console.log(result) // { id: '001', name: "Алексей", age: 25 }
// 	} catch (err) {
// 		console.log(err.message)
// 	}
// 	// ...
// }

// start()
