import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { usernameChanged, submitUsername,
             cityChanged, submitCity } from '../actions';

class EditProfile extends Component {

  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }
  onCityChange(text) {
    this.props.cityChanged(text);
  }
  onCancelPress() {
      this.props.navigation.navigate('settings');
  }
  onSubmitPress() { 
    const { username } = this.props;
    const { city } = this.props;
    this.props.submitUsername({username})
    this.props.submitCity({city})
    this.props.navigation.navigate('profile');
}
  
    render() {
        return(
            <ImageBackground source={require('../images/kwFeels.png')}
                    style={[styles1.container,]}>
                <Text> </Text>
                
                <Text style={[styles1.title,]} 
                        >
                    Edit Profile
                </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>

                <TextInput
                    style={{height: 45, width: 250,
                        backgroundColor: 'white',
                        borderColor: 'black', borderWidth: 0.5,
                        marginBottom: 20}}
                    placeholder=' Change Username: '
                    value={this.props.username}
                    onChangeText={this.onUsernameChange.bind(this)}
                />

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
                    rounded
                    style= {[styles1.buttonStyle,]}
                    title='Submit'
                    color='black'
                    backgroundColor = '#f8f8f8'
                    style = {{padding: 5}}
                    onPress={this.onSubmitPress.bind(this)}
                />
                <Button
                    rounded
                    style= {[styles1.buttonStyle,]}
                    title='Cancel'
                    color='black'
                    backgroundColor = '#f8f8f8'
                    style = {{padding: 5}}
                    onPress={this.onCancelPress.bind(this)}
                />
            </ImageBackground>
        );
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
      fontSize: 25,
      //fontFamily: 'Chalkboard SE',
      padding: 5,
      color: 'black'
      
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
    }
  });

  const mapStateToProps = ({ info }) => {
    const { fname, lname, city, username, photo } = info;

    return { fname, lname, city, username, photo };
  };

  export default connect (
    mapStateToProps,{
      usernameChanged,
      submitUsername,
      cityChanged,
      submitCity
    }
  )(EditProfile);
