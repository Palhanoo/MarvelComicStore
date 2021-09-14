import React, { useState } from 'react';
import {
    ClickArea,
    Container,
    Imagem,
    Texto
} from './style';


export default () => {

    const [source, setSource] = useState(require('../../assets/troubleshoot.jpg'))

    const handleClickButton = () => {
        setSource(require('../../assets/vegeta.hue.jpg'))
        setTimeout(function () { setSource(require('../../assets/troubleshoot.jpg')) }, 3000);
    }

    return (
        <Container>

            <Texto>Em Construção</Texto>

            <ClickArea onPress={handleClickButton}>
                <Imagem source={source} />
            </ClickArea>

        </Container>
    )
}