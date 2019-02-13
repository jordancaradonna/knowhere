import React from 'react';
import { Text,
        TextInput, StyleSheet,
        ImageBackground, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Header } from 'react-native-elements';
import { emailChanged, passwordChanged, loginUser } from '../actions';



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


       <View style = {{justifyContent: 'space-between',
                        alignItems: 'center'}}>


        <Text style={[styles.title,]}>Knowhere
        </Text>



        <Button
            title='Sign up'
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            //color="white"
            //backgroundColor='#83b4ff'
            style = {{padding: 55}}
            onPress={this.onSignUpPress.bind(this)}
        />

        {this.renderError()}
        <TextInput
          style={{height: 45, width: 250,
                  backgroundColor: 'white',
                  borderColor: '#83b4ff', borderWidth: 0.5}}
          placeholder=' Email: '
          onChangeText={this.onEmailChange.bind(this)}
        />
        <Text> </Text>
        <TextInput
          secureTextEntry
          style={{height: 45, width: 250,
                  backgroundColor: 'white',
                  borderColor: '#83b4ff', borderWidth: 0.5}}
          placeholder=' Password:'
          onChangeText={this.onPasswordChange.bind(this)}
        />
        <Text> </Text>

        <Button
            title='Forgot Password?'
            color="black"
            backgroundColor='#white'
            onPress={this.onForgotPasswordPress.bind(this)}
        />



        <Button
            title='Sign In'
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            //color="white"
            //backgroundColor='#83b4ff'
            style = {{padding: 20}}
            onPress={this.onSignInPress.bind(this)}
        />


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
    fontSize: 28,
    padding: 22,
    fontStyle: 'italic',
    fontFamily: 'Chalkboard SE',
    color: 'black',
  },
  buttonTitle:{
    //fontSize: 16, doesnt work!
    //letterSpacing: 2,
    color: "white",
  },
  buttonStyle:{
    width: 85,
    //height: 45,
    backgroundColor: "#83b4ff",
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
