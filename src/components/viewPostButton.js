import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

class viewPostButton extends React.Component {
  render () {
    return (
      <View>
         <Text 
            onPress = {this.onViewAllPress.bind(this)}
            style = {{textAlign: 'right',  fontSize: 10, 
                      paddingRight: 10, paddingTop: 5}} >
            View Post
        </Text>
      </View>
    )
  }
}

export default viewPostButton;

