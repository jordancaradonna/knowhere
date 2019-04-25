import React from 'react';
import { View, Text, ScrollView } from 'react-native';

class FriendScreen extends React.Component {
  render () {
    <ScrollView >
        <Header
          centerComponent={{ text: 'Friends' }}
          backgroundColor= 'white'
        />
        <SearchBar
          lightTheme
          round
          ref='searchBar'
          placeholder='Search'
          placeholderTextColor='white'
          onChangeText = {this.onSearchUser.bind(this)}
        />
    </ScrollView>
    // return (
    //   <View>
    //     <Text>
    //       FriendScreen
    //     </Text>
    //   </View>
    // )
  }
}

export default FriendScreen;
