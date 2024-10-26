import { Container } from './styles'

type Props = {
  title: string
}

const Separador = ({ title }: Props) => (
  <Container>
    <div>
      <h1>{title}</h1>
    </div>
  </Container>
)

export default Separador
