const Preloader = (isDarkTheme) => {
  return `
    <div id="preloader" class="preloader ${isDarkTheme ? 'dark' : ''}">
      <div class="preloader__wrapper">
        <div class="preloader__item green"></div>
        <div class="preloader__item yellow"></div>
        <div class="preloader__item red"></div>
        <div class="preloader__item blue"></div>
      </div>
    </div>
  `
}

export default Preloader