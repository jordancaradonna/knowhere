import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class CreateUserScreen extends React.Component {
  onCancelPress() {
    this.props.navigation.navigate('login');
  }
  /* onConfirmPress(){
    this.props.navigation.navigate('accountinfo');
  }  */
  
  
  render () {
    return (
      <View>
        <Text>
          CreateUserScreen
          CreateUserScreen
          CreateUserScreen
          CreateUserScreen
          CreateUserScreen
          CreateUserScreen
        </Text>
        <TextInput placeholder='First Name:' />
        <TextInput placeholder='Last Name:' />
        <TextInput placeholder='Email:' />
        <TextInput placeholder='Password:' />
        <TextInput placeholder='Confirm Password:' />

        
        <Button
            title='Cancel / ?????Continue??????'
            onPress={this.onCancelPress.bind(this)}
        />
        
        
      </View>
    )
  }
}

export default CreateUserScreen;
