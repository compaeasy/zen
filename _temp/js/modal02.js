import ModalClose from '../ui/Modal-close.js'
import Title from '../components/Title.js'

/**
 * @param {object} modal 
 * @returns {string}
 */

const Modal = (modal) => {

  const className = modal.name

  const button = modal.buttonText 
    ? `<button disabled class="${className}__btn" type="submit">${modal.buttonText}</button>`
    : `<button disabled class="${className}__btn" type="submit">Submit</button>`

  return `
    <div class="${className}>
      <div class="${className}__body">
        <button class="${className}__close" data-btn="modal-close">
          ${ModalClose()}
        </button>
        ${modal.title ? Title(modal.title) : ('')}
        <form class="${className}__form">
          <input class="${className}__input" type="${modal.input.types[0]}" placeholder="Name">
          <input class="${className}__input" type="${modal.input.types[1]}" placeholder="Tel">
          <input class="${className}__input" type="${modal.input.types[2]}" placeholder="E-mail">

        <label for="select">Connection</label>
        <select id="select" class=${className}__select>
          <option></option>
          <option value="instagram">${modal.connection.texts[0]}</option>
          <option value="telegram">${modal.connection.texts[1]}</option>
          <option value="whatsapp">${modal.connection.texts[2]}</option>
        </select>

        <label clss=${className}__policy>
          <input type="${modal.input.types[3]}">
          <span>Privacy</span>
          <a href="${modal.link.url}">${modal.link.data}</a>
        </label>
        ${button}
        </form
      </div>
    </div>
  `
}

export default Modal