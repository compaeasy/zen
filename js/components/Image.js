/**
 * @param {object} image 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Image = (image, parentClassName, dataAtribute = '') => {
  
  if(!Object.keys(image).length) return ''
  
  const { data, alternate } = image
  
  const className = parentClassName ? `${parentClassName}__image` : ''
  
  return `
    <img 
      ${dataAtribute}
      class="${className}"
      src="${data}" 
      alt="${alternate}" 
    >
  `
}

export default Image