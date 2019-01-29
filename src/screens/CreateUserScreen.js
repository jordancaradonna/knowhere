import React from 'react';
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
      </View>
    )
  }
}

export default CreateUserScreen;
