import getTitle from './components/title.js'
import getText from './components/texts.js'
import {sectionPrimary, sectionSecondary, sectionTertiary} from './data/data.js'
import Section from './layout/Section.js'


//console.log(sectionPrimary)
//console.log(sectionSecondary)
//console.log(sectionTertiary)

const sections = [sectionPrimary, sectionSecondary, sectionTertiary]

const section = Section(sections)

const $root = document.querySelector('#root')

//$root.insertAdjacentElement('beforeend', section)

const titleHtmlString = sections
.map(section => `<h1>${getTitle(section)}</h1>`)
.join('')

console.log(titleHtmlString)

const textHtmlString = sections
.map(section => `<h1>${getText(section)}</h1>`)
.join('')

console.log(textHtmlString)

const imageHtmlString = sections
.map(section => `<img src="${getTitle(section)}"></h1>`)
.join('')

console.log(imageHtmlString)

$root.insertAdjacentElement('beforeend', titleHtmlString)
$root.insertAdjacentElement('beforeend', textHtmlString)
$root.insertAdjacentElement('beforeend', imageHtmlString)



//console.log(getTitle(sectionPrimary))
//console.log(getTitle(sectionSecondary))
//console.log(getTitle(sectionTertiary))


// console.log(data.sectionPrimary)
//console.log(Section())
// console.log($root)
