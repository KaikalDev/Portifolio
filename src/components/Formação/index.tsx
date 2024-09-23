import LogoEbac from '../../assets/images/logo_ebac-960x640.png'
import LogoUepb from '../../assets/images/uepb.png'
import { ContainerFormacao } from './styles'

const Formacao = () => (
  <ContainerFormacao>
    <h2>
      Desenvolvedor <span>Full-Stack</span>
    </h2>
    <p>Olá eu sou Kaique, um desenvolvedor Full-Stack</p>
    <p>Principais Formações:</p>
    <div className="top">
      <img src={LogoEbac} alt="Logo EBAC" />
      <p>
        formação pela EBAC – Escola Britânica de Artes Criativas e Tecnologia |
        No curso : Profissão: Desenvolvedor Full Stack Java
      </p>
    </div>
    <div>
      <img src={LogoUepb} alt="Logo UEPB" />
      <p>
        Graduando em Análise e Desenvolvimento de Sistemas pela UEPB
        –Universidade Estadual da Paraíba.
      </p>
    </div>
  </ContainerFormacao>
)

export default Formacao
