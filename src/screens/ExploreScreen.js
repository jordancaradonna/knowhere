import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

class ExploreScreen extends React.Component {

  render () {
    return (
      <View style={styles.container} >

        <Image 
            style={{width: 250, height: 60}} 
            source={require('../images/kwLogo.png')} />
        <TextInput
          style={{height: 35, width: 330,
                  backgroundColor: 'white', 
                  borderColor: '#83b4ff', borderWidth: 1}}
          placeholder='SEARCH: ' 
        />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'space-between',
  },
});

export default ExploreScreen;
