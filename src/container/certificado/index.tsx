import { useState } from 'react'
import cert1 from '../../assets/images/certificados/neon.png'
import cert2 from '../../assets/images/certificados/Ti_do_zero_ao_pro.png'
import cert3 from '../../assets/images/certificados/Workshop Redux.png'
import cert4 from '../../assets/images/certificados/Certificado_JavaSwing.jpg'
import Seta_L from '../../assets/images/Icons/seta_Esquerda.png'
import Seta_D from '../../assets/images/Icons/seta_Direita.png'
import { ContainerCerts } from './styles'
import Separador from '../../components/Separacao'

const certificados = [
  { img: cert1, alt: 'Certificado Neon' },
  { img: cert2, alt: 'Certificado Ti do Zero ao Pro' },
  { img: cert3, alt: 'Certificado Workshop Redux' },
  { img: cert4, alt: 'Certificado Java Swing' }
]

const Certificados = () => {
  const [index, setIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const proximo = () =>
    setIndex((prevIndex) =>
      prevIndex < certificados.length - 1 ? prevIndex + 1 : 0
    )

  const anterior = () =>
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : certificados.length - 1
    )

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const swipeDistance = touchStart - touchEnd

    if (swipeDistance > 50) {
      proximo()
    } else if (swipeDistance < -50) {
      anterior()
    }

    setTouchStart(null)
  }

  return (
    <ContainerCerts id="Certificados">
      <Separador title="CERTIFICADOS" />
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <button onClick={anterior}>
          <img src={Seta_L} alt="Anterior" />
        </button>
        <img src={certificados[index].img} alt={certificados[index].alt} />
        <button onClick={proximo}>
          <img src={Seta_D} alt="Proximo" />
        </button>
      </div>
    </ContainerCerts>
  )
}

export default Certificados
