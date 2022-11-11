import sectionPrimary from '../_temp/sections/sectionPrimary.js'
import sectionSecondary from '../_temp/sections/sectionSecondary.js.js'
import sectionTertiary from '../_temp/sections/sectionTertiary.js'

console.log(sectionPrimary)
console.log(sectionSecondary)
console.log(sectionTertiary)


const $root = document.querySelector('#root')

$root.append(sectionPrimary, sectionSecondary, sectionTertiary)
