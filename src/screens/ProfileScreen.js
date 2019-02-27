import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button, Tile, Avatar} from 'react-native-elements';


const SCREEN_WIDTH = Dimensions.get('window').width;



class ProfileScreen extends React.Component {

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
          //source={require('../static/temp_profile.jpg')}
          containerStyle={styles.AvatarStyle}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          justifyContent='center'
          alignItems='center'
        />


        <View // imageSrc={require()}
            style={styles.TopProfileStyle} >

          <Text style={styles.NameStyle}>User Name</Text>
          <Text></Text>

          <Button
            small
            rounded
            title='myMap'
            color='black'
            backgroundColor = '#f4f4ff'
            style = {{padding: 5}}
          />
          <Button
            small
            rounded
            title='add'
            color='black'
            backgroundColor = '#f4f4ff'
            style = {{padding: 5}}
          />
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
              backgroundColor='#f4f4ff'/>
           </View>
        <View style={styles.buttonContainer}> 
            <Button
              small
              title='Outings'
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.buttonStyle}
              color='white'
              backgroundColor='#b0d0ff'/>
           </View>
        </View>





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