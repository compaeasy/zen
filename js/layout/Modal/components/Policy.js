/**
 * @param {object} policyData 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Policy = (policyData, parentClassName) => {

  const policyDataKeys = Object.keys(policyData)

  if (!policyDataKeys.length) {
    return ''
  }
  
  const {url, data} = policyData

  const className = parentClassName
    ? `${parentClassName}__policy`
    : ''

  return `
    <label class="${className}">
      <input type="checkbox" checked>
      <a href="${url}">
        ${data}
      </a>
    </label>
  `
}

export default Policy