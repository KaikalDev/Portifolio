import Header from './components/Header'
import Certificados from './container/certificado'
import Footer from './container/footer'
import Habilidades from './container/Habilidades'
import Home from './container/Home'
import Projetos from './container/Projetos'
import SobreMin from './container/SobreMin'
import GlobalStyles, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Home />
      </Container>
      <SobreMin />
      <Container>
        <Habilidades />
        <Projetos />
        <Certificados />
      </Container>
      <Footer />
    </>
  )
}

export default App
