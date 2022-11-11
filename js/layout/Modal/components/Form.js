import Input from './Input.js'
import Select from './Select.js'
import Policy from './Policy.js'
import Submit from './Submit.js'

/**
 * @param {object} formData
 * @param {string} parentClassName 
 * @returns {string}
 */

const Form = (formData, parentClassName) => {

  if (!Object.keys(formData).length) return ''

  const {inputs, select, policy, buttonText} = formData 

  const className = parentClassName 
    ? `${parentClassName}__form`
    : 'form'

  return `
    <form class="${className}">
      ${inputs.length ? inputs.map(input => Input(input, className)).join('') : ''}
      ${select ? Select(select, className) : ''}
      ${policy ? Policy(policy, className) : ''}
      ${Submit(buttonText, className)}
    </form>
  `
}

export default Form
