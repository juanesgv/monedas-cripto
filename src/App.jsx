import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div `
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    colum-gap: 2rem;
  }
`
const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  @media (max-width: 992px){
    margin: 24px 0;
  }

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
    margin: 10px auto 0 auto;
  }
`

const Imagen = styled.img `
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
  @media (max-width: 992px){
    max-width: 250px;
  }
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(()=>{

    if(Object.keys(monedas).length > 0 ){
      const cotizarCripto = async ()=>{
          setCargando(true)
          setResultado({})

          const {moneda, cripto} = monedas;
          const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`

          const respuesta = await fetch(URL);
          const resultado = await respuesta.json();

          setResultado(resultado.DISPLAY[cripto][moneda])
          setCargando(false)
      }

      cotizarCripto();

    }
  },[monedas])

  return (
    <>
      <Contenedor>
        <Imagen src= {ImagenCripto} alt='Imagenes criptomonedas'/>
        <div>
          <Heading> Cotiza criptomonedas al instante</Heading>
          <Formulario 
            setMonedas= {setMonedas}
          />

          {cargando && <Spinner/>}
          {resultado.PRICE && <Resultado resultado={resultado} />}
        </div>
      </Contenedor>
    </>
  )
}

export default App
