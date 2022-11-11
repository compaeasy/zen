import Text from '../../components/Text.js'
import ZenIcon from '../../ui/ZenIcon.js'
import Column from './components/Column.js'
import PciIcon from '../../ui/PciIcon.js'

const Footer = (footer) => {

  const { columns, info, name } = footer
  
  if(!Object.keys(footer).length) return ''
 
  const className = name

    return `
      <footer class="${className}" data-name="${name}">
      <div class="container">
        <div class="${className}__wrapper">
          <div class="${className}__columns">
            ${columns.map(column => Column(column, className)).join('')}
          </div>
  
          <div class="${className}__info">
            <button class="${className}__logo" data-btn="root">
              ${ZenIcon()}
            </button>
            ${info.texts.length 
              ? info.texts
              .map(text => Text(text, className))
              .join('') 
              : ('')
            }
            <a 
              href="${info.copyright.url}" 
              class="${className}__copyright" 
              target="_blank"
            >
              <img 
                src=""
                alt=""
              >
              ${PciIcon()}
            </a>
          </div>
        </div>
      </div>  
      </footer>
    `
}

export default Footer