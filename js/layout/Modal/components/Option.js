/**
 * @param {Object} optionData 
 * @returns {string} 
 */

const Option = (optionData) => {

  const optionDataKeys = Object.keys(optionData)
 
  if (!optionDataKeys.length) {
    return ''
  }

  const {data, value} = optionData

  return `
    <option value="${value}">
      ${data}
    </option>
  `
}

export default Option