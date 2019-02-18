import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button, Tile, Avatar } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class ProfileScreen extends React.Component {

  onMapButtonPress() {
    this.props.navigation.navigate('map');
  }
  
  onFriendsPress() {
    this.props.navigation.navigate('friends');
  }

  // onCommunityPress() {
  //   this.props.navigation.navigate('community');
  // }
  
  // onAddButtonPress() {
  //   this.props.navigation.navigate('add');
  // }

  onTripsPress() {
    this.props.navigation.navigate('trips');
  }

  onOutingsPress() {
    this.props.navigation.navigate('outings');
  }

  render () {
    return (
      <View>
        <Avatar
          medium
          rounded
          //source={require()}
          containerStyle={style.AvatarStyle}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          justifyContent='center'
          alignItems='center'
        />

        <Tile
        // imageSrc={require()}
        style={styles.TopProfileStyle}
        >
          <Text style={styles.NameStyle}>User Name</Text>
          <Text>User Home</Text>
          <Button
            small
            //icon=
            title='map button' //here til icon is uploaded
            rounded
            backgroundColor='#b0d0ff'
            onPress={this.onMapButtonPress.bind(this)}
          />
          <Button
            small
            title='Friends'
            backgroundColor='#b0d0ff'
            onPress={this.onFriendsPress.bind(this)}
          />
          <Button
            small
            title='Community'
            backgroundColor='#b0d0ff'
            onPress={this.onCommunityPress.bind(this)}
          />
          <Button
            small
            //icon=
            title='add button' //here til icon is uploaded
            rounded
            backgroundColor='#b0d0ff'
            onPress={this.onAddButtonPress.bind(this)}
          />
          <Button
            small
            title='Trips'
            backgroundColor='#b0d0ff'
            onPress={this.onTripsPress.bind(this)}
          />
          <Button
            small
            title='Outings'
            backgroundColor='#b0d0ff'
            onPress={this.onOutingsPress.bind(this)}
          />
        </Tile>
      </View>
    )
  }
}
const styles = {
  AvatarStyle: {
  marginTop: 20,
  marginBottom: 20,
  },
  DividerStyle: {
  marginTop: 10,
  marginBottom: 10,
  },
  TopProfileStyle: {
  width: SCREEN_WIDTH,
  height: 150,
  alignItems: 'center',
  justifyContent: 'center'
  },
  NameStyle: {
  fontFamily: 'Al Nile',
  fontSize: 18,
  color: '#99b3ea'
  }
};

export default ProfileScreen;
