import React from 'react';
import { View, Text, Button, Image } from 'react-native';


class DashboardScreen extends React.Component {

  render () {
    return (
      <View style={
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text style={{ fontSize: 30}}>
          DashboardScreen
        </Text>
      </View>
    )
  }
}

export default DashboardScreen;
