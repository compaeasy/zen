import data from '../../js/data/data.js'

console.log(data)

const sectionTertiary = data.sectionTertiary

console.log(sectionTertiary)

const section = document.createElement('section')
section.className = 'section'

// Заголовок

const title = document.createElement('h2')
title.textContent = sectionTertiary.title
title.className = 'section__title'

// Текст

const copyTertiaryFirst = document.createElement('p')
copyTertiaryFirst.textContent = sectionTertiary.texts[0]
copyTertiaryFirst.className = 'section__copy'

// Текст

const copyTertiarySecond = document.createElement('p')
copyTertiarySecond.textContent = sectionTertiary.texts[1]
copyTertiarySecond.className = 'section__copy'

// Текст

const copyTertiaryThird = document.createElement('p')
copyTertiaryThird.textContent = sectionTertiary.texts[2]
copyTertiaryThird.className = 'section__copy'

// Картинка 

const image = document.createElement('img')
image.src = sectionTertiary.image.data
image.className = 'section__image'
image.alt = sectionTertiary.image.alternate
image.style.width = sectionTertiary.image.width

section.append(title, copyTertiaryFirst, copyTertiarySecond, copyTertiaryThird, image)

export default section