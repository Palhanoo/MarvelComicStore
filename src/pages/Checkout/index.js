import React, { useEffect, useState } from 'react';
import {
    Container,
    Box,
    ComicImage,
    ComicTitle,
    ComicDescription,
    ComicPrice,
    ImageArea,
    TextArea,
    BoxArea,
    TitleArea,
    PaymentArea,
    PaymentAreaBox,
    PaymentAreaInput,
    PaymentAreaText,
    PaymentInput,
    PaymentText,
    CardBox,
    CardBoxArea,
    CardTextArea,
    CardText,
    CardInputArea,
    CardInput,
    Area,
    ComprarBotao
} from './style';

import { ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Api from '../../Api';


export default () => {

    const [comic, setComic] = useState([])
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [price, setPrice] = useState()


    const navigation = useNavigation();
    const route = useRoute();

    const id = route.params.id;

    //console.log(id)

    useEffect(() => {
        const getComic = async () => {
            setLoading(true)

            let res = await Api.getComic(id)

            //console.log(res.data.results[0].prices[0].price)
            setComic(res.data.results[0])

            setImage(`${res.data.results[0].thumbnail.path}.${res.data.results[0].thumbnail.extension}`)

            setPrice(res.data.results[0].prices[0].price)

            setLoading(false);
        }
        getComic();
    }, [])

    //console.log(comic.prices)


    return (
        <Container>

            <Area>
                <Box>
                    <BoxArea>
                        {loading &&
                            <ActivityIndicator size="large" color="#FFF" />
                        }

                        <ImageArea>
                            <ComicImage source={{ uri: image !== '' ? image : undefined }} />
                        </ImageArea>

                        <TextArea>

                            <TitleArea>
                                <ComicTitle>{comic.title}</ComicTitle>
                            </TitleArea>

                        </TextArea>

                        <ComicPrice>$ {price}</ComicPrice>

                    </BoxArea>

                </Box>


                <CardBox>

                    <PaymentArea>

                        <PaymentAreaBox>

                            <PaymentAreaText>

                                <PaymentText>Digite seu Cartão:</PaymentText>
                                <PaymentText>Digite a Validade</PaymentText>
                                <PaymentText>Digite o CVC</PaymentText>

                            </PaymentAreaText>


                            <PaymentAreaInput >


                                <PaymentInput placeholder="N° do cartão" />
                                <PaymentInput placeholder="Validade" />
                                <PaymentInput placeholder="CVC" />

                            </PaymentAreaInput>

                        </PaymentAreaBox>

                    </PaymentArea>


                    <CardBoxArea>

                        <CardTextArea>

                            <CardText>Cupom:</CardText>
                            <CardText>Total:</CardText>

                        </CardTextArea>

                        <CardInputArea>

                            <CardInput />
                            <CardText>$ {price}</CardText>

                        </CardInputArea>

                        <ComprarBotao color="#8F9DB7" title="Finalizar" onPress={() => alert('Você comprou!')} />

                    </CardBoxArea>

                </CardBox>

            </Area>
        </Container>
    )
}