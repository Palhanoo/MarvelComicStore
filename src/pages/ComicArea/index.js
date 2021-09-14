import React, { useEffect, useState } from 'react';
import {
    Container,
    Texto,
    TitleArea,
    Box,
    ImageArea,
    Imagem,
    DescriptionArea,
    ComprarArea,
    ComprarBotao,
} from './style';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import Api from '../../Api'


export default () => {

    const [comic, setComic] = useState([])
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)


    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector(state => state.comics.comic);

    const id = route.params.id



    useEffect(() => {
        const getComic = async () => {
            setLoading(true)
            let res = await Api.getComic(id);
            //console.log(res.data.results[0])
            setComic(res.data.results[0])
            setImage(`${res.data.results[0].thumbnail.path}.${res.data.results[0].thumbnail.extension}`)
            setLoading(false)
        }
        getComic();
    }, []);

    const quadrinho = comic;

    const description = comic.description

    console.log(image)

    return (
        <Container>
            <Box>
                {loading &&
                    <ActivityIndicator size="large" color="#FFF" />
                }
                <ImageArea>
                    <Imagem source={{uri: image !=='' ? image : undefined}} />
                </ImageArea>

                <TitleArea>
                    <Texto>{comic.title}</Texto>
                </TitleArea>

                <DescriptionArea>
                    {description != null &&
                        <Texto numberOfLines={9}>{description}</Texto>
                    }
                    {description === null &&
                        <Texto>Não tem descrição =(</Texto>
                    }
                </DescriptionArea>

                <ComprarArea>
                    <ComprarBotao title="Compra ae meu" />
                </ComprarArea>
            </Box>
        </Container>
    )
}