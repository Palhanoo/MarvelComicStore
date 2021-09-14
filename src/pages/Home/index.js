import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import {
    Container,
    ComicsList,
    ComicArea,
    Lista,
    SearchArea,
    SearchInput,
    SearchButton
} from './style';

import Api from '../../Api'

import ComicItem from '../../components/ComicItem';

export default () => {
    const [comicsearch, setComicsearch] = useState('');
    const [comics, setComics] = useState([])
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation();
    //const comic = useSelector((state) => state.comics.comic)

    useEffect(() => {
        const getComics = async () => {
            setLoading(true)
            let res = await Api.getComics();
            //console.log(res.data.results)
            setComics(res.data.results);

            setLoading(false)
        }
        getComics();
    }, []);

    const handleComicPress = (id) => {
        navigation.navigate('ComicArea', {
            id
        });
        //console.log(id);
    }

    const getOneComic = async (comicsearch) => {
        if (comicsearch != '') {
            setLoading(true)
            let res = await Api.getOneComic(comicsearch);
            console.log(res.data.results);
            setComics(res.data.results);
            setLoading(false);
            setComicsearch('');
        } else {
            alert('digita ai po')
        }
    }


    const handleSearchComic = () => {
        getOneComic(comicsearch);
    }

    const renderItem = ({ item, index }) => (
        <ComicItem
            key={index}
            data={item}
            onPress={handleComicPress}
        />
    );

    return (
        <Container>
            <SearchArea>
                <SearchInput
                    placeholder="qual comic voce quer??"
                    placeholderTextColor="#FFF"
                    value={comicsearch}
                    onChangeText={t => setComicsearch(t)}
                    onEndEditing={handleSearchComic}
                />
            </SearchArea>

            <ComicsList >
                {loading &&
                    <ActivityIndicator size="large" color="#FFF" />
                }
                <Lista
                    keyExtractor={(comics) => `${comics.id}`}
                    data={comics}
                    renderItem={renderItem}
                />
            </ComicsList>
        </Container>
    )
}
