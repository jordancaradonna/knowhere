import React from 'react';
import { Text, 
        TextInput, StyleSheet, 
        ImageBackground, View } from 'react-native';
import { Button } from 'react-native-elements';




class LoginScreen extends React.Component {



  onSignUpPress() {
    this.props.navigation.navigate('createuser');
  }
  onSignInPress() {
    this.props.navigation.navigate('main');
  }
  onForgotPasswordPress() {
    this.props.navigation.navigate('forgotpassword');
  } 
  
  render () {
    return (
      
      <ImageBackground source={require('../images/finalBackground.jpg')}
                       style={styles.container}> 


       <View style = {{justifyContent: 'space-between', 
                        alignItems: 'center'}}>


        <Text style={[styles.title,]}>Knowhere      
        </Text>
        <Text> </Text>
       


        <TextInput 
          style={{height: 45, width: 250, 
                  backgroundColor: 'white', 
                  borderColor: '#83b4ff', borderWidth: 0.5}}
          placeholder=' Email: ' 
        />
        <Text> </Text>
        <TextInput 
          style={{height: 45, width: 250, 
                  backgroundColor: 'white', 
                  borderColor: '#83b4ff', borderWidth: 0.5}}
          placeholder=' Password:' 
        />
        <Text> </Text>
       

        <Button
            small 
            rounded
            title='Forgot Password?'
            color="black"
            backgroundColor='#white'
            marginBottom= '15'
            onPress={this.onForgotPasswordPress.bind(this)}
        />

       
      


      <View style={styles.container2}>
        
        <View style={styles.buttonContainer}> 
          <Button
            title='Sing Up'
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            //color="white"
            backgroundColor='#83b4ff'
            //style={{padding: 15}}
            onPress={this.onSignUpPress.bind(this)}   />
        </View>

        <View style={styles.buttonContainer}>   
          <Button
            title='Sign In'
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            //color="white"
            backgroundColor='#b0d0ff'
            //style={{padding: 15}}
            onPress={this.onSignInPress.bind(this)}  />
        </View>
      </View>





      </View>
      </ImageBackground>
    )
  }
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title:{ //Knowhere
    fontSize: 33,
    padding: 40,
    marginBottom: 50,
    fontStyle: 'italic',
    fontFamily: 'Chalkboard SE',
    color: 'black',
  },
  container2:{
    flex: 1,
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    flex: 1,
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
  },
  buttonTitle:{
    //fontSize: 16, doesnt work!
    //letterSpacing: 2,
    color: "white",
  },
  buttonStyle:{
    width: 100,
    //height: 45,
   //backgroundColor: "#83b4ff",
    borderRadius: 100, //makes it oval not squared
    elevation: 5,
  }
});

//fontFamily:  Thonburi, Chalkboard SE, Courier New, 

export default LoginScreen;

