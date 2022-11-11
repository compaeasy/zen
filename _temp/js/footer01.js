import Text from '../components/Text.js'
import Zen from '../ui/Zen.js'
import Column from '../components/Column.js'
import Title from '../components/Title.js'

/** 
 * @param {object} footer 
 * @returns {string}
 */

const Footer = (footer) => {
  
  if (!Object.keys(footer).length) {
    return ''
  }  

  const className = footer.name
  
    return `
      <footer class="${className}">
        <div class="${className}__wrapper">
          <div class="${className}__columns">
                ${Column(footer.columnPrimary)}
                ${Column(footer.columnSecondary)}
                ${Column(footer.columnTertiary)}
                ${Column(footer.columnQuaternary)}
                ${Column(footer.columnQuinary)}
                ${Column(footer.columnSenary)}    
          </div>
          <div class="footer__info">
            <button class="${className}__logo" data-btn="root">${Zen()}</button>
            ${footer.texts ? footer.texts.map(text => Text(text, className)).join('') : ''}
          </div>
        </div>
      </footer>
    `
}

export default Footer