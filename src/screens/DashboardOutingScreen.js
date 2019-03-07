import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

class DashboardOutingScreen extends React.Component {
  
  onTripsPress() {
    this.props.navigation.navigate('dash');
  }
  onOutingsPress(){
    this.props.navigation.navigate('dashOutings');
  }
  
  render () {
    return (
      <View style={styles.container} >
        

        <Text style={[styles.title,]}> Dashboard </Text>


        <View style={styles.container2}>
        
          <View style={styles.buttonContainer}> 
            <Button
              title='trips'
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.buttonStyle}
              color='grey'
              backgroundColor='#f4f4ff'
              onPress={this.onTripsPress.bind(this)}   />
          </View>

          <View style={styles.buttonContainer}>   
           <Button
              title='outings'
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.buttonStyle}
              color='black'
              backgroundColor='#b0d0ff'
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
    //alignItems: 'center',
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
    width: 165,
    height: 44,
    //backgroundColor: "#83b4ff",
    //borderRadius: 100, //makes it oval not squared
    elevation: 5,
  }
});


export default DashboardOutingScreen;
