import React from 'react';
import { Image } from 'react-native';

function FavoriteIcon() {
    return (
        <Image 
            style={{width:250, height:250}}
            source={require('../assets/favorite.png')}
        />
    );
}

export default FavoriteIcon;