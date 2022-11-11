import { validateForm } from './helper.js'
import SunIcon from '../ui/SunIcon.js'
import MoonIcon from '../ui/MoonIcon.js'

export const handleThemeButtonClick = (
    clientsNodes, 
    lightThemeClients, 
    darkThemeClients
  ) => {

  if (clientsNodes && lightThemeClients && darkThemeClients) {
    
    // console.log('------------------')
    // console.log({clientsNodes})
    // console.log({lightThemeClients})
    // console.log({darkThemeClients})

    const $body = document.body
    const $header = $body.querySelector('[data-name="header"]')
    const $themeButton = $header.querySelector('[data-btn="theme"]')
    const $menu = $header.querySelector('[data-name="menu"]')
    const $burger = $body.querySelector('[data-btn="burger"]')
    const $modalButtonOrder = $body.querySelector('[data-btn="order"]')

    if ($body.classList.contains('dark')) {
      localStorage.removeItem('darkTheme')
      localStorage.setItem('darkTheme', false)
      $body.classList.remove('dark')
      $header.classList.remove('dark')
      $menu.classList.remove('dark')
      $modalButtonOrder.classList.remove('dark')
      $themeButton.innerHTML = MoonIcon()
      clientsNodes.forEach((clientsNode, index) => {
        console.log('--------------------------------')
        console.log('Светлая тема картинка:', lightThemeClients[index].data)
        console.log('Старая картинка:', clientsNode.src)
        console.log(clientsNode)
        clientsNode.src = lightThemeClients[index].data
      })
    } else if (!$body.classList.contains('dark')) {
      localStorage.removeItem('darkTheme')
      //localStorage.clear()
      localStorage.setItem('darkTheme', true)
      $body.classList.add('dark')
      $header.classList.add('dark')
      $menu.classList.add('dark')
      $modalButtonOrder.classList.add('dark')
      $themeButton.innerHTML = SunIcon()
      clientsNodes.forEach((clientsNode, index) => {
        clientsNode.src = darkThemeClients[index].data
      })
    }
  } else {
    return
  }
}

export const handleBurgerButtonClick = (event) => {
  const $burger = event.currentTarget
  const $menu = document.querySelector('[data-name="menu"]')
 
  $burger.classList.toggle('active')
  $menu.classList.toggle('active')
}

export const removeBurgerAndMenuActive = () => {
  const $menu = document.querySelector('[data-name="menu"]')
  const $burger = document.querySelector('[data-name="burger"]') // Спросить зачем подключать бургер
  
  $menu.classList.remove('active')
  $menu.classList.remove('burger')
}

export const handleButtonOrderClick = () => {
  const $body = document.body
  const $modal = document.querySelector('[data-name="modal"]')
  $body.style.overflow = 'hidden'
  $modal.classList.add('active')
}

export const handleButtonOrderCloseClick = () => {
  const $body = document.body
  const $modal = document.querySelector('[data-name="modal"]')
  $body.style.overflow = ''
  $modal.classList.remove('active')
}

export const handleLogoButtonClick = () => {
  
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    
  const $body = document.body
  const $burger = $body.querySelector('[data-btn="burger"]')
  const $menu = $body.querySelector('[data-btn="menu"]')

  $burger.classList.remove('active')
  $menu.classList.remove('active')
}

export const handleInputsValueKeyup = (event) => {
  validateForm(event.currentTarget)
}


export const handleWindwowScroll = () => {
  // объект данных
const clientRect = document.body.getBoundingClientRect()

//высота прокрутки

const clientPassed = Math.abs(clientRect.top)

// высота всего документа
const clientHeight = document.body.clientHeight

// высота нашего экрана (viewport)

const screenHeight = window.screen.height

// высота сколько не прокручено

const clientNotPassed = clientHeight - screenHeight

// процент прокрученной области

const percentPassed = Math.floor(clientPassed / clientNotPassed * 100)

// получить progress 

const $progressBar = document.querySelector('[data-name="progress-bar"]')

$progressBar.style.width = `${percentPassed}%`

// console.log('-----------------------------------------')
// console.log({clientRect})
// console.log({clientPassed})
// console.log({clientHeight})
// console.log({screenHeight})
// console.log({clientNotPassed})
// console.log({percentPassed})
}

export const handleWindowLoad = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
    console.log({isDarkTheme})
  if (isDarkTheme) {
    console.log('Виктор, включи тёмную тему')
  } else {
    console.log('Виктор, включи светлую тему')
  }
}