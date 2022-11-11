import Option from './Option.js'

/**
 * @param {object} selectData
 * @param {string} parentClassName 
 * @returns {string}
 */

const Select = (selectData, parentClassName) => {

  if (!Object.keys(selectData).length) return ''

  const {label, options} = selectData

  const className = parentClassName 
    ? `${parentClassName}__select`
    : 'select'
  
  return `
    <label class="${className}">
      <span>${label}</span>

      <select id="select">
        <option></option>
        ${options.length 
          ? options.map((option) => Option(option)).join('') 
          : ''
        }
      </select>
    </label> 
  `
}

export default Select