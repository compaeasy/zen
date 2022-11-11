//  Секция

const $root = document.querySelector('#root')
const section = document.createElement('section')
section.className = 'section'

// Заголовок

const title = document.createElement('h1')
title.textContent = 'Peaceful shopping mindful money'
title.className = 'section__title'

// Текст

const copy = document.createElement('p')
copy.textContent = 'See how we can help with making your shopping experience and money management more ZEN.'
copy.className = 'section__copy'

// Картинка 

const image = document.createElement('img')
image.src = '/image/1.png'
image.className = 'section__image'
image.alt = 'some description'

//  Секция Primary

const sectionPrimary = document.createElement('section')
sectionPrimary.className = 'section'

// Заголовок Primary 

const titlePrimary = document.createElement('h2')
titlePrimary.textContent = '1-year warranty boost'
titlePrimary.className = 'section__title'

// Текст Primary

const copyPrimary = document.createElement('p')
const copyPrimarySecond = document.createElement('p')
copyPrimary.textContent = 'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.'
copyPrimarySecond.textContent = 'When you buy any electronics with your ZEN shopping Mastercard, their warranty gets extended by one year. How does it work? It simply does. Automatically.'
copyPrimary.className = 'section__copy'
copyPrimarySecond.className = 'section__copy'

// Картинка Primary

const imagePrimary = document.createElement('img')
imagePrimary.src = '/image/2.png'
imagePrimary.className = 'section__image'

imagePrimary.alt = 'some description'

$root.append(section, sectionPrimary)
section.append(title, copy, image)
sectionPrimary.append(titlePrimary, copyPrimary, copyPrimarySecond, imagePrimary)

// console.log($root.toString())

console.log($root)
// console.dir(HTMLDivElement)

// console.dir(Document)