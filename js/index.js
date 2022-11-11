import App from './App.js'
import { API_BASE_URL } from './constans/api.js'
import Preloader from './components/Preloader.js'
import SunIcon from './ui/SunIcon.js'
import MoonIcon from './ui/MoonIcon.js'
import { 
  handleLogoButtonClick,
  handleThemeButtonClick,
  handleBurgerButtonClick ,
  handleButtonOrderClick,
  handleButtonOrderCloseClick,
  handleWindwowScroll,
  handleInputsValueKeyup,
  //handleFormSubmit
  removeBurgerAndMenuActive
} from './utils/handlers.js'

const isDarkTheme = localStorage.getItem('darkTheme') === 'true'

const $root = document.querySelector('#root')
$root.innerHTML = Preloader(isDarkTheme)

fetch(API_BASE_URL)
  .then((response) => response.json())
  .then((data) => {
    // console.log({data})
    const $preloader = document.querySelector('#preloader')
  
    setTimeout(() => {
      // Удаляю прелоадер через 2 сек
      $preloader.remove() 
    }, 2000) 

    $root.insertAdjacentHTML('beforeend', App(data))

    const $buttons = document.querySelectorAll('[data-target]')

    $buttons.forEach((button) => button.addEventListener('click', (event) => {
      const target = event.currentTarget.dataset.target
      const $header = document.querySelector('[data-name="header"]')
      const $section = document.querySelector(`[data-name="${target}"]`)

      const clientPosition = window.pageYOffset
      const headerHeight = $header.getBoundingClientRect().height
      const sectionPosition = $section.getBoundingClientRect().top
      const targetPosition = clientPosition + sectionPosition - headerHeight

      console.log({headerHeight})
      console.log({clientPosition})
      console.log({targetPosition})

      removeBurgerAndMenuActive()
      
      window.scrollTo(0, targetPosition)
    }))

    const $body = document.body
    const $header = $body.querySelector('[data-name="header"]')
    const $logoButton = document.querySelector('[data-btn="root"]')
    const $inputs = document.querySelectorAll('[data-input]')
    const $themeButton = document.querySelector('[data-btn="theme"]')
    const $menu = $body.querySelector('[data-name="menu"]')
    const $burgerButton = document.querySelector('[data-btn="burger"]')
    const $modalButtonOrder = document.querySelector('[data-btn="order"]')
    const $modalButtonClose = document.querySelector('[data-btn="close"]')

    const $clientsNodes = document.querySelectorAll('[data-type="client"]')
    // console.log({$clientsNodes})

    const lightThemeClients = data.clients.lightThemeClients
    const darkThemeClients = data.clients.darkThemeClients

    // console.log({lightThemeClients})
    // console.log({darkThemeClients})
    
    if (isDarkTheme) {
      console.log('Сейчас тёмная тема')
      localStorage.removeItem('darkTheme')
    //localStorage.clear()
      localStorage.setItem('darkTheme', true)
      $body.classList.add('dark')
      $header.classList.add('dark')
      $menu.classList.add('dark')
      $modalButtonOrder.classList.add('dark')
      $themeButton.innerHTML = SunIcon()

      $clientsNodes.forEach((clientsNode, index) => {
        clientsNode.src = darkThemeClients[index].data
        // console.log(darkThemeClients[index].data)
      })
    } else {
      console.log('Сейчас светлая тема')
      localStorage.removeItem('darkTheme')
      //localStorage.clear()
      localStorage.setItem('darkTheme', false)
      $body.classList.remove('dark')
      $header.classList.remove('dark')
      $menu.classList.remove('dark')
      $modalButtonOrder.classList.remove('dark')
      $themeButton.innerHTML = MoonIcon()

      $clientsNodes.forEach(() => {})

      $clientsNodes.forEach((clientsNode, index) => {
      clientsNode.src = lightThemeClients[index].data
      })
    }
    
    window.addEventListener('scroll', handleWindwowScroll)
    $logoButton.addEventListener('click', handleLogoButtonClick)
    $inputs.forEach((input) => input.addEventListener('keyup', handleInputsValueKeyup))
    $themeButton.addEventListener('click', () => handleThemeButtonClick($clientsNodes, lightThemeClients, darkThemeClients))

    // console.log({$clientsNodes})

    $burgerButton.addEventListener('click', handleBurgerButtonClick)
    $modalButtonOrder.addEventListener('click', handleButtonOrderClick)
    $modalButtonClose.addEventListener('click', handleButtonOrderCloseClick)
  })
  .catch((error) => console.error(error))
