import React from 'react';
import { ImageBackground, StyleSheet, 
        Text, TextInput, Image } from 'react-native';
import { Button } from 'react-native-elements';

class AccountInfoScreen extends React.Component {
  onSignInPress() {
    this.props.navigation.navigate('main');
  }
  
  render () {
    return (
      <ImageBackground source={require('../images/finalBackground2.jpg')}
                       style={styles.container}> 

       
        <Image 
            style={{width: 300, height: 100}} 
            source={require('../images/kwLogo.png')} />

        <Text> </Text>

        <Text style={[styles.otherText,]}> Welcome! </Text>
        <Text style={[styles.otherText,]}> Just a couple more things </Text>
        <Text style={[styles.otherText,]}> to set up your account. </Text>
        
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>

        <TextInput
          style={{height: 40, width: 200,
                  backgroundColor: 'white', 
                  borderColor: '#83b4ff', borderWidth: 0.5}}
          placeholder='Choose Country' 
        />
           <TextInput style={{height:5}}/>
        <TextInput
          style={{height: 40, width: 200,
                  backgroundColor: 'white', 
                  borderColor: '#83b4ff', borderWidth: 0.5}}
          placeholder='Choose City' 
        />

        <Text> </Text>
        <Text> </Text>
        <Text> </Text>

        <Button
            title='add photo'
            color="black"
            backgroundColor='#white'
            style={{padding:8}}
        />
        
        <Text> </Text>

        <Button
            title='Sign in'
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            //color="white"
            //backgroundColor='#83b4ff'
            style={{padding:8}}
            onPress={this.onSignInPress.bind(this)}
        />
        
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  title:{
    fontSize: 28,
    fontFamily: 'Chalkboard SE',
    padding: 22,
    color: 'black',
  },
  otherText:{
    fontSize: 16,
  },
  buttonTitle:{
    fontSize: 16,
    letterSpacing: 2,
    color: "white",
  },
  buttonStyle:{
    width: 90,
    height: 45,
    backgroundColor: "#83b4ff",
    borderRadius: 100, //makes it oval not squared
    elevation: 5,
  }
});

export default AccountInfoScreen;
