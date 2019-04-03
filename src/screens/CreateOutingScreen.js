import React from 'react';
import { View, Text, StyleSheet, TextInput, Switch, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-picker';

class CreateOutingScreen extends React.Component {

  onPostPress () {
    this.props.navigation.navigate('dash')
  }

  state = {
    photo: null,
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, respone => {
      if (Response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  //------------------STATE PROPERTIES FOR SWITCH----------------//
  //Initial state false for the switch. You can change it to true just to see.
  state = { switchValue: false };

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    //state changes according to switch
    //which will result in re-render the text
  };

  render () {
    const { photo } = this.state;
    return (
      
      <ScrollView>
      <View style={{justifyContent: "space-evenly"}}>
        <Text style={{ fontSize: 20, alignSelf: 'center', padding: 20}}>
          Create Outing
        </Text>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button
          title="Choose Photo"
          iconRight={{name:'photo', color:'black'}}
          onPress={this.handleChoosePhoto}
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.buttonStyle}
        />

        {/* ============== SCROLLABLE VIEW WHEN KEYBOARD IS ACTIVE ============ */}
        <KeyboardAwareScrollView>

          {/* ======== TEXT INPUT FOR DESCRIPTION OF TRIP/OUTING ========= */}
          <TextInput style={{ height: 160, width: 260,
                              backgroundColor: 'white', 
                              borderColor: '#ffffff', 
                              borderWidth: 5, }}
            placeholder='Trip Description'
            editable = {true}
            blurOnSubmit
            multiline = {true}
            onChangeText={(text) => this.setState({text})}
          />

          {/* =========TEXT INPUT FOR LOCATION======= */}
          <TextInput 
            style={{ height: 40, width: 200,
                    backgroundColor: 'white', 
                    borderColor: '#ffffff', 
                    borderWidth: 5, }}
            placeholder='Location'
            blurOnSubmit
          />

          {/*-----------INPUT FOR TAGGING OTHER USERS IN YOUR TRIP/OUTING------------*/}
        
          <TextInput
            style={{ height: 40, width: 200,
                    backgroundColor: 'white', 
                    borderColor: '#ffffff', 
                    borderWidth: 5, }}
            placeholder='Tag People'
            blurOnSubmit
          />
        </KeyboardAwareScrollView>     

        <View flexDirection='row' justifyContent='center' alignItems='center'>

          {/*-----------SWITCH FOR TOGGLING BETWEEN PUBLIC AND PRIVATE POSTING--------*/}
          <Text>{this.state.switchValue ? 'Private' : 'Public'}</Text>
          <Switch
            style={{ marginTop: 10, marginBottom: 10 }}
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
          <Text></Text>

          {/*-----------PUBLISH POST BUTTON------------*/}
        
          <Button
            title='Publish Post'
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            onPress={this.onPostPress.bind(this)}
            justifyContent='center'
          />
        </View>
      </View>
      </ScrollView>
      
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
    width: 130,
    height: 42,
    backgroundColor: "#83b4ff",
    borderRadius: 100, //makes it oval not squared
    elevation: 5,
    marginBottom: 5
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default CreateOutingScreen;