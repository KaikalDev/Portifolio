import Tag from '../Tag'
import { ContainerProjeto, Gif } from './styled'

type Props = {
  Projeto: Projeto
}

const Projeto = ({ Projeto }: Props) => (
  <ContainerProjeto>
    <Gif src={Projeto.img} alt="img" />
    <div>
      <h2>{Projeto.Title}</h2>
      <p>{Projeto.Descrição}</p>
      <div>
        {Projeto.LinkGitHub ? (
          <a target="_blank" href={Projeto.LinkGitHub} rel="noreferrer">
            Repositorio GitHub
          </a>
        ) : (
          <a>Repositorio privado</a>
        )}
        <a target="_blank" href={Projeto.LinkVercel} rel="noreferrer">
          Repositorio Vercel
        </a>
      </div>
      <div>
        {Projeto.tecnologias.map((tec) => (
          <Tag img={tec.img} nome={tec.nome} key={tec.nome} />
        ))}
      </div>
    </div>
  </ContainerProjeto>
)

export default Projeto
