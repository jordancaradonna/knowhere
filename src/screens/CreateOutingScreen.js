import React from 'react';
import { View, Text, StyleSheet, TextInput, CameraRoll } from 'react-native';
import { Button } from 'react-native-elements';

class CreateOutingScreen extends React.Component {

  onPostPress () {
    this.props.navigation.navigate('dash')
  }

  getPhotosFromGallery () {
    CameraRoll.getPhotos({ first : 1000000 })
      .then(res => {
        console.log(res, "images data")
      })
  }

  render () {
    return (
      <View style={{justifyContent: "space-evenly"}}>
        <Text style={{ fontSize: 20, alignSelf: 'center', padding: 20}}>
          Create Outing
        </Text>
        <TextInput style={{ height: 160, width: 200,
                            backgroundColor: 'white', 
                            borderColor: '#ffffff', 
                            borderWidth: 0.5, }}
          placeholder='Outing Description'
          editable = {true}
          multiline = {true}
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput style={{ height: 40, width: 200,
                            backgroundColor: 'white', 
                            borderColor: '#ffffff', 
                            borderWidth: 0.5, }}
          placeholder='Location'
        />
        <TextInput style={{ height: 40, width: 200,
                            backgroundColor: 'white', 
                            borderColor: '#ffffff', 
                            borderWidth: 0.5, }}
          placeholder='Tag People'
        />
        <Button
          title='Post Outing'
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.buttonStyle}
          onPress={this.onPostPress.bind(this)}
          justifyContent='center'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  container2:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    flex: 1,
  },
  title:{
    fontSize: 28,
    fontFamily: 'Chalkboard SE',
    padding: 22,
    color: 'black',
  },
  otherText:{
    fontSize: 16,
  },
  buttonTitle:{
    fontSize: 16,
    letterSpacing: 2,
    color: "white",
  },
  buttonStyle:{
    //width: 90,
    height: 42,
    backgroundColor: "#83b4ff",
    borderRadius: 100, //makes it oval not squared
    elevation: 5,
  }
});

export default CreateOutingScreen;
