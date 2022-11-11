/**
 * @param {object} inputData 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Input = (inputData, parentClassName) => {

  if (!Object.keys(inputData).length) return ''

  // console.log({inputData})

  const {type, placeholder} = inputData

  const className = parentClassName 
    ? `${parentClassName}__input` 
    : ''
  
  return `
    <input 
      data-input 
      class="${className}" 
      type="${type}" 
      placeholder="${placeholder}"
    >
  `
}

export default Input
