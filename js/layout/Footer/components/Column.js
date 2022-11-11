import Title from '../../../components/Title.js'

const Column = (column, parentClassName) => {

  if(!Object.keys(column).length) return ''

  const className = parentClassName ? parentClassName + '__column' : 'column'

  return `
    <div class=${className}>  
      ${Title(column.title, parentClassName)}
      <ul class=${parentClassName}__list>
        ${column.links.map((link) => {
          return `
            <li class="${parentClassName}__item">
              <a href="${link.url}">
                ${link.data}
              </a>
            </li>        
          `
        }).join('')}
      </ul>
    </div>  
  `   
}

export default Column