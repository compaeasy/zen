/** 
 * @param {object} title
 * @param {string} parentClassName
 * @returns {string}
 */

const Title = (title, parentClassName) => {

  if(!Object.keys(title).length) return ''

  const { data, priority } = title

  const className = parentClassName ? `${parentClassName}__title` : 'title'

  switch (priority) {
    default:
      return `<h1 class="${className}">${data}</h1>`
    case 2:
      return `<h2 class="${className}">${data}</h2>`
    case 3:
      return `<h3 class="${className}">${data}</h3>`
    case 4:
      return `<h4 class="${className}">${data}</h4>`
    case 5:
      return `<h5 class="${className}">${data}</h5>`
    case 6:
      return `<h6 class="${className}">${data}</h6>`
  }
}

export default Title