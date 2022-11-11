import data from './data/data.js'
import App from './App.js'
import {handleBurgerClick} from './utils/handlers.js'
import { handleThemeClick } from './utils/handlers.js'
import { handleButtonOrderClick } from './utils/handlers.js'
import { handleWindwowScroll } from './utils/handlers.js'
import { handleButtonOrderCloseClick } from './utils/handlers.js'

const $root = document.querySelector('#root')

$root.insertAdjacentHTML('beforeend', App(data))

const $clientsImages = document.querySelectorAll('[data-type="client"]')
const $buttons = document.querySelectorAll('[data-btn="menu"]')
const $burger = document.querySelector('[data-btn="burger"]')
const $themeButton = document.querySelector('[data-btn="theme"]')
const $modalButtonOrder = document.querySelector('[data-btn="buttonOrder"]')
const $modalButtonClose = document.querySelector('[data-btn="close"]')

$burger.addEventListener('click', handleBurgerClick)
$themeButton.addEventListener('click', () =>  handleThemeClick())
$modalButtonOrder.addEventListener('click', handleButtonOrderClick)
$modalButtonClose.addEventListener('click', handleButtonOrderCloseClick)
$buttons.forEach((button) => button.addEventListener('click', (event) =>{
  console.dir(event.currentTarget.dataset)
}))
console.log($buttons)
window.addEventListener('scroll', handleWindwowScroll)
