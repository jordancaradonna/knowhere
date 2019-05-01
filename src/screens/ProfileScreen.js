import React, {Component} from 'react';
import { View, Text, Dimensions, ImageBackground,
        TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView, Animated} from 'react-native';
import { Button, Avatar, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal';
import { connect } from 'react-redux'
import { profileFetch } from '../actions'
const SCREEN_WIDTH = Dimensions.get('window').width;


const Users = [
  { id: "first", uri: require('../images/jIreland.jpg')},
  { id: "second", uri: require('../images/ireland1.png')},
  { id: "third", uri: require('../images/jprofile.png')},
  { id: "fourth", uri: require('../images/ireland2.png')}
]
const Users1 = [
  { id: "first", uri: require('../images/paris2.png') },
  { id: "second", uri: require('../images/paris3.png')}, 
  { id: "third", uri: require('../images/paris1.png')},
  //{ id: "fourth", uri: require('../images/ireland2.png')}
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
  onMapPress() {
    this.props.navigation.navigate('map');
  }
  onStarPress() {
    this.props.navigation.navigate('dreamlist');
  }
  onMyTripsPress() {
    this.props.navigation.navigate('mytrips');
  }
  onMyOutingsPress() {
    this.props.navigation.navigate('myoutings');
  }

//SCROLL FOR CARDS
renderImages = () =>{
  //item, i is the index
    return Users.map((item, currentIndex) =>{
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
  renderImages1 = () =>{
    //item, i is the index
      return Users1.map((item, currentIndex) =>{
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


//BUTTON rendering for MODAL
_renderButton = (onPress) => (
    <View style= {{paddingLeft: 10}}>
      <Icon
        onPress={onPress}
        name= 'plus'
        size = {25} >

        </Icon>
    </View>
);

onViewAllPress() {
  this.props.navigation.navigate('trip');
}
  state = {
    visibleModal: null,
  };



// ------+---MODEL--+-------------------- content for when creating a new post
_renderModalContent = () => (

  <View style={styles2.modalContent}>

  <View alignItems='center' fontSize='300'>
    <Text style={{ fontSize: 18, marginBottom: 10}}> New Post</Text>
    
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
                color='black'
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
                color='black'
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
                color='black'
                backgroundColor='#white'> 
    </Button>
    {/* {this._renderButton(() => this.setState({ visibleModal: null }))} */}
    </View>
  </View>
);

//------------------------------------------------------------------------------------------------------------------\\
  render () {
    const {toggle} = this.state;
    const iconName = toggle ? "bookmark" : "bookmark-o";
    return (
      <SafeAreaView style={{flex:1}}>
        <Header
          centerComponent={{ text: 'Profile' }}
          //rightComponent={{ Icon: 'cog' }}
          backgroundColor= 'white'
          />
        <ScrollView //entire page view
        >
        <View //view of everything on top
        >
          <ImageBackground  source={require('../images/coverPic.png')}
                        style={{maxHeight: 120}}>
        <View justifyContent='space-between'>
          <View>
            <View justifyContent='flex-end' style={{flexGrow: 1}} flexDirection='row'>
              <Avatar
                large
                source={{ uri: this.props.profilePhoto }}
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
{/* -------------------------------------username and INFO --------------------------------------------- */}

        <View flexDirection='row' justifyContent='space-between' //contains country, username, post, and followers
        >
          <View flexDirection='column' >
            <Text style= {{marginTop:5}}> {this.props.city}</Text>
            
          </View>

          <View alignItems='flex-end'>
            <Text style={styles.NameStyle}>{this.props.username}</Text>
            {/* <Text>Username</Text> */}
          </View>

          <View flexDirection='column'>
              <Text
                 style = {{paddingLeft:24, marginTop:5}}
                 > Posts: #</Text>
                 <Text>Followers: #</Text>
                 <Text> </Text>
          </View>
        </View>

{/* -------------------------------------five BUTTONS--------------------------------------------- */}
        <View alignItems='center' flexDirection='row' 
         style = {{borderBottomWidth: 1, borderColor: '#ddd'}}
        >
          <View //icons view
          flexDirection = 'row'  flex= {1}
          >
               <View>
                  <Button
                    medium
                    style= {[styles.buttonStyle1,]}
                    leftIcon={{ name: 'room',
                                color: "black"
                               }}
                    color='black'
                    backgroundColor='#white'
                    onPress={this.onMapPress.bind(this)}   />
              </View>
                <View>
                  <Button
                    medium
                    style= {[styles.buttonStyle1,]}
                    leftIcon={{ name: 'grade',
                                color: "black"}} //83b4ff
                    color='black'
                    backgroundColor='#white'
                    onPress={this.onStarPress.bind(this)}   />

                </View>
                    {this._renderButton(() => this.setState({ visibleModal: 1 })) //add new post button
                    }
                      <Modal isVisible={this.state.visibleModal === 1}>
                        {this._renderModalContent()}
                      </Modal>
          </View>
                <View //trips button view
                  style = {{ flexDirection: 'row'}} >
                  <Button
                    medium
                    style= {[styles.buttonStyle1,]}
                    leftIcon={{ name: 'flight-takeoff',
                                color: "black"
                                 }}
                    color='black'
                    backgroundColor='#white'
                    onPress={this.onMyTripsPress.bind(this)}  
                     />
                </View>
                <View>
                   <Button
                    medium
                    style= {[styles.buttonStyle1,]}
                    leftIcon={{ name: 'landscape',
                                color: "black"
                                 }}
                    color='black'
                    backgroundColor='#white'
                    onPress={this.onMyOutingsPress.bind(this)}  
                     />
                    
                </View>
          </View>
        </View>
{/* -------------------------------------FEED--------------------------------------------- */}
    <View>
        <ScrollView>

             <View // contains the CardSection  
               style = {{borderBottomWidth: 1,borderColor: '#ddd'}}
               >
                    <Text 
                        onPress = {this.onViewAllPress.bind(this)}
                        style = {{textAlign: 'right',  fontSize: 10, paddingRight: 10, paddingTop: 5}} >
                       View Post
                    </Text>
                    
              <View style = {{flex: 1, flexDirection: 'row' }} //contains everything below viewPost for first card section
                >
                <View //contains bio info on the left
                  style = {{alignItems: 'center'}}
                  >
                    <Avatar

                        large
                        source={require('../images/jprofile.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Text style={{  fontSize: 10, }} 
                          onPress={() => this.props.navigation.navigate('profile')}>
                        Jordan Caradonna
                    </Text>
                 
                  <View style = {{flexDirection: 'row', paddingTop: 5, paddingBottom: 15, borderBottomWidth: 1,
                              borderColor: '#ddd',}} //location pin 
                      >
                        <Image 
                            source = {require('../images/home.png')}
                            style = {{height: 14, width: 14}}
                        />
                        <Text style={{fontSize: 12}}>
                            {this.props.city
                            }
                        </Text>

                  </View>
                    <View style = {{alignItems: 'center', paddingTop: 25}}//bookmark view
                      >
                          <Icon 
                          onPress = {()=> this.changeIcon()}
                          name={iconName} size={35}/>
                    </View>
                </View>
                  
                        <ScrollView horizontal style = {{}}
                          //content on the right, all of the pictures
                        >

                             {this.renderImages()} 
                        </ScrollView>
                 
              </View>
            </View> 




            <View // contains the CardSection  
               style = {{borderBottomWidth: 1,borderColor: '#ddd'}}
               >
                    <Text 
                        onPress = {this.onViewAllPress.bind(this)}
                        style = {{textAlign: 'right',  fontSize: 10, paddingRight: 10, paddingTop: 5}} >
                       View Post
                    </Text>
                    
              <View style = {{flex: 1, flexDirection: 'row' }} //contains everything below viewPost for first card section
                >
                <View //contains bio info on the left
                  style = {{alignItems: 'center'}}
                  >
                    <Avatar

                        large
                        source={require('../images/jprofile.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Text style={{  fontSize: 10, }} 
                          onPress={() => this.props.navigation.navigate('profile')}>
                        Jordan Caradonna
                    </Text>
                 
                  <View style = {{flexDirection: 'row', paddingTop: 5, paddingBottom: 15, borderBottomWidth: 1,
                              borderColor: '#ddd',}} //location pin 
                      >
                        <Image 
                            source = {require('../images/home.png')}
                            style = {{height: 14, width: 14}}
                        />
                        <Text style={{fontSize: 12}}>
                            {this.props.city}
                        </Text>

                  </View>
                    <View style = {{alignItems: 'center', paddingTop: 25}}//bookmark view
                      >
                          <Icon 
                          onPress = {()=> this.changeIcon()}
                          name={iconName} size={35}/>
                    </View>
                </View>
                  
                  
                        <ScrollView horizontal style = {{}}
                          //content on the right, all of the pictures
                        >
                             {this.renderImages1()} 
                        </ScrollView>
                 
              </View>
            </View> 


    <View style ={{flex: 1, flexDirection: 'row',
                    borderColor: '#C5C7CA', borderWidth: 1 }} 
      >
        <View //contains the CardSection  --------------------NAMIBIA-----------------------
        >      
            <View style = {{flex: 1, flexDirection: 'column',
                            borderColor: '#C5C7CA', borderWidth: 1.5 }}
                    >  
              <Image  //style = {styles1.viewStyle}
                style={{width: 175, height: 280, marginTop: 10, marginBottom: 5, marginLeft: 5}} 
                source={require('../images/namibiaDrinks.png')} />
              
                <View //contains info on the BOTTOM
                    style ={{ flex: 1, flexDirection: 'row'}}
                >
                    <Avatar
                        small
                        source={require('../images/jprofile.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Image 
                              source = {require('../images/pin.png')}
                              style = {{height: 20, width: 20, marginLeft: 5, marginTop: 11}}/>
                    <Text style= {{marginTop: 12, marginRight: 10}} > 
                              Karibib, NM        
                    </Text>
                    <View style = {{alignItems: 'center', paddingTop: 10}}//bookmark view
                      >
                          <Icon 
                              onPress = {()=> this.changeIcon()}
                              name={iconName} size={25}
                              />
                    </View>
                    
                </View>   
            </View>
        </View>

      </View>



           </ScrollView>
         </View>
      </ScrollView>
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
    marginLeft: "auto",
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
    fontSize: 19,
    color: '#6390D4',
    justifyContent: 'center',
    marginTop: 10
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
    fontSize: 10,
    letterSpacing: 2,
  },
  buttonStyle:{
    width: 100,
    height: 44,
    //padding: 20,
    borderRadius: 100, //makes it oval not squared
    elevation: 5,
  },
  buttonStyle1:{
    //width: 350,
    marginLeft: 0.0,
    marginRight:0.0,
    borderColor: "grey",
    //borderRadius: 100, //makes it oval not squared
    //elevation: 5,
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
