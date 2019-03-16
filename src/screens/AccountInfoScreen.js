import React from 'react';
import { ImageBackground, StyleSheet,
        Text, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import {
  fnameChanged,
  lnameChanged,
  usernameChanged,
  cityChanged,
  createProfile
 } from '../actions'

class AccountInfoScreen extends React.Component {

  onSignInPress() {
    const {fname, lname, city, username, photo } = this.props

    this.props.createProfile({ fname, lname, username, city })
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

  render () {
    return (
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

        <Text >   </Text>



        <Text> </Text>
        <Text> </Text>
        <Text> </Text>

        <Button
            title='add photo'
            color="black"
            backgroundColor='#white'
            style={{padding:8}}
        />

        <Text> </Text>

        <Button
            title='Create Profile'
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            //color="white"
            //backgroundColor='#83b4ff'
            style={{padding:8}}
            onPress={this.onSignInPress.bind(this)}
        />

      </ImageBackground>
    )
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
  }
});

const mapStateToProps = ({ info }) => {
  const { fname, lname, city, username } = info;

  return { fname, lname, city, username };
};

export default connect(mapStateToProps, {
  fnameChanged,
  lnameChanged,
  usernameChanged,
  cityChanged,
  createProfile
})(AccountInfoScreen);
