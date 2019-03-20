import React from 'react';
import { StyleSheet, Text, TextInput,
        View, ImageBackground, Image} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import {
  emailChanged,
  passwordChanged,
  confirmPasswordChanged,
  createUser,
  createFail
} from '../actions'


class CreateUserScreen extends React.Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onConfirmPasswordChange(text) {
    this.props.confirmPasswordChanged(text);
  }

  onCancelPress() {
    this.props.navigation.navigate('login');
  }

  onConfirmPress(){
    const { email, password, confirmPassword } = this.props
    this.props.createUser({ email, password, confirmPassword }, () => {
        this.props.navigation.navigate('accountinfo');
    });
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
      <ImageBackground source={require('../images/background1.jpg')}
                       style={styles.container}>

        <Image
            style={{width: 300, height: 120}}
            source={require('../images/kwLogo.png')} />

        <Text >   </Text>
        <Text >   </Text>

        {this.renderError()}

         <TextInput
          style={{height: 45, width: 250, backgroundColor: 'white',
                  borderColor: 'black', borderWidth: 0.5}}
          placeholder=' Email:'
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
             <Text >   </Text>
        <TextInput
           secureTextEntry
           style={{height: 45, width: 250, backgroundColor: 'white',
                   borderColor: 'black', borderWidth: 0.5}}
           placeholder=' Password:'
           onChangeText={this.onPasswordChange.bind(this)}
           value={this.props.password}
        />
             <Text >   </Text>
        <TextInput
           secureTextEntry
           style={{height: 45, width: 250, backgroundColor: 'white',
                   borderColor: 'black', borderWidth: 0.5}}
           placeholder=' Confirm Password:'
           onChangeText={this.onConfirmPasswordChange.bind(this)}
           value={this.props.confirmPassword}
        />
             <Text >   </Text>



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
  },
  errorTextStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'red'
  }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, confirmPassword } = auth;

  return { email, password, error, loading, confirmPassword };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  createUser,
  confirmPasswordChanged,
})(CreateUserScreen);
