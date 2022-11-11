import Title from '../../components/Title.js'
import Text from '../../components/Text.js'


/**
 * @param {object} data 
 * @returns {string}
 */

const CashBack = (data) => {
  
  if (!Object.keys(data).length) return ''

  const { name, title, texts} = data

  const className = name

  const button = name.Buttontext
    ? `<button class="${className}__btn" data-name="order">${name.buttonText}</button>`
    : `<button class="${className}__btn" data-btn="order">Order a consultation</button>`

    console.log({data})

  return `
    <section class="${className}" data-name="${name}">
      <div class="container">
        <div class="${className}__wrapper">
          <div class="${className}__body">
            ${title 
              ? Title(title, className) 
              : ''
            }
            ${texts 
              ? texts.map(text => Text(text, className)).join('') 
              : ''
            }
            ${button}  
          </div>    
        </div>
      </div>
    </section>
  `
  
   
}

export default CashBack



/* 
const className = cashback.name

  const button = cashback.buttonText
    ? `<button class="${className}__btn">${cashback.buttonText}</button>` 
    : `<button class="${className}__btn">Order</button>` 
 
  return `
    <section class="${className}" data-name="${cashback.name}">
      <div class="container">
        <div class="${className}__wrapper">
          <div class="${className}__body">
            ${cashback.title ? Title(cashback.title, className) : ''}
            ${cashback.texts ? cashback.texts.map(text => Text(text, className)).join('') : ''}
            ${button}
          </div>
        </div>
      </div>
    </section>
  ` 
*/