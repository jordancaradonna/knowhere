import React from 'react';
import { View, Text, TextInput, Button} from 'react-native';


class AccountInfoScreen extends React.Component {
  onContinuePress() {
    this.props.navigation.navigate('login');
  }
  
  render () {
    return (
      <View>
        <Text>
         Account Info Screen comes after CreateUserScreen
        </Text>
        <TextInput
          style={{height: 50, borderColor: '#D3D3D3', borderWidth: 2}}
          placeholder='Choose Country' 
        />
        <TextInput
          style={{height: 50, borderColor: '#D3D3D3', borderWidth: 2}}
          placeholder='Choose City' 
        />

        <Button
            title='Continue'
            color="#83b4ff"
            onPress={this.onContinuePress.bind(this)}
        />
        
      </View>
    )
  }
}

export default AccountInfoScreen;
