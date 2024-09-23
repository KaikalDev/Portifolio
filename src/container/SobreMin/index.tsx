import { Secao } from '../../styles'
import FotoPage from '../../assets/images/SobreMin.jpg'
import { ContainerSobre } from './styles'

const SobreMin = () => (
  <Secao id="SobreMim" style={{ height: '50vh' }}>
    <ContainerSobre>
      <img src={FotoPage} alt="img" />
      <p>
        Olá! Eu sou Kaique, um desenvolvedor Full-Stack em formação, apaixonado
        por tecnologia e pela criação de soluções. Tenho habilidades avançadas
        em front-end e estou determinado a me aprofundar no desenvolvimento
        back-end. Sou uma pessoa motivada, com facilidade de aprendizado e
        sempre em busca de novos desafios que me ajudem a crescer
        profissionalmente. Estou em busca de uma oportunidade de estágio para
        iniciar minha trajetória no mercado de trabalho, onde poderei aplicar
        minhas habilidades e aprender continuamente.
      </p>
    </ContainerSobre>
  </Secao>
)

export default SobreMin
