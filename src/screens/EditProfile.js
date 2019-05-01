import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, 
             ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import {Button, Avatar } from 'react-native-elements'; 
import CameraRollPicker from "react-native-camera-roll-picker";
import { usernameChanged, 
        submitUsername,
        cityChanged, 
        submitCity,
        photoChanged,
        submitPhoto } from '../actions';

class EditProfile extends Component { 

  constructor(props) {
    super(props)
    this.state={selecting: false}
  }

  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }
  onCityChange(text) {
    this.props.cityChanged(text);
  }
  onPhotoChange(image){
      this.propts.photoChanged(image);
  }
  onCancelPress() {
      this.props.navigation.navigate('settings');
  } 
  onSubmitPress() { 
    const { username } = this.props;
    const { city } = this.props;
    const { photo } = this.props;
    this.props.submitUsername({username})
    this.props.submitCity({city})
    this.props.submitPhoto({photo})
    this.props.navigation.navigate('profile');
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
  
    render() {
        if(!this.state.selecting) {

        return(
          <ImageBackground source={require('../images/kwFeels.png')}
                           style = {[styles1.container,]}>
               
                
                <Text style={[styles1.title,]} >
                    Edit Profile
                </Text>

                <Text> </Text>
                <Text> </Text>
                <Text> </Text>

                <Text style={{marginTop:40}}> Change Username: </Text>
                <TextInput
                    style={{height: 45, width: 250,
                        backgroundColor: 'white',
                        borderColor: 'black', borderWidth: 0.5,
                        marginBottom: 20}}
                    placeholder=' Change Username: '
                    value={this.props.username}
                    onChangeText={this.onUsernameChange.bind(this)}
                />
                <Text style={{marginTop: 25}}> Change Home Location: </Text>
                <TextInput
                    style={{height: 45, width: 250,
                        backgroundColor: 'white',
                        borderColor: 'black', borderWidth: 0.5,
                        marginBottom: 20}}
                    placeholder=' Change Home Location: '
                    value={this.props.city}
                    onChangeText={this.onCityChange.bind(this)}
                />

                <Button

                    title='Select Photo'
                    color="black"
                    backgroundColor='#white'
                    borderColor='#black'
                    style={{padding:8}}
                    onPress={this.onSelectPhotoPress.bind(this)}
                />   
                {this.renderPhoto()}
           
              <View>
                <Button
                    rounded
                    style= {[styles1.buttonStyle,]}
                    title='Submit'
                    color='black'
                    backgroundColor = '#f4f4ff'
                    style = {{padding: 5}}
                    onPress={this.onSubmitPress.bind(this)}
                />
                <Button
                    rounded
                    style= {[styles1.buttonStyle,]}
                    title='Cancel'
                    color='black'
                    backgroundColor = '#f4f4ff'
                    style = {{padding: 5}}
                    onPress={this.onCancelPress.bind(this)}
                />
                </View>
            </ImageBackground>
        );
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
                selectSingleItem 
            />
          </View>
        )
      }
    }
}


const styles1 = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
    },
    // container2:{
    //   flex: 1,
    //   flexDirection: 'row',
    //   justifyContent: 'center',
    // },
    title:{
      fontSize: 24,
      //fontFamily: 'Chalkboard SE',
      padding: 5,
      color: 'black' 
    },
    otherText:{
      fontSize: 16,
    },
    // buttonTitle:{
    //   fontSize: 28,
    //   letterSpacing: 2,
    //   //color: "white",
    // },
    buttonStyle:{
      //width: 350,
      marginLeft: 0.0,
      marginRight:0.0,
      borderColor: "grey",
      //borderRadius: 100, //makes it oval not squared
      //elevation: 5,
    },
    buttonTitle:{
        fontSize: 16,
        letterSpacing: 2,
        color: "white",
      },
    bigButtonStyle:{
        width: 180,
        height: 45,
        backgroundColor: "#83b4ff",
        borderRadius: 100, //makes it oval not squared
        elevation: 5,
      }
  });

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
    mapStateToProps, {
      usernameChanged,
      submitUsername,
      cityChanged,
      submitCity,
      photoChanged,
      submitPhoto
    }
    )(EditProfile);
