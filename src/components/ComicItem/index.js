import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Api from '../../Api';
import { Box, ComicImage, ComicTitle, ComicDescription, ComicPrice, ImageArea, TextArea, BoxArea, TitleArea } from './style';
import { useNavigation } from '@react-navigation/native';


export default ({ data, onPress }) => {

    const navigation = useNavigation();
    const comics = data;

    const id = comics.id
    const image = comics.thumbnail.path;
    const extension = comics.thumbnail.extension;
    const imagem = `${image}.${extension}`
    const price = comics.prices[0]
    const prices = price.price
    //console.log(comics)



    return (
        <Box onPress={() => onPress(id)} >
            <BoxArea>

                <ImageArea>
                    <ComicImage source={{ uri: imagem }} />
                </ImageArea>

                <TextArea>
                    <TitleArea>
                        <ComicTitle>{data.title}</ComicTitle>
                    </TitleArea>
                    
                    <ComicDescription numberOfLines={2} >{comics.description}</ComicDescription>
                </TextArea>

              
                <ComicPrice>$ {prices}</ComicPrice>

            </BoxArea>
        </Box>
    )
}