const Header = (header) => {

  const className = header.name

  return `
    <header class="${className}">
      <nav class=${className}__nav">
        <button class="logo" data-btn="root">${Logo()}</button>
          
        ${header.menuButtons 
          ? Menu(header.menuButtons, className) 
          : ''}

      </nav>
      <button class="theme" data-theme="light">${Sun()}</button>
      <button class="burger" data-btn="burger">X</button>   
    </header>
  `
}

export default Header