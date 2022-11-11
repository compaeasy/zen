import Menu from './components/Menu.js'
import Logo from '../../ui/Logo.js'
import MoonIcon from '../../ui/MoonIcon.js'

const Header = (header) => {

  if (!Object.keys(header).length) return ''

  const { name, menuButtons } = header
  const className = name

  return `
    <header 
      class="${className}" 
      data-name="${name}"
    >
      <div class="${className}__wrapper">
        <nav class="${className}__nav">
          <button 
            class="${className}__logo" 
            data-btn="root"
          >
            ${Logo()}
          </button> 
          
          ${Menu(menuButtons, className)}
        </nav> 

        <button 
          class="${className}__theme" 
          data-btn="theme"
        >
          ${MoonIcon()}
        </button>

        <button 
          class="${className}__burger" 
          data-btn="burger"
        >
          <span></span>
        </button>    
      </div>
    </header>
  `
}

export default Header