import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  ScrollView,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CameraRollPicker from "react-native-camera-roll-picker";

import {
  descriptionChanged,
  outingPhotoChanged,
  locationChanged,
  privacyChanged,
  createOuting
} from '../actions'

class CreateOutingScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state={selecting: false}
  }

  onPostPress () {
    const { description, outingPhoto, location, privacy, username, profilePhoto } = this.props

    this.props.createOuting({ description, outingPhoto, location, privacy, username, profilePhoto }, () => {
      this.props.navigation.navigate('dash')
    });
  }
  onDescriptionChange(text){
    this.props.descriptionChanged(text);
  }

  onLocationChange(text){
    this.props.locationChanged(text);
  }

  onTogglePrivacy(privacy) {
    this.props.privacyChanged(privacy);
  }


  onSelectPhotoPress() {
    this.setState({ selecting: true });
  }

  getSelectedImage(images) {
    const image = images[0];
    this.props.outingPhotoChanged(image);
  }

  onSubmitPhotoPress() {
    this.setState({ selecting: false });
  }

  renderPhoto() {
    console.log(this.props.outingPhoto.uri);
    if(this.props.outingPhoto != ''){
      return (
        <Image
          source={{ uri: this.props.outingPhoto.uri }}
          style={{ alignSelf: 'center', height: 200, width: 200 }}
        />
      )
    }
  }

  render () {
    if(!this.state.selecting) {
      return (

        <ScrollView>
        <View style={{justifyContent: "space-evenly"}}>
          <Text style={{ fontSize: 20, alignSelf: 'center', padding: 20}}>
            Create Outing
          </Text>
          <Button
            title='Select Photo'
            color="black"
            backgroundColor='#white'
            style={{padding:8}}
            onPress={this.onSelectPhotoPress.bind(this)}
          />
          {this.renderPhoto()}



            {/* ======== TEXT INPUT FOR DESCRIPTION OF TRIP/OUTING ========= */}
            <TextInput style={{ height: 160, width: 260,
                                backgroundColor: 'white',
                                borderColor: '#ffffff',
                                borderWidth: 5, }}
              placeholder='Outing Description'
              multiline = {true}
              onChangeText={this.onDescriptionChange.bind(this)}
              value={this.props.description}
              blurOnSubmit
            />

            {/* =========TEXT INPUT FOR LOCATION======= */}
            <TextInput
              style={{ height: 40, width: 200,
                      backgroundColor: 'white',
                      borderColor: '#ffffff',
                      borderWidth: 5, }}
              placeholder='Location'
              onChangeText={this.onLocationChange.bind(this)}
              value={this.props.location}
              blurOnSubmit
            />

            {/*-----------PUBLISH POST BUTTON------------*/}

            <Button
              title='Publish Post'
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.buttonStyle}
              onPress={this.onPostPress.bind(this)}
              justifyContent='center'
            />
        </View>
        </ScrollView>

      )
    }
    else {
      return (
        <View style={styles.container}>
          <Button
              title='Submit Photo'
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.bigButtonStyle}
              style={{padding:8}}
              onPress={this.onSubmitPhotoPress.bind(this)}
          />
          <CameraRollPicker
          callback={this.getSelectedImage.bind(this)}
          selectSingleItem />
        </View>
      )
    }
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
  bigButtonStyle:{
    width: 180,
    height: 45,
    backgroundColor: "#83b4ff",
    borderRadius: 100, //makes it oval not squared
    elevation: 5,
  }
});

const mapStateToProps = ({ out, info }) => {
  const { description, outingPhoto, location, privacy, loading, error } = out;
  const { username, profilePhoto} = info;

  return { description, outingPhoto, location, privacy, loading, error, username, profilePhoto };
};

export default connect (
  mapStateToProps,{
    descriptionChanged,
    outingPhotoChanged,
    locationChanged,
    privacyChanged,
    createOuting
  }
)
(CreateOutingScreen);
