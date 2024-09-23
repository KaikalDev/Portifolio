import Tag from '../Tag'
import { ContainerEstatistic, ContainerHabilidade } from './styles'

type Props = {
  habilidade?: Habilidade
}

const gitURL = `
  https://github-readme-stats.vercel.app/api/top-langs/?username=kaikaldev
  &hide_border=true
  &langs_count=8
  &theme=gotham
  &bg_color=0a2472
  &hide_title=true
  &text_color=eee
  &icon_color=eee
`
  .trim()
  .replace(/\s+/g, '')

const Habilidade = ({ habilidade }: Props) => (
  <div>
    {habilidade ? (
      <ContainerHabilidade>
        <h1>{habilidade.title}</h1>
        <ul>
          {habilidade.tecnologias.map((tec) => (
            <Tag img={tec.img} nome={tec.nome} key={tec.nome} />
          ))}
        </ul>
      </ContainerHabilidade>
    ) : (
      <ContainerEstatistic>
        <h1>Linguagens mais usadas</h1>
        <img src={gitURL} alt="" />
      </ContainerEstatistic>
    )}
  </div>
)

export default Habilidade
