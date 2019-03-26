import React from 'react';
import { Text,
        TextInput, StyleSheet,
        ImageBackground, View, Image } from 'react-native';
import { Button } from 'react-native-elements';

import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import DashboardScreen from './DashboardScreen';




class LoginScreen extends React.Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }


  onSignUpPress() {
    this.props.navigation.navigate('createuser');
  }
  onSignInPress() {
    const { email, password } = this.props

    this.props.loginUser({ email, password}, () => {
      this.props.navigation.navigate('main')
    });
  }
  onForgotPasswordPress() {
    this.props.navigation.navigate('forgotpassword');
  }


  renderError () {
    if(this.props.error) {
      return(
        <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
      );
    }
  }
 


  render () {
    return (

      <ImageBackground source={require('../images/finalBackground.jpg')}
                       style={styles.container}>


       <View style = {{justifyContent: 'space-between',alignItems: 'center'}}>

      <Image 
            style={{width: 300, height: 140}} 
            source={require('../images/kwLogo.png')} />

      
      <Text> </Text>
      <Text> </Text>
      <Text> </Text> 

        {this.renderError()}


        <TextInput
          style={{height: 45, width: 250,
                  backgroundColor: 'white',
                  borderColor: 'black', borderWidth: 0.5}}
          placeholder=' Email: '
          onChangeText={this.onEmailChange.bind(this)}
        />
        <Text> </Text>
        <TextInput
          secureTextEntry
          style={{height: 45, width: 250,
                  backgroundColor: 'white',
                  borderColor: 'black', borderWidth: 0.5}}
          placeholder=' Password:'
          onChangeText={this.onPasswordChange.bind(this)}
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
             title='Sign Up'
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
  title:{ //Knowhere - nope
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
  },
  errorTextStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'red'
  }
});

//fontFamily:  Thonburi, Chalkboard SE, Courier New,




const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginScreen);
