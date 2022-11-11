import Title from '../../components/Title.js'
import Text from '../../components/Text.js'
import Link from './components/Link.js'
import Image from '../../components/Image.js'

const Download = (data) => {
  if (!Object.keys(data).length) return ''

  const {name, title, texts, links, image} = data

  

  const className = name

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
              ? texts.map((text) => Text(text, className)).join('') 
              : ''
            }

            <div class="${className}__links">
              ${links.length 
                ? links.map(link => Link(link, className)).join('') 
                : ''
              }
            </div>
          </div>
          <div class="${className}__image">
            ${image ? Image(image) : ''}
          </div>
        </div>
      </div>
    </section>
  `
}

export default Download