import React from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';


class NotificationsScreen extends React.Component {

  render () {
    return (
      <SafeAreaView style={{flex:1}}>
      <View style={[styles1.container,]}>
        <Text style={[styles1.title,]}>
          Notifications
        </Text>

      </View>
      </SafeAreaView>
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

export default NotificationsScreen;
