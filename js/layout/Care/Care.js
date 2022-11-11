import Title from '../../components/Title.js'
import Text from '../../components/Text.js'
import Image from '../../components/Image.js'

/**
 * @param {object} data 
 * @returns {string}
 */

const Care = (data) => {
  if (!Object.keys(data).length) return ''

  const { name, title, texts, image } = data

  console.log({data})

  const className = name

  return `
    <section class="${className}" data-name=${name}>
      <div class="container">
        <div class="${className}__wrapper">
          <div class="${className}__body">
            ${title 
              ? Title(title, className) 
              : ''
            }
            ${texts 
              ? texts.map((text) => Text(text, className)).join('') 
              : ''
            }
          </div>
          <div class="${className}__image">
            ${image 
              ? Image(image) 
              : ''
            }
          </div>
        </div>
      </div>
    </section>
  `
}

export default Care