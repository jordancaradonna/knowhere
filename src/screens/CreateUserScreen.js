import React from 'react';
<<<<<<< HEAD
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
        
=======
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class CreateUserScreen extends React.Component {

  onCreateTripPress() {
    this.props.navigation.navigate('createtrip');
  }

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
        <Button
          title='Create a Trip'
          onPress={this.onCreateTripPress.bind(this)}
        />
>>>>>>> 6b2fc5eebf66ecfbf8847386d6fab976dcba0541
      </View>
    )
  }
}

export default CreateUserScreen;
