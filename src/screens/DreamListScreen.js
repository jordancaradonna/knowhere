import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class DreamListScreen extends React.Component {

  onProfilePress(){      
    this.props.navigation.navigate('profile');
    }

  render () {

    
    return (
      <ImageBackground
            source={require('../images/bucketList.png')}
            style={styles.container}>


          <Button
            small
            rounded
            title='Profile'
            color='black'
            backgroundColor = '#f8f8f8'
            style = {{padding: 5}} 
            onPress={this.onProfilePress.bind(this)} />




      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'space-between',
  },
});


export default DreamListScreen;
