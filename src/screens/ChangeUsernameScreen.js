import React, {Component} from 'react';
import {View, Text, TextInput } from 'react-native';

class ChangeUsernameScreen extends Component {
    
    onCancelPress() {
        this.props.navigation.navigate('settings');
    } 
    
    render() {
        return(
            <View style={[styles1.container,]}>
                <Text style={[styles1.title,]}>
                    Change Username
                </Text>
                
                <TextInput
                    style={{height: 45, width: 250,
                        backgroundColor: 'white',
                        borderColor: 'black', borderWidth: 0.5}}
                    placeholder=' Change Username: '
                />
                <Button
                    style= {[styles1.buttonStyle,]}
                    title='Submit'
                    color='black'
                    backgroundColor = '#f8f8f8'
                    style = {{padding: 5}}
                />
                <Button
                    style= {[styles1.buttonStyle,]}
                    title='Cancel'
                    color='black'
                    backgroundColor = '#f8f8f8'
                    style = {{padding: 5}}
                    onPress={this.onCancelPress.bind(this)}
                />
            </View>
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
      fontSize: 28,
      //fontFamily: 'Chalkboard SE',
      padding: 5,
      color: 'black',
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

export default ChangeUsernameScreen;