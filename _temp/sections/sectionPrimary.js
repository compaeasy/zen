import data from '../../js/data/data.js'

console.log(data)

const sectionPrimary = data.sectionPrimary

console.log(sectionPrimary)

//  Секция

const section = document.createElement('section')
section.className = 'section'

// Заголовок

const title = document.createElement('h1')
title.textContent = sectionPrimary.title
title.className = 'section__title'

// Текст

const copy = document.createElement('p')
copy.textContent = sectionPrimary.texts[0]
copy.className = 'section__copy'

// Картинка 

const image = document.createElement('img')
image.src = sectionPrimary.image.data
image.className = 'section__image'
image.alt = sectionPrimary.image.alternate
image.style.width = sectionPrimary.image.width



section.append(title, copy, image)

// console.log($root.toString())

// console.dir(HTMLDivElement)

// console.dir(Document)

export default section