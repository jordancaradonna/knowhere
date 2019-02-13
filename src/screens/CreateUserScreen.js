import React from 'react';
import { StyleSheet, Text, TextInput, 
        View, ImageBackground} from 'react-native';
import { Button } from 'react-native-elements';


class CreateUserScreen extends React.Component {
  onCancelPress() {
    this.props.navigation.navigate('login');
  }
  onConfirmPress(){
    this.props.navigation.navigate('accountinfo');
  }

  render () {
    return (
      <ImageBackground source={require('../images/background1.jpg')}
                       style={styles.container}> 

        
        <Text style={[styles.title,]}> Knowhere </Text>
 
        <Text >   </Text>
        <Text >   </Text>
        

        <TextInput
          style={{height: 40, width: 250, backgroundColor: 'white', 
                  borderColor: '#83b4ff', borderWidth: 0.5}}
          placeholder=' First Name:'
        />
             <Text >   </Text>
        <TextInput
          style={{height: 40, width: 250, 
                  backgroundColor: 'white', 
                  borderColor: '#83b4ff', borderWidth: 0.5}}
          placeholder=' Last Name:' 
        />
             <Text >   </Text>
         <TextInput
          style={{height: 40, width: 250, backgroundColor: 'white', 
                  borderColor: '#83b4ff', borderWidth: 0.5}}
          placeholder=' Email:' 
        />
             <Text >   </Text>
        <TextInput
           style={{height: 40, width: 250, backgroundColor: 'white', 
                   borderColor: '#83b4ff', borderWidth: 0.5}}
           placeholder=' Password:' 
        />
             <Text >   </Text>
        <TextInput
           style={{height: 40, width: 250, backgroundColor: 'white', 
                   borderColor: '#83b4ff', borderWidth: 0.5}}
           placeholder=' Confirm Password:' 
        />
             <Text >   </Text>


        <Text style={[styles.otherText,]}>   An email will be sent with a link </Text>
        <Text style={[styles.otherText,]}>   allowing you to proceed:  </Text>



      <View style={styles.container2}>
        
        <View style={styles.buttonContainer}> 
          <Button
            title='Cancel'
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            //color="white"
            //backgroundColor='#83b4ff'
            onPress={this.onCancelPress.bind(this)}   />
        </View>

        <View style={styles.buttonContainer}>   
          <Button
            title='Confirm'
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            //color="white"
            //backgroundColor='#83b4ff'
            style={{padding:8}}
            onPress={this.onConfirmPress.bind(this)}  />
        </View>
      </View>


      </ImageBackground>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
  },
  title:{
    fontSize: 28,
    fontStyle: 'italic',
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
    width: 110,
    height: 42,
    backgroundColor: "#83b4ff",
    borderRadius: 100, //makes it oval not squared
    elevation: 5,
  }
});

export default CreateUserScreen;
