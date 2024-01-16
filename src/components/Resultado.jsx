import styled from "@emotion/styled"

const Resultado = ({ resultado }) => {

    const Contenedor = styled.div`
        background-color: #fff;
        color: #0D2235;
        border-radius: 12px;
        font-family: 'Lato', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 30px;
        padding: 16px;
    `

    const TextoPrecio = styled.p`

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        align-self: stretch;
        margin-top: 0px;
        margin-bottom: 0px;

        font-size: 14px;
        font-family: 'Lato', sans-serif;
        font-weight: 400;

        span{
            font-family: 'Lato', sans-serif;
            font-size: 24px;
            font-weight: 700;
        }
    `
    const ContenedorPrecios = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        align-self:stretch;
    `
    const ContenedorPreciosInterior = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        flex: 1 0 0;
    `
    const ContenedorPreciosVariaciones = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
    `

    const Texto = styled.p`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        align-self: stretch;

        font-size: 12px;
        font-family: 'Lato', sans-serif;
        font-weight: 400;

        span{
            font-family: 'Lato', sans-serif;
            font-size: 16px;
            font-weight: 700;
        }
    `
    const LastUpdate = styled.p`
        color: rgba(13, 34, 53, 0.60);
        font-family: Lato;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `
    
    const Imagen = styled.img`
        display: block;
        width: 80px;
    `
    

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = resultado

    return (
        <Contenedor>
            <ContenedorPrecios>
                <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto" />
                <ContenedorPreciosInterior>
                    <TextoPrecio><span>{PRICE} </span>Precio actual</TextoPrecio>
                    <ContenedorPreciosVariaciones>
                        <Texto><span>{HIGHDAY}</span>Precio más alto</Texto>
                        <Texto><span>{LOWDAY}</span>Precio más bajo</Texto>
                        <Texto><span>{CHANGEPCT24HOUR}</span>Variación últimas 24 horas</Texto>
                    </ContenedorPreciosVariaciones>
                </ContenedorPreciosInterior>
            </ContenedorPrecios>
            <div>
                <LastUpdate>Última actualización: {LASTUPDATE}</LastUpdate>
            </div>
        </Contenedor>
    )
}

export default Resultado
