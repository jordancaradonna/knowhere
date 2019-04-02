import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


class SettingsScreen extends React.Component {

  onNotificationsPress() {
    this.props.navigation.navigate('');
  } 
<<<<<<< HEAD
=======
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
>>>>>>> 084720fec82c1e95d351ca0ca3454d4850071db4

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
<<<<<<< HEAD
          onPress={this.onNotificationsPress.bind(this)}   />
=======
          onPress={this.onChangeUsernamePress.bind(this)}   />
>>>>>>> 084720fec82c1e95d351ca0ca3454d4850071db4
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
<<<<<<< HEAD
          onPress={this.onNotificationsPress.bind(this)}   />
=======
          onPress={this.onChangeHomeLocationPress.bind(this)}   />
>>>>>>> 084720fec82c1e95d351ca0ca3454d4850071db4
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
<<<<<<< HEAD
          onPress={this.onNotificationsPress.bind(this)}   />
=======
          onPress={this.onPrivacyPress.bind(this)}   />
>>>>>>> 084720fec82c1e95d351ca0ca3454d4850071db4
        <Button
          style= {[styles1.buttonStyle,]}
          title='Log Out'
          color='black'
          backgroundColor='#white'
<<<<<<< HEAD
          onPress={this.onNotificationsPress.bind(this)}   />
=======
          onPress={this.onLogoutPress.bind(this)}   />
>>>>>>> 084720fec82c1e95d351ca0ca3454d4850071db4
  
       
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

export default SettingsScreen;
