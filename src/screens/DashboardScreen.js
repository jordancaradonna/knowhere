import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation'


class DashboardScreen extends React.Component {

  
  onTripsPress() {
    this.props.navigation.navigate('dash'); 
  }
  onOutingsPress(){
    this.props.navigation.navigate('dashOutings');
  }
  onMessagesPress(){
    this.props.navigation.navigate('messages');
  }


  static navigatinoOptions = {
    title:'Home',
  }
  
  render () {
    return (
      <View style={styles.container} >
        


        <Text style={[styles.title,]}> Knowhere </Text>


        <Button
            small 
            rounded
            title='messages'
            color="black"
            backgroundColor='#f8f8f8'
            marginBottom= '15'
            onPress={this.onMessagesPress.bind(this)}
        />


        <View style={styles.container2}>
        
          <View style={styles.buttonContainer}> 
            <Button
              title='trips'
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.buttonStyle}
              color='white'
              backgroundColor='#b0d0ff'
              onPress={this.onTripsPress.bind(this)}   />
          </View>

          <View style={styles.buttonContainer}>   
           <Button
              title='outings'
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.buttonStyle}
              color='#83b4ff'
              backgroundColor='#f4f4ff'
              onPress={this.onOutingsPress.bind(this)}  />
           </View>
        </View>



      



      </View>
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
    justifyContent: 'center',
  },
  title:{
    fontSize: 28,
    fontFamily: 'Chalkboard SE',
    padding: 10,
    color: 'black',
  },
  buttonTitle:{
    fontSize: 28,
    letterSpacing: 2,
  },
  buttonStyle:{
    width: 160,
    height: 44,
    //backgroundColor: "#83b4ff",
    //borderRadius: 100, //makes it oval not squared
    elevation: 5,
  }
});


export default DashboardScreen;
