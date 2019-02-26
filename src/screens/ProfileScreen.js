
import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button, Tile, Avatar} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class ProfileScreen extends React.Component {
  render () {
    return (
      <View>
        <Avatar
          large
          rounded
          source={require('../images/ireland.png')}
          containerStyle={styles.AvatarStyle}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />

        <Tile
        // imageSrc={require()}
        style={styles.TopProfileStyle}
        >
          <Text style={styles.NameStyle}>User Name</Text>
          <Text>User Home</Text>
          <Button
            title='map button'
          />
          <Button
            title='Friends'
          />
          <Button
            title='Community'
          />
          <Button
            title='add button'
          />
          <Button
            title='Trips'
          />
          <Button
            title='Outings'
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