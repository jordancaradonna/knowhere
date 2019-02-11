import React from 'react';
import { View, Text, TextInput, Button} from 'react-native';


class CreateUserScreen extends React.Component {
  onCancelPress() {
    this.props.navigation.navigate('login');
  }
  onConfirmPress(){
    this.props.navigation.navigate('accountinfo');
  }

  render () {
    return (
      <View>

        <Text>                              Create User Screen</Text>

        <TextInput
          style={{height: 50, borderColor: '#D3D3D3', borderWidth: 2}}
          placeholder='First Name:'
          />
        <TextInput
          style={{height: 50, borderColor: '#D3D3D3', borderWidth: 2}}
          placeholder='Last Name:' />
        <TextInput
          style={{height: 50, borderColor: '#D3D3D3', borderWidth: 2}}
          placeholder='Email:' />
        <TextInput
           style={{height: 50, borderColor: '#D3D3D3', borderWidth: 2}}
           placeholder='Password:' />
        <TextInput
           style={{height: 50, borderColor: '#D3D3D3', borderWidth: 2}}
           placeholder='Confirm Password:' />


         <Button
            title='Confirm'
            color="#83b4ff"
            onPress={this.onConfirmPress.bind(this)}
        />
        <Button
            title='Cancel'
            color="#83b4ff"
            onPress={this.onCancelPress.bind(this)}
        />
      </View>
    )
  }
}

export default CreateUserScreen;
