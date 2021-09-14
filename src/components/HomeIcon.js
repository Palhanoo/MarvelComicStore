import React from 'react';
import { Image } from 'react-native';

function HomeIcon() {
    return (
        <Image 
            style={{width:250, height:250}}
            source={require('../assets/home.png')}
        />
    );
}

export default HomeIcon;