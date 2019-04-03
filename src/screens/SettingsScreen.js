import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


class SettingsScreen extends React.Component {

  onNotificationsPress() {
    this.props.navigation.navigate('');
  }
  onChangeHomeLocationPress() {
    this.props.navigation.navigate('changehomelocation');
  }
  onChangeUsernamePress() {
    this.props.navigation.navigate('changeusername');
  }
  onPrivacyPress() {
    this.props.navigation.navigate('privacy');
  }

  onLogoutPress() {
    this.props.navigation.navigate('login');
  }



  render () {
    return (
      <View style={[styles1.container,]}>
        <Text style={[styles1.title,]}>
          Settings
        </Text>

        <Button
          style= {[styles1.buttonStyle,]}
          leftIcon={{ name: 'account-box',
                        color: "#83b4ff"}}
          title='Change Username                                  '
          rightIcon={{ name: 'forward',
                        color: "grey"}}
          color= "black"
          backgroundColor="#white"
          onPress={this.onChangeUsernamePress.bind(this)}   />

        <Button
          style= {[styles1.buttonStyle,]}
          leftIcon={{ name: 'camera',
                        color: "#83b4ff"}}
          title='Change Profile Picture                           '
          rightIcon={{ name: 'forward',
                        color: "grey"}}
          color='black'
          backgroundColor='#white'
          onPress={this.onNotificationsPress.bind(this)}   />
        <Button
          style= {[styles1.buttonStyle,]}
          leftIcon={{ name: 'home',
                        color: "#83b4ff"}}
          title='Change Home Location                         '
          rightIcon={{ name: 'forward',
                        color: "grey"}}
          color='black'
          backgroundColor='#white'
          onPress={this.onChangeHomeLocationPress.bind(this)}   />

        <Button
          style= {[styles1.buttonStyle,]}
          leftIcon={{ name: 'announcement',
                        color: "#83b4ff"}}
          title='Notifications                                            '
          rightIcon={{ name: 'forward',
                        color: "grey"}}
          color='black'
          backgroundColor='#white'
          onPress={this.onNotificationsPress.bind(this)}   />
        <Button
          style= {[styles1.buttonStyle,]}
          leftIcon={{ name: 'visibility',
                        color: "#83b4ff"}}
          title='Privacy                                                    '
          rightIcon={{ name: 'forward',
                        color: "grey"}}
          color='black'
          backgroundColor='#white'
          onPress={this.onPrivacyPress.bind(this)}   />

        <Button
          style= {[styles1.buttonStyle,]}
          title='Log Out'
          color='black'
          backgroundColor='#white'
          onPress={this.onLogoutPress.bind(this)}   />



      </View>
    )
  }
}

const styles1 = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  container2:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title:{
    fontSize: 28,
    //fontFamily: 'Chalkboard SE',
    padding: 5,
    color: 'black',
  },
  buttonTitle:{
    fontSize: 28,
    letterSpacing: 2,
    //color: "white",
  },
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

export default SettingsScreen;
