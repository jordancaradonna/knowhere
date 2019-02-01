import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';


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
      
      <View> 
        <Text>                                       KNOWHERE       
        </Text>

        <Button
            title='Sign Up'
            color="#83b4ff"
            onPress={this.onSignUpPress.bind(this)}
        />

        <TextInput 
          style={{height: 50, borderColor: '#D3D3D3', borderWidth: 2}}
          placeholder='Email:' />
        <TextInput 
          style={{height: 50, borderColor: '#D3D3D3', borderWidth: 2}}
          placeholder='Password:' />
        

        <Button
            title='Sign in'
            color="#83b4ff"
            onPress={this.onSignInPress.bind(this)}
        />
        <Button
            title='Forgot Password?'
            color="#83b4ff"
            onPress={this.onForgotPasswordPress.bind(this)}
        />
      </View>
      
    )
  }
}



export default LoginScreen;
