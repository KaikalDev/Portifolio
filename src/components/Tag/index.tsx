import { TagItem } from './styles'

const Tag = ({ img, nome }: Tecnologia) => (
  <TagItem>
    <img src={img} alt={nome} />
    <p>{nome}</p>
  </TagItem>
)

export default Tag
