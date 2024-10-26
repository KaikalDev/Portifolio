import { Container, Secao } from '../../styles'
import FotoPage from '../../assets/images/Foto_longe.jpg'
import Logo from '../../assets/images/Logo.png'
import { ContainerSobre } from './styles'

const SobreMin = () => (
  <Secao id="SobreMim">
    <ContainerSobre>
      <Container>
        <div className="Foto">
          <img src={FotoPage} alt="Foto" />
          <img src={Logo} alt="Logo" />
        </div>
        <div className="text">
          <h3>
            Olá! Eu sou <span>Kaique</span>
          </h3>
          <p>
            Um desenvolvedor Full-Stack em formação, apaixonado por tecnologia e
            pela criação de soluções. Tenho habilidades avançadas em front-end e
            estou determinado a me aprofundar no desenvolvimento back-end. Sou
            uma pessoa motivada, com facilidade de aprendizado e sempre em busca
            de novos desafios que me ajudem a crescer profissionalmente. Estou
            em busca de uma oportunidade de estágio para iniciar minha
            trajetória no mercado de trabalho, onde poderei aplicar minhas
            habilidades e aprender continuamente.
          </p>
        </div>
      </Container>
    </ContainerSobre>
  </Secao>
)

export default SobreMin
