import ModalClose from '../../ui/ModalClose.js'
import Title from '../../components/Title.js'
import Form from '../Modal/components/Form.js'

/**
 * @param {object} modal 
 * @returns {string}
 */

const Modal = (modal) => {

  if(!Object.keys(modal).length) return ''

  const { name, title, form } = modal

  const className = name

  return `
    <div class="${className}" data-name="modal">
      <div class="${className}__body">
        <button class="${className}__close" data-btn="close">
          ${ModalClose()}
        </button>
        ${title ? Title(title, className) : ''}
        ${form ? Form(form) : ''}
      </div>
    </div>
  `
}

export default Modal