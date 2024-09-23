import cert1 from '../../assets/images/neon.png'
import cert2 from '../../assets/images/Ti_do_zero_ao_pro.png'
import cert3 from '../../assets/images/Workshop Redux.png'
import setaLeft from '../../assets/Icons/Flecha_Esquerda.png'
import setaRitgh from '../../assets/Icons/Flecha_direita.png'
import { useState } from 'react'
import { ContainerCerts } from './styles'

const certificados = [
  { img: cert1, alt: 'Certificado Neon' },
  { img: cert2, alt: 'Certificado Ti do Zero ao Pro' },
  { img: cert3, alt: 'Certificado Workshop Redux' }
]

const Certificados = () => {
  const [index, setIndex] = useState(1)

  const proximo = () =>
    index < certificados.length - 1 ? setIndex(index + 1) : setIndex(0)

  const anterior = () =>
    index > 0 ? setIndex(index - 1) : setIndex(certificados.length - 1)

  return (
    <ContainerCerts id="Certificados">
      <hr />
      <h1>Meus certificados</h1>
      <div>
        <button onClick={anterior}>
          <img src={setaLeft} />
        </button>
        <img src={certificados[index].img} alt={certificados[index].alt} />
        <button onClick={proximo}>
          <img src={setaRitgh} />
        </button>
      </div>
      <hr />
    </ContainerCerts>
  )
}
export default Certificados
