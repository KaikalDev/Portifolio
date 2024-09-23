import { IconsTecnologias } from '../../assets/Images'
import Habilidade from '../../components/Habilidade'
import { ContainerHabilidade } from './styles'

const Domínio: Habilidade = {
  title: 'Domíno',
  tecnologias: [
    {
      img: IconsTecnologias.ts,
      nome: 'TypeScript'
    },
    {
      img: IconsTecnologias.Javascript,
      nome: 'JavaScript'
    },
    {
      img: IconsTecnologias.Python,
      nome: 'Python'
    },
    {
      img: IconsTecnologias.git,
      nome: 'GIT'
    },
    {
      img: IconsTecnologias.React,
      nome: 'React'
    },
    {
      img: IconsTecnologias.redux,
      nome: 'Redux'
    },
    {
      img: IconsTecnologias.Nodejs,
      nome: 'Node.js'
    },
    {
      img: IconsTecnologias.sass,
      nome: 'Sass'
    },
    {
      img: IconsTecnologias.less,
      nome: 'Less'
    },
    {
      img: IconsTecnologias.Jquery,
      nome: 'jQuery'
    },
    {
      img: IconsTecnologias.bootstrap,
      nome: 'Bootstrap'
    },
    {
      img: IconsTecnologias.gulp,
      nome: 'Gulp'
    }
  ]
}

const Conheco: Habilidade = {
  title: 'Conheço',
  tecnologias: [
    {
      img: IconsTecnologias.Java,
      nome: 'Java'
    },
    {
      img: IconsTecnologias.CMM,
      nome: 'C++'
    },
    {
      img: IconsTecnologias.C,
      nome: 'C'
    },
    {
      img: IconsTecnologias.Ccharp,
      nome: 'C#'
    },
    {
      img: IconsTecnologias.pandas,
      nome: 'Pandas'
    },
    {
      img: IconsTecnologias.falsk,
      nome: 'Flask'
    },
    {
      img: IconsTecnologias.fastApi,
      nome: 'FastAPI'
    },
    {
      img: IconsTecnologias.vue,
      nome: 'Vue'
    },
    {
      img: IconsTecnologias.Numpy,
      nome: 'Numpy'
    },
    {
      img: IconsTecnologias.grunt,
      nome: 'Grunt'
    }
  ]
}

const Habilidades = () => (
  <ContainerHabilidade id="Linguagens">
    <Habilidade habilidade={Domínio} />
    <Habilidade />
    <Habilidade habilidade={Conheco} />
  </ContainerHabilidade>
)

export default Habilidades
