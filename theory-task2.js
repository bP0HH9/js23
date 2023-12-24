// Задание #1

// const car = {
// 	name: 'Hendai Solaris',
// 	type: 'sedan',
// 	maxSpeed: '320',
// 	color: 'red',
// }
// function createCarHTML(obj) {
// 	const htmlString = `<article>
// 	<div>
// 			<h2>${obj.name}</h2>
// 			<span>${car.type}</span>
// 	</div>
// 	<div>
// 			<span>Maximum speed:</span>
// 			<span>${obj.maxSpeed}</span>
// 	</div>
// 	<div>
// 			<span>Color:</span>
// 			<span>${obj.color}</span>
// 	</div>
// </article>`
// 	return htmlString
// }
// const carHTML = createCarHTML(car)
// console.log(carHTML)

// Задание #2

// const text = 'Я боюсь промисов и ассинхронности'
// function countWords(sentence) {
// 	let count = 0
// 	const arrText = text.split(' ')
// 	arrText.forEach(element => {
// 		count++
// 	})
// 	return count
// }

// console.log(countWords(text))

// Задание #3

// const myName = 'Daniil Syuzev'
// const Sanya = 'Alexander Melov'
// function getInitial(name) {
// 	const arrName = name.split(' ')
// 	const initName = []
// 	arrName.forEach(name => {
// 		initName.push(name.slice(0, 1) + '.')
// 	})
// 	return initName.join(' ')
// }
// console.log(getInitial(Sanya))

// Задание #4

// function generateGoogleString(count = 2) {
// 	if (count < 2) {
// 		return 'Google'
// 	}
// 	let oStr = 'o'
// 	return `G${oStr.repeat(count)}gle`
// }
// console.log(generateGoogleString(4))
// // Goooogle

// console.log(generateGoogleString(0))
// // Google

// console.log(generateGoogleString(-2))
// // Google

// Задание #5

// const str = 'Hello, Привет!'
// function isVowel(char) {
// 	const vowels = 'aeiouаеёиоуыэюяAEIOUАЕЁИОУЫЭЮЯ'
// 	return vowels.indexOf(char)
// }

// function countVowels(str) {
// 	let counter = 0
// 	for (let elem of str) {
// 		if (isVowel(elem) !== -1) {
// 			counter++
// 		}
// 	}
// 	return counter
// }

// console.log(countVowels(str))
