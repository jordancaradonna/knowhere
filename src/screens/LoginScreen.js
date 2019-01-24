import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class LoginScreen extends React.Component {

  onSignUpPress() {
    this.props.navigation.navigate('createuser');
  }

  render () {
    return (
      <View>
        <Text>
          LoginScreen
          LoginScreen
          LoginScreen
          LoginScreen
          LoginScreen
          LoginScreen
        </Text>
        <Button
            title='Sign Up'
            onPress={this.onSignUpPress.bind(this)}
        />
      </View>
    )
  }
}

export default LoginScreen;
