import React from 'react';
import { View, Text, Dimensions, ImageBackground, SafeAreaView } from 'react-native';
import { Button, Tile, Avatar} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;



class ViewProfileScreen extends React.Component {

onFollowPress() {

}

onCreateOutingPress() {
  this.props.navigation.navigate('createouting');
}
onDreamListPress(){
  this.props.navigation.navigate('dreamlist');
}


  render () {
    return (
      <View marginTop='24'>
        <ImageBackground source={require('../images/background1.jpg')}
                       style={styles.coverPhoto}
                       justifyContent='bottom'>
          <View alignItems='center'>        
            <Avatar
              large
              rounded
              //source={require('../static/temp_profile.jpg')}
              containerStyle={styles.AvatarStyle}
              onPress={() => console.log("Works!")}
              activeOpacity={1}
              title='PIC'
            ></Avatar>
          </View>
                  
        <View flexDirection='row' justifyContent='space-evenly' alignItems='flex-end'>
          <View flexDirection='column'>
            <Text>Home City</Text>
          </View>
          
          <View alignItems='center' justifyContent='top'>
            <Text style={styles.NameStyle}>User Name</Text>
          </View>

          <View>
            <Text># of Followers</Text>
          </View>
        </View>

        <View justifyContent='center'>
          <Button
            buttonStyle={styles.buttonStyle}
            rounded
            title='Follow'
            titleStyle={styles.buttonTitle}
            color='black'
            backgroundColor = '#f8f8f8'
            style = {{padding: 5}}
            onPress={this.onFollowPress.bind(this)}
          />
        </View>

     
        <View alignItems='flex-end' flexDirection='row'> 
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
        </ImageBackground>

      </View>
    )
    
  }
}



const styles = {
  AvatarStyle: {
    marginTop: 20,
    marginBottom: 22,
    // marginLeft: 30,
  },
  DividerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  TopProfileStyle: {
    width: SCREEN_WIDTH,
    // height: 150,
    alignItems: 'center',
    // flex: 2,
    flexDirection: 'row',
  },
  NameStyle: {
    fontFamily: 'Al Nile',
    fontSize: 18,
    color: 'black',
    justifyContent: 'center'
  },
  container2:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'bottom',
  },
  buttonContainer:{
    flex: 1,
    // marginLeft: 15,
    // marginRight: 25,
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
  },
  coverPhoto:{
    width: '100%',
    height: '60%'
  }
};

export default ViewProfileScreen;