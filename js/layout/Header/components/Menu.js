/**
 * @param {array} buttons
 * @param {string} parentClassName
 * @returns {string}
 */

const Menu = (buttons, parentClassName) => {

  
  const currentClassName = parentClassName 
    ? parentClassName + '__menu' 
    : 'menu'

  const childClassName = parentClassName 
    ? parentClassName 
    : currentClassName

  return `
    <ul class="${currentClassName}" data-name="menu">
        ${buttons.map((buttons) => {
          return `
            <li class="${childClassName}__item">
              <button 
                data-btn="menu" 
                data-target="${buttons.target}"
              >
              ${buttons.data}
              </button>
            </li>
          `
        }).join('')}
    </ul>
  `
}

export default Menu


    // const Menu = (buttons, parentClassName) => {

//   const className = parentClassName ? parentClassName + '__menu' : 'menu'
  
//   return ` 
//     <ul class="${className}">
//       ${buttons.map(button => { 
//         return `
//           <li class="${parentClassName ? parentClassName + '__item' : className + '__item'}">
//             <button data-btn="${button.target}">
//               ${button.data}
//             </button>
//           </li>
//         `
//       }).join('')}
//     </ul>
//   `
// }