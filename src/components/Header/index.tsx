import { HeaderContainer } from './styles'
import Logo from '../../assets/images/Logo.png'

const Header = () => (
  <HeaderContainer>
    <div>
      <h1>
        <img src={Logo} alt="Kaique" />
      </h1>
      <nav>
        <a href="#Home">Home</a>
        <a href="#SobreMim">Sobre mim</a>
        <a href="#Linguagens">Linguagens</a>
        <a href="#Projetos">Projetos</a>
        <a href="#Certificados">Certificados</a>
      </nav>
    </div>
  </HeaderContainer>
)

export default Header
