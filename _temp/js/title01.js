import dataPage from '../data/data.js'

const Title = (_sectionPrimary = {}) => {

  return `
  ${dataPage.sectionPrimary.title}`
  
}

console.log(Title)
console.log(dataPage.sectionPrimary.title)

export default Title