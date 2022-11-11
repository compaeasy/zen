import Title from '../components/Title.js'
import Texts from '../components/Texts.js'
import Image from '../components/image.js'


const Section = (section = {}) => {
  console.log(section)

  return `
    <section class="section">
      ${Title(section.title)}
      ${Texts(section.texts[0])}
      ${Image(section.image)}
    </section>
  `
}


export default Section