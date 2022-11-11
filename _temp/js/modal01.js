import ModalClose from '../ui/Modal-close.js'
import Title from '../components/Title.js'

/**
 * @param {object} modal 
 * @returns {string}
 */

const Modal = (modal) => {

  const className = modal.name

  const button = modal.buttonText 
    ? `<button type="submit">${modal.buttonText}</button>`
    : `<button type="submit">Submit</button>`

  return `
    <div class="${className}>
      <div class="${className}__body">
        <button data-btn="modal-close">
          ${ModalClose()}
        </button>
        ${modal.title ? Title(modal.title) : ('')}
        <form class="${className}__form">
          <input type="${modal.input.types[0]}">
          <input type="${modal.input.types[1]}">
          <input type="${modal.input.types[2]}">
        <select>
          <option value="instagram">${modal.connection.texts[0]}</option>
          <option value="telegram">${modal.connection.texts[1]}</option>
          <option value="whatsapp">${modal.connection.texts[2]}</option>
        </select>

        <label>
          <input type="${modal.input.types[3]}">
          <a href="${modal.link.url}">${modal.link.data}</a>
        </label>
        ${button}
        </form
      </div>
    </div>
  `
}

export default Modal