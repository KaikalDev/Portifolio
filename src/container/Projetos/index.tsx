import Projeto from '../../components/Projeto'
import { Secao } from '../../styles'
import { ImgProjetos, IconsTecnologias } from '../../assets/Images'

const Repositorios: Projeto[] = [
  {
    Descrição:
      'Este projeto é uma réplica da plataforma Disney+ desenvolvida como parte da atividade do curso Fullstack Java da EBAC. O projeto utiliza o Gulp para automatizar tarefas, como a compilação de SASS e otimização de imagens, com o objetivo de agilizar o processo de construção para desenvolvimento web moderno. Integra várias bibliotecas para gerenciamento de arquivos, streams e outras utilidades.',
    img: ImgProjetos.CopiaDisney,
    LinkGitHub: 'https://github.com/KaikalDev/Copia_disney',
    LinkVercel: 'https://copia-disney.vercel.app/',
    tecnologias: [
      {
        img: IconsTecnologias.Javascript,
        nome: 'JavaScript'
      },
      {
        img: IconsTecnologias.gulp,
        nome: 'Gulp'
      },
      {
        img: IconsTecnologias.sass,
        nome: 'Sass'
      }
    ]
  },
  {
    Descrição:
      'Efood é um projeto desenvolvido como parte do curso Front-End da EBAC. O objetivo é criar um site completo que permite o anúncio de restaurantes e a realização de pedidos de pratos para delivery. Este projeto é uma aplicação prática dos conceitos e técnicas aprendidos ao longo do curso, abrangendo desde o design da interface até a integração com APIs e gerenciamento de estados.',
    img: ImgProjetos.efood,
    LinkGitHub: 'https://github.com/KaikalDev/Efood',
    LinkVercel: 'https://efood-bay-six.vercel.app/',
    tecnologias: [
      {
        img: IconsTecnologias.React,
        nome: 'React'
      },
      {
        img: IconsTecnologias.ts,
        nome: 'TypeScript'
      },
      {
        img: IconsTecnologias.redux,
        nome: 'Redux'
      },
      {
        img: IconsTecnologias.Nodejs,
        nome: 'Node.js'
      }
    ]
  },
  {
    Descrição:
      'O eplay é um projeto desenvolvido como parte do curso de Front-End da EBAC, focado na criação de um site para venda de jogos eletrônicos. O objetivo é oferecer uma plataforma completa que permita aos usuários navegar e adquirir jogos de forma interativa. Este projeto utiliza uma API para gerenciar informações sobre os jogos e é uma aplicação prática dos conceitos e técnicas aprendidos ao longo do curso, abrangendo desde o design da interface até a integração com APIs e gerenciamento de estados.',
    img: ImgProjetos.eplay,
    LinkGitHub: 'https://github.com/KaikalDev/eplay',
    LinkVercel: 'https://eplay-one.vercel.app/',
    tecnologias: [
      {
        img: IconsTecnologias.React,
        nome: 'React'
      },
      {
        img: IconsTecnologias.ts,
        nome: 'TypeScript'
      },
      {
        img: IconsTecnologias.redux,
        nome: 'Redux'
      },
      {
        img: IconsTecnologias.Nodejs,
        nome: 'Node.js'
      }
    ]
  },
  {
    Descrição:
      'Este projeto consiste em uma aplicação web para gerenciar viagens, utilizando um backend desenvolvido com FastAPI e um frontend desenvolvido com React. A API foi hospedada no Render, enquanto o frontend foi hospedado no Vercel.',
    img: ImgProjetos.LKRViagens,
    LinkGitHub: 'https://github.com/KaikalDev/LKR_Viagens',
    LinkVercel: 'https://lkr-viagens.vercel.app/',
    tecnologias: [
      {
        img: IconsTecnologias.React,
        nome: 'React'
      },
      {
        img: IconsTecnologias.ts,
        nome: 'TypeScript'
      },
      {
        img: IconsTecnologias.redux,
        nome: 'Redux'
      },
      {
        img: IconsTecnologias.fastApi,
        nome: 'FastAPI'
      }
    ]
  },
  {
    Descrição:
      'Este projeto é um portfólio pessoal desenvolvido para uma arquiteta, com o objetivo de apresentar seus trabalhos e projetos de forma atraente e interativa. O kamila_simoes é uma aplicação que utiliza Grunt para automatizar tarefas, como a limpeza de arquivos, minificação de HTML, otimização de imagens e compilação de LESS. O projeto visa fornecer uma plataforma completa e funcional que exiba os projetos da arquiteta, permitindo uma navegação intuitiva e uma apresentação visual de qualidade.',
    img: ImgProjetos.SiteKamila,
    LinkGitHub: 'https://github.com/KaikalDev/Site-kamila_Simoes',
    LinkVercel: 'https://site-kamila-simoes.vercel.app/',
    tecnologias: [
      {
        img: IconsTecnologias.Javascript,
        nome: 'JavaScript'
      },
      {
        img: IconsTecnologias.grunt,
        nome: 'Grunt'
      },
      {
        img: IconsTecnologias.less,
        nome: 'Less'
      },
      {
        img: IconsTecnologias.bootstrap,
        nome: 'Bootstrap'
      }
    ]
  }
]

const Projetos = () => (
  <Secao id="Projetos" className="projetos">
    {Repositorios.map((repo) => (
      <Projeto key={repo.img} Projeto={repo} />
    ))}
  </Secao>
)

export default Projetos
