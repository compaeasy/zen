const Header = (header) => {

  console.log(header.menuButtons)

  const className = header.name 

  return `
    <header class="header">
      <nav class="header__nav"></nav>
        <button class="header__logo" data-btn="root">${Logo()}</button>

        <ul class="menu">

          ${header.menuButtons.map((button) => {
            return `
              <li class="menu__item">
                <button data-btn="${button.target}">${button.data}</button>
              <li>
            `
          }).join('')}

        </ul>


      <button class="theme" data-theme="light">${Sun()}</button>
      <button class="burger" data-btn="burger">X</button>
    </header>

  `


}

export default Header
