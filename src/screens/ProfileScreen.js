import React, {Component} from 'react';
import { View, Text, Dimensions, ImageBackground,
        TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Button, Tile, Avatar} from 'react-native-elements';
import Modal from 'react-native-modal';
import { connect } from 'react-redux'
import { profileFetch } from '../actions'
const SCREEN_WIDTH = Dimensions.get('window').width;

class ProfileScreen extends React.Component {
  componentWillMount() {
    this.props.profileFetch();
  }

// Buttons to navigate to each branch
onSettingsPress() {
  this.props.navigation.navigate('settings');
}

onCreateTripPress() {
  this.props.navigation.navigate('createtrip')
  this.setState({ visibleModal: null });
}

onCreateOutingPress() {
  this.props.navigation.navigate('createouting');
  this.setState({ visibleModal: null });
}

onDreamListPress(){
  this.props.navigation.navigate('dreamlist');
}

state = {
  visibleModal: null,
};

// button rendering for modal
_renderButton = (text, onPress) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles2.button}>
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

// modal content for when creating a new post
_renderModalContent = () => (

  <View style={styles2.modalContent}>

  <View alignItems='center' fontSize='300'>
    <Text>New Post</Text>
    <Text></Text>
  </View>

    <View style={{flexGrow: 1}} flexDirection='row' justifyContent='center'>

      {/* navigate to a createTripScreen */}
      <View>
        <Button
                title='Trip'
                onPress={this.onCreateTripPress.bind(this)}
                small
                titleStyle={styles.buttonTitle}
                buttonStyle={styles.buttonStyle}
                color='#83b4ff'
                backgroundColor='#f4f4ff'>
        </Button>
      </View>

      {/* navigate to createOutingScreen */}
      <View>
        <Button title='Outing'
                onPress={this.onCreateOutingPress.bind(this)}
                small
                titleStyle={styles.buttonTitle}
                buttonStyle={styles.buttonStyle}
                color='#83b4ff'
                backgroundColor='#f4f4ff'>
        </Button>
      </View>
    </View>

    {/* renders cancel button to close modal */}
    <View alignItems='center'>
    {this._renderButton('Cancel', () => this.setState({ visibleModal: null }))}
    </View>
  </View>
);



  render () {
    return (

      <SafeAreaView style={{flex:1}}>
      <ImageBackground  source={require('../images/ireland1.png')}
                        style={styles.coverPhoto}>

      <View justifyContent='space-between'>

          <View>
            <View justifyContent='flex-end' style={{flexGrow: 1}} flexDirection='row'>
              <Avatar
                large
                rounded
                source={require('../images/jprofile.png')}
                containerStyle={styles.AvatarStyle}
                onPress={() => console.log("Works!")}
                activeOpacity={1}>
              </Avatar>
              <View>
                  <Button
                      icon={{name: 'settings', color: 'black'}}
                      backgroundColor = 'clear'
                      style = {{padding: 3}}
                      onPress={this.onSettingsPress.bind(this)}>
                  </Button>
              </View>
            </View>
          </View>
        </View>



        <View alignItems='center' justifyContent='top'>
          <Text></Text>
          <Text style={styles.NameStyle}>User Name</Text>
        </View>


        <View justifyContent='space-around' alignItems='center' flexDirection='row'>

          <View>
            {this._renderButton('New Post', () => this.setState({ visibleModal: 1 }))}
          </View>

          <Button
            buttonStyle={styles.buttonStyle}
            small
            rounded
            title='Dream List'
            color='black'
            backgroundColor = '#f8f8f8'
            // style = {{padding: 5}}
            onPress={this.onDreamListPress.bind(this)}
          />

        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
        </View>

        <View flexDirection='row'>
          <View style={styles.container2}>
            <View style={styles.buttonContainer}>
              <Button
                small
                title='Trips'
                titleStyle={styles.buttonTitle}
                buttonStyle={styles.buttonStyle}
                color='#83b4ff'
                backgroundColor='#f4f4ff'/>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                small
                title='Outings'
                titleStyle={styles.buttonTitle}
                buttonStyle={styles.buttonStyle}
                color='#83b4ff'
                backgroundColor='#f4f4ff'/>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.NameStyle}>{this.props.fname} {this.props.lname}</Text>
          <Text style={styles.NameStyle}>{this.props.username}</Text>
          <Text style={styles.NameStyle}>{this.props.city}</Text>
      </View>

      </ImageBackground>




    </SafeAreaView>

    )

  }
}

const styles = {
  AvatarStyle: {
    marginTop: 20,
    marginBottom: 22,
  },
  leftStyle: {
    marginLeft: "auto"
  },
  DividerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  TopProfileStyle: {
    width: SCREEN_WIDTH,
    // height: 150,
    alignItems: 'center',
    // flex: 2,
    flexDirection: 'row',
  },
  NameStyle: {
    fontFamily: 'Al Nile',
    fontSize: 18,
    color: 'black',
    justifyContent: 'center'
  },
  container2:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'bottom',
  },
  buttonContainer:{
    flex: 1,
    marginLeft: 8,
    marginRight: 25,
  },
  buttonTitle:{
    fontSize: 16,
    letterSpacing: 2,
  },
  buttonStyle:{
    width: 115,
    height: 44,
    //padding: 20,
    borderRadius: 100, //makes it oval not squared
    elevation: 5,
  },
  coverPhoto:{
    width: '100%',
    height: '50%'
  }};

  const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: 115,
      height: 44,
      elevation: 5,
      backgroundColor: 'lightblue',
      padding: 12,
      margin: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 22,
      borderRadius: 22,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
  });

//Connect the current props to redux props
const mapStateToProps = ({ info }) => {
  const { fname, lname, city, username } = info;

  return { fname, lname, city, username };
};

export default connect(mapStateToProps, { profileFetch })(ProfileScreen);
