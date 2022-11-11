/** 
 * @param {string} text
 * @param {string} parentClassName 
 * @returns {string}
 */

const Submit = (text, parentClassName) => {

  const className = parentClassName 
    ? `${parentClassName}__button` 
    : 'button'

  return `
    <button 
      class="${className}"
      type="submit"
    >
      ${text ? text : 'Submit'}
    </button>
  `
}

export default Submit