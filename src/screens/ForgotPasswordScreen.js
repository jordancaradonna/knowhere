import React from 'react';
import { View, Text, TextInput} from 'react-native';
import { Button } from 'react-native-elements';

class ForgotPasswordScreen extends React.Component {
  /* onSendEmailPress() {
    //send email? 
  } */
  
  render () {
    return (
      <View>
        <Text>
          Forgot Password Screen
          -------------------
          -------------------
          ---------------
        </Text>
        <TextInput placeholder='NOT textInput, need to send Email'/>
      </View>
    )
  }
}

export default ForgotPasswordScreen;
