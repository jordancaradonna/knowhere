import React, {Component} from 'react';
import {View, Text, TextInput, Button } from 'react-native';

class ChangeHomeLocationScreen extends Component {    
    render() {
        return(
            <View>
                <TextInput
                    style={{height: 45, width: 250,
                        backgroundColor: 'white',
                        borderColor: 'black', borderWidth: 0.5}}
                    placeholder=' Change Home Location: '
                />
                <Button
                    title='Submit'
                    color='black'
                    backgroundColor = '#f8f8f8'
                    style = {{padding: 5}}
                />
                <Button
                    title='Cancel'
                    color='black'
                    backgroundColor = '#f8f8f8'
                    style = {{padding: 5}}
                />
            </View>
        );
    }
}

export default ChangeHomeLocationScreen;