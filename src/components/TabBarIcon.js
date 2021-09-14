import React from 'react';
import { View, Image, StyleSheet }from 'react-native';

function TabBarIcon(props) {
        let imgSource = null;

        switch(props.name) {
            case 'Home':
                imgSource = require('../assets/home.png');
            break;
            case 'Favorites':
                imgSource = require('../assets/favorite.png');
            break;
        }

        return (
            <View>
                <Image source={imgSource} style={styles.icon}/>
            </View>
        );
    }

const styles = StyleSheet.create({
    icon:{
        width:24, height:24
    }});

export default TabBarIcon;