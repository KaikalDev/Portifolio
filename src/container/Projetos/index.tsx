import Projeto from '../../components/Projeto'
import { ImgProjetos, IconsTecnologias } from '../../assets/Images'
import Separador from '../../components/Separacao'
import { ContainerProjetos } from './styles'

const Repositorios: Projeto[] = [
  {
    Title: "Liane's Pastel",
    Descrição:
      "O projeto Line's Pastel visa otimizar as vendas da pastelaria, oferecendo uma plataforma que facilita o gerenciamento de pedidos e o controle financeiro com a geração automática de planilhas de vendas. A área administrativa permite o monitoramento em tempo real dos pedidos, enquanto a integração com uma API garante a comunicação eficiente com o banco de dados. O design produzido por Rhubi Marçal, alia estética refinada e usabilidade, proporcionando uma experiência visual intuitiva para clientes e administradores.",
    img: ImgProjetos.lianesPastel,
    LinkVercel: 'https://liane-s-pastel.vercel.app/',
    tecnologias: [
      {
        img: IconsTecnologias.ts,
        nome: 'TypeScript'
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
        img: IconsTecnologias.neon,
        nome: 'Neon'
      },
      {
        img: IconsTecnologias.Prisma,
        nome: 'Prisma'
      },
      {
        img: IconsTecnologias.Javascript,
        nome: 'JavaScript'
      },
      {
        img: IconsTecnologias.appScript,
        nome: 'AppScript'
      },
      {
        img: IconsTecnologias.Planilhas,
        nome: 'Planilhas'
      }
    ]
  },
  {
    Title: 'Efood',
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
    Title: 'Eplay',
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
    Title: 'LKR - Viagens',
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
    Title: 'Kamila Simões',
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
  <section id="Projetos">
    <Separador title="PROJETOS" />
    <ContainerProjetos>
      {Repositorios.map((repo) => (
        <li key={repo.img}>
          <Projeto Projeto={repo} />
        </li>
      ))}
    </ContainerProjetos>
  </section>
)

export default Projetos
