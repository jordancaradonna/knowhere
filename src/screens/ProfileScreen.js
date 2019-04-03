import React, {Component} from 'react';
import { View, Text, Dimensions, ImageBackground,
        TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView, Animated} from 'react-native';
import { Button, Avatar, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal';
import { connect } from 'react-redux'
import { profileFetch } from '../actions'
const SCREEN_WIDTH = Dimensions.get('window').width;

const Users3 = [ //Aidan
  { id: "first", uri: require('../images/caboSanLucas1.png') },
  { id: "second", uri: require('../images/caboSanLucas2.png')},
  { id: "third", uri: require('../images/caboSanLucas3.png')},
  //{ id: "fourth", uri: require('../images/hawaii4.png')}
]

class ProfileScreen extends React.Component {
  state = {
    visibleModal: null,
    toggle: false,
    iconName: ''
  };

  componentWillMount() {
    this.props.profileFetch();
  }

  changeIcon() {
    const newState = !this.state.toggle;
    this.setState({toggle: newState})
    this.props.onStateChange && this.props.onStateChange(newState)
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


renderImages3 = () =>{
  //item, i is the index
    return Users3.map((item, currentIndex) =>{
      return (
        <Animated.View
          key = {item.id}
          style = { styles.container}
        >
            <Image
              style = {{flex: 1, height: 250, width: 250, resizeMode: 'cover', borderRadius: 20}}
              source = {item.uri}
            />
        </Animated.View>
      );
    })
  }
// button rendering for modal
_renderButton = (onPress) => (
    <View style= {{paddingLeft: 10}}>
      <Icon
      onPress={onPress}
        name= 'plus'
        size = {30} >

        </Icon>
    </View>
);

onViewAllPress() {
  this.props.navigation.navigate('trip');
}

  state = {
    visibleModal: null,
  };









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
    <Button
        onPress = {() => this.setState({ visibleModal: null })}
        title = 'Cancel'
        titleStyle={styles.buttonTitle}
                buttonStyle={styles.buttonStyle}
                color='#83b4ff'
                backgroundColor='#f4f4ff'
    >

    </Button>
    {/* {this._renderButton(() => this.setState({ visibleModal: null }))} */}
    </View>
  </View>
);

  render () {
    const {toggle} = this.state;
    const iconName = toggle ? "bookmark" : "bookmark-o";
    return (
      <SafeAreaView style={{flex:1}}>
        <Header
          centerComponent={{ text: 'Profile' }}
          rightComponent={{ Icon: 'cog' }}
          backgroundColor= 'white'
          />
        <View
        //entire page view
        >
        <View //view of everything on top
        >
          <ImageBackground  source={require('../images/ireland1.png')}
                        style={{maxHeight: 120}}>
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
                  <Icon
                      name= 'cog'
                      backgroundColor = 'clear'
                      style = {{paddingRight: 5}}
                      size = {20}
                      onPress={this.onSettingsPress.bind(this)}>
                  </Icon>
              </View>
            </View>
          </View>
        </View>
        </ImageBackground>

        <View flexDirection='row' justifyContent='space-between' //contains country, username, post, and followers
        >
          <View flexDirection='column' >
            <Text>{this.props.city}</Text>
            <Text>Country</Text>
          </View>

          <View alignItems='flex-end'>
            <Text style={styles.NameStyle}>{this.props.username}</Text>
            {/* <Text>Username</Text> */}
          </View>

          <View flexDirection='column'>
              <Text
                 style = {{paddingLeft:24}}
                 >Posts: #</Text>
                 <Text>Followers: #</Text>
          </View>
        </View>

        <View alignItems='center' flexDirection='row' justifyContent = 'space-between'
         style = {{borderBottomWidth: 1,borderColor: '#ddd'}}
        //add new, dream list, trips, outings
        >
          <View //icons view
          flexDirection = 'row' justifyContent= 'space-between' flex= {1}
          >
               <View>
                  <Icon
                      name= 'map-pin'color= 'black'
                      backgroundColor = 'clear'
                      style = {{paddingLeft: 5}}
                      size = {30}
                      onPress={() => this.props.navigation.navigate('map')}>
                  </Icon>
              </View>
                <View>
                   <Icon
                     buttonStyle={styles.buttonStyle}
                     titleStyle={styles.buttonTitle}
                     name='wpexplorer'
                    size = {30}
                    backgroundColor = '#f4f4ff'
                    onPress={this.onDreamListPress.bind(this)}
                   />
                </View>
                    {this._renderButton(() => this.setState({ visibleModal: 1 })) //add new post button
                    }
                      <Modal isVisible={this.state.visibleModal === 1}>
                        {this._renderModalContent()}
                      </Modal>
           </View>
                <View //trips button view
                  style = {{justifyContent: "flex-end", flexDirection: 'row'}} >
                    <Button
                      small
                      title='Trips'
                      titleStyle={styles.buttonTitle}
                      //buttonStyle={styles.buttonStyle}
                      color='#83b4ff'
                      backgroundColor='#f4f4ff'/>
                </View>
                <View>
                    <Button
                      small
                      title='Outings'
                      titleStyle={styles.buttonTitle}
                      //buttonStyle={styles.buttonStyle}
                      color='#83b4ff'
                      backgroundColor='#f4f4ff'/>
                </View>
          </View>
        </View>
      <View>
        <ScrollView>
            <View // contains Aidan's CardSection
                style = {{borderBottomWidth: 1,borderColor: '#ddd'}}
            >
              <Text
                onPress = {this.onViewAllPress.bind(this)}
                style = {{textAlign: 'right',  fontSize: 10, paddingRight: 2, paddingTop: 5, paddingBottom: 4}} >
                View Post
              </Text>
                 <View style = {{flex: 1, flexDirection: 'row' }} //everything below view post in card section
                    >
                    <View //contains info on the left
                      alignItems = 'center'
                      >
                      <Avatar
                        large
                        source={require('../images/aprofile.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                      />
                        <Text style={{  fontSize: 14, paddingLeft: 6}}
                          onPress={() => this.props.navigation.navigate('profile')}>
                          Aidan Alcos
                        </Text>
                          <View style = {{flexDirection: 'row', paddingTop: 5, paddingBottom: 15, paddingRight: 5, borderBottomWidth: 1,
                            borderColor: '#ddd',}} //location pin
                          >
                            <Image
                              source = {require('../images/home.png')}
                              style = {{height: 15, width: 15}}
                              />
                            <Text style={{fontSize: 12}} >
                              Kailua Kona
                           </Text>
                          </View>
                          <View style = {{alignItems: 'center', paddingTop: 25}}//bookmark view
                              >
                               <Icon
                                  onPress = {()=> this.changeIcon()}
                                  name= {iconName} size={35}/>
                             </View>
                      </View>
                      <ScrollView horizontal //view of stuff on right
                      >
                        {this.renderImages3()}
                      </ScrollView>
                  </View>
              </View>
           </ScrollView>
         </View>
      </View>
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
    //fontFamily: 'Al Nile',
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
    fontSize: 13,
    letterSpacing: 2,
  },
  buttonStyle:{
    width: 115,
    height: 44,
    //padding: 20,
    //borderRadius: 100, //makes it oval not squared
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
      backgroundColor: '#f4f4ff',
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

   {/* <View>
          <Text style={styles.NameStyle}>{this.props.fname} {this.props.lname}</Text>
          <Text style={styles.NameStyle}>{this.props.username}</Text>
          <Text style={styles.NameStyle}>{this.props.city}</Text>
        </View> */}

//Connect the current props to redux props
const mapStateToProps = ({ info }) => {
  const { fname, lname, city, username } = info;

  return { fname, lname, city, username };
};

export default connect(mapStateToProps, { profileFetch })(ProfileScreen);
