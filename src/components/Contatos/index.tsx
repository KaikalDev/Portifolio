import GitHub from '../../assets/Icons/GitHub.png'
import Linkedin from '../../assets/Icons/Linkedin.png'
import Telefone from '../../assets/Icons/Phone.png'
import Email from '../../assets/Icons/mail.png'
import baixar from '../../assets/Icons/Dowload.png'

import { ContainerContact } from './styles'

const Contato = () => (
  <ContainerContact>
    <div>
      <h3>Kaique Simões</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://github.com/KaikalDev"
            rel="noreferrer"
          >
            <img src={GitHub} alt="GitHub" />
            <p>KaikalDev</p>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kaique-luan/"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="Linkedin" />
            <p>Kaique Luan Simões Passos</p>
          </a>
        </li>
        <li>
          <a href="mailto:kaiquesimoes58@gmail.com">
            <img src={Email} alt="Email" />
            <p>kaiquesimoes58@gmail.com</p>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://wa.me/5583999252825"
            rel="noreferrer"
          >
            <img src={Telefone} alt="Telefone" />
            <p>(83) 9 9925-2825</p>
          </a>
        </li>
      </ul>
      <div className="Button">
        <a
          href="https://docs.google.com/document/d/1MVxZRpnukx_IQX1AS0R-9VKwhAXX5i0DRlFJURHpBrU/edit?usp=sharing"
          className="Button"
          target="_blank"
          rel="noreferrer"
        >
          <p>Curriculo</p>
          <img src={baixar} alt="Curriculo" />
        </a>
      </div>
    </div>
  </ContainerContact>
)

export default Contato
