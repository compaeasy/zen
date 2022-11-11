import data from '../data/data.js'

console.log(data)

const sectionSecondary = data.sectionSecondary

console.log(sectionSecondary)


//  Секция

const section = document.createElement('section')
section.className = 'section'

// Заголовок

const title = document.createElement('h2')
title.textContent = sectionSecondary.title
title.className = 'section__title'

// Текст

const copySecondaryFirst = document.createElement('p')
copySecondaryFirst.textContent = sectionSecondary.texts[0]
copySecondaryFirst.className = 'section__copy'

// Текст

const copySecondarySecond = document.createElement('p')
copySecondarySecond.textContent = sectionSecondary.texts[1]
copySecondarySecond.className = 'section__copy'

// Картинка 

const image = document.createElement('img')
image.src = sectionSecondary.image.data
image.className = 'section__image'
image.alt = sectionSecondary.image.alernate
image.style.width = sectionSecondary.image.width



section.append(title, copySecondaryFirst, copySecondarySecond, image)

// console.log($root.toString())

// console.dir(HTMLDivElement)

// console.dir(Document)

export default section