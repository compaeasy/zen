/**
 * @param {string} text 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Text = (text, parentClassName) => {

  if(!Object.keys(text).length) return ''

  const ClassName = parentClassName ? `${parentClassName}__copy` : 'copy'

  return `
    <p class="${ClassName}">${text}</p>
  `
}

export default Text

