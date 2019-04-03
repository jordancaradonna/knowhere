import React from 'react';
import { ImageBackground, StyleSheet, View,
        Text, TextInput, Image, cameraRoll, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button, Avatar } from 'react-native-elements';
import CameraRollPicker from "react-native-camera-roll-picker";
import {
  fnameChanged,
  lnameChanged,
  usernameChanged,
  cityChanged,
  createProfile,
  photoChanged,
 } from '../actions'
 

class AccountInfoScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state={selecting: false}
  }

  onSignInPress() {
    const {fname, lname, city, username, photo } = this.props

    this.props.createProfile({ fname, lname, username, city, photo }, () => {
      this.props.navigation.navigate('profile')
    });
  }
  onFnameChange(text) {
    this.props.fnameChanged(text);
  }
  onLnameChange(text) {
    this.props.lnameChanged(text);
  }
  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }
  onCityChange(text) {
    this.props.cityChanged(text);
  }

  renderError () {
    if(this.props.error) {
      return(
        <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
      );
    }
  }

  onSelectPhotoPress() {
    this.setState({ selecting: true });
  }

  getSelectedImage(images) {
    const image = images[0];
    this.props.photoChanged(image);
  }

  onSubmitPhotoPress() {
    this.setState({ selecting: false });
  }

  renderPhoto() {
    console.log(this.props);
    if(this.props.photo != null){
      return (
        <Avatar
          rounded
          source={{ uri: this.props.photo.uri }}
          large
        />
      )
    }
  }

  render () {
    if(!this.state.selecting) {
      return (
        <ScrollView style={{flex:1}}>
          <ImageBackground source={require('../images/finalBackground2.jpg')}
                         style={styles.container}>


            <Image
              style={{width: 300, height: 120}}
              source={require('../images/kwLogo.png')} />

            <Text> </Text>

            <Text style={[styles.otherText,]}> Welcome! </Text>
            <Text style={[styles.otherText,]}> Just a couple more things </Text>
            <Text style={[styles.otherText,]}> to set up your account. </Text>

            <Text> </Text>
            <Text> </Text>

            {this.renderError()}

            <TextInput
              style={{height: 45, width: 250, backgroundColor: 'white',
                     borderColor: 'black', borderWidth: 0.5}}
              placeholder=' First Name:'
              value={this.props.fname}
              onChangeText={this.onFnameChange.bind(this)}
            />
               <Text >   </Text>

            <TextInput
              style={{height: 45, width: 250,
                      backgroundColor: 'white',
                      borderColor: 'black', borderWidth: 0.5}}
              placeholder=' Last Name:'
              value={this.props.lname}
              onChangeText={this.onLnameChange.bind(this)}
            />
              <Text >   </Text>

            <TextInput
              style={{height: 45, width: 250,
                      backgroundColor: 'white',
                      borderColor: 'black', borderWidth: 0.5}}
              placeholder='Username'
              value={this.props.username}
              onChangeText={this.onUsernameChange.bind(this)}
            />
               <Text >   </Text>
            <TextInput style={{height:5}}/>

            <TextInput
              style={{height: 45, width: 250,
                      backgroundColor: 'white',
                      borderColor: 'black', borderWidth: 0.5}}
              placeholder='Choose City'
              value={this.props.city}
              onChangeText={this.onCityChange.bind(this)}
            />
              <Text> </Text>

            <Button
              title='Select Photo'
              color="black"
              backgroundColor='#white'
              style={{padding:8}}
              onPress={this.onSelectPhotoPress.bind(this)}
            />
            
            {this.renderPhoto()}
              <Text> </Text>

            <Button
              title='Create Profile'
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.bigButtonStyle}
              //color="white"
              //backgroundColor='#83b4ff'
              style={{padding:8}}
              onPress={this.onSignInPress.bind(this)}
            />

          </ImageBackground>
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
    width: 90,
    height: 45,
    backgroundColor: "#83b4ff",
    borderRadius: 100, //makes it oval not squared
    elevation: 5,
  },
  bigButtonStyle:{
    width: 180,
    height: 45,
    backgroundColor: "#83b4ff",
    borderRadius: 100, //makes it oval not squared
    elevation: 5,
  }
});

const mapStateToProps = ({ info }) => {
  const { fname, lname, city, username, photo } = info;

  return { fname, lname, city, username, photo };
};

export default connect (
  mapStateToProps,{
    fnameChanged,
    lnameChanged,
    usernameChanged,
    cityChanged,
    createProfile,
    photoChanged
  } 
) 
(AccountInfoScreen);
