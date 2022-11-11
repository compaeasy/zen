// import Image from '../../components/Image.js'

/** 
 * @param {object} data
 * @returns {string}
 */

const Clients = (data) => {
  if(!Object.keys(data).length) return ''

  const { name, lightThemeClients: clients} = data

  const className = name

  return `
    <section class="${className}" data-name="${name}">
      <div class="container">
        <div class="${className}__wrapper">
          <ul class="${className}__list">
            ${clients.map((image) => {
              return `
                <li class="${className}__item">
                  <img 
                    src="${image.data}" 
                    alt="${image.alternate}" 
                    data-type="client"
                  >
                </li>
              `
            }).join('')}
          </ul>
        </div>
      </div>
    </section>
  ` 
}


export default Clients


/* 
const Clients = (data) => {
 
  const className = data.name

 if (data.images.length) {
    return `
      <section class="${className}" data-name="${data.name}">
        <div class="container">
          <div class="${className}__wrapper">
            <ul class="${className}__list">
              ${data.images.map(image => {
                return `
                  <li class="${className}__item">
                    ${Image(image)}
                  </li> 
                `
              }).join('')}
            </ul>
          </div>
        </div>
      </section>
    `
  } else {
    return ''
  }
}






*/