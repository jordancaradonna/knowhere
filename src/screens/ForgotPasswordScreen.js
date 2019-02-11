import React from 'react';
import { ImageBackground, Text, 
        TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class ForgotPasswordScreen extends React.Component {
  /* onSendEmailPress() {
    //send email? 
  } */
  
  render () {
    return (
      <ImageBackground source={require('../images/finalBackground2.jpg')}
                       style={styles.container}> 

        <Text style={[styles.title,]}> Knowhere </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>

        <TextInput
          style={{height: 42, width: 250,
                  backgroundColor: 'white', 
                  borderColor: '#83b4ff', borderWidth: 0.5}}
          placeholder='Email: ' 
        />
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>

        <Button
            title='send email'
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            //color="white"
            //backgroundColor='#83b4ff'
            style={{padding:10}}
        />
        
        <Text> </Text>   
        <Text> </Text>    

        
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
    width: 110,
    height: 43,
    backgroundColor: "#83b4ff",
    borderRadius: 100, //makes it oval not squared
    elevation: 5,
  }
});


export default ForgotPasswordScreen;
