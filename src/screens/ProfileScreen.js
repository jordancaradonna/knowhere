import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button, Tile, Avatar, ThemeProvider} from 'react-native-elements';


const SCREEN_WIDTH = Dimensions.get('window').width;



class ProfileScreen extends React.Component {


  onSettingsPress() {
    this.props.navigation.navigate('settings');
  }
  onDreamListPress(){
    this.props.navigation.navigate('dreamlist');
  }
  onTripsPress() {
    console.log("DOES IT WORK?");
    this.props.navigation.navigate('trips');
  }
  onOutingsPress() {
    console.log("DOES IT WORK?");
    this.props.navigation.navigate('outings');
  }
  onCreateTripPress() {
    this.props.navigation.navigate('createtrip');
  }
  onCreateOutingPress() {
    this.props.navigation.navigate('createouting');
  }


  render () {
    return (
      <View>
        <Avatar
          medium
          rounded
          source={require('../images/jprofile.png')}
          containerStyle={styles.AvatarStyle}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          justifyContent='center'
          alignItems='center'
        />


        <View // imageSrc={require()}
            style={styles.TopProfileStyle} >

          <Text style={styles.NameStyle}> User Name</Text>
          <Text></Text>

          <Button
            small
            rounded
            title='settings'
            color='black'
            backgroundColor = '#f8f8f8'
            style = {{padding: 5}}
            onPress={this.onSettingsPress.bind(this)}
          />
          <Button
            small
            rounded
            title='myMap'
            color='black'
            backgroundColor = '#f8f8f8'
            style = {{padding: 5}}
          />

          <Button
            small
            rounded
            title='Dream List'
            color='black'
            backgroundColor = '#f8f8f8'
            style = {{padding: 5}} 
            onPress={this.onDreamListPress.bind(this) } />

          

          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>



     
        <View style={styles.container2}> 

          <View style={styles.buttonContainer}> 
            <Button
              small
              title='Trips'
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.buttonStyle}
              color='#83b4ff'
              backgroundColor='#f4f4ff' 
              onPress={this.onTripsPress.bind(this)}
               />
           </View>
        <View style={styles.buttonContainer}> 
            <Button
              small
              title='Outings'
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.buttonStyle}
              color='white'
              backgroundColor='#b0d0ff'
              onPress={this.onOutingsPress.bind(this)}
               />
           </View>
        </View>


        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      
        <Button
            small
            rounded
            title='Create Trip'
            color='black'
            backgroundColor = '#f8f8f8'
            style = {{padding: 5}} 
            onPress={this.onCreateTripPress.bind(this) } />

          <Button
            small
            rounded
            title='Create Outing'
            color='black'
            backgroundColor = '#f8f8f8'
            style = {{padding: 5}} 
            onPress={this.onCreateOutingPress.bind(this) } />





      </View>

      
    )
    
  }
}



const styles = {
  AvatarStyle: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
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
    color: 'black'
  },
  container2:{
    flex: 1,
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    flex: 1,
    marginLeft: 25,
    marginRight: 25,

  },
  buttonTitle:{
    fontSize: 16,
    letterSpacing: 2,
  },
  buttonStyle:{
    width: 115,
    height: 44,
    //padding: 20,
    borderRadius: 100, //makes it oval not squared
    elevation: 5,
  }
};

export default ProfileScreen;