import React from 'react';
import {View, Dimensions} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const CardSection =(props) => {
    return (
        <View style = {styles.containerStyle}>
            {props.children}
        </View>
    );
};


const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 25,
        background: '#fff',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative',
        height: 300, 
        width: SCREEN_WIDTH, 


    }
}

export default CardSection;