import React from 'react';
import { View, Text, Image,
         Dimensions, Animated, ScrollView, StyleSheet
        } from 'react-native';
import {Avatar} from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Icon from 'react-native-vector-icons/FontAwesome'

import reducers from '../reducers';


const Users = [
  { id: "first", uri: require('../images/jIreland.jpg') },
  { id: "second", uri: require('../images/ireland1.png')},
  { id: "third", uri: require('../images/jprofile.png')},
  { id: "fourth", uri: require('../images/ireland2.png')}
]
const test = [
  { id: "first", uri: require('../images/yosemite.png')},
  { id: "second", uri: require('../images/grandCanyon1.png') },
  { id: "third", uri: require('../images/yosemite1.png')},
  { id: "fourth", uri: require('../images/grandCanyon2.png')}
]
const SCREEN_WIDTH = Dimensions.get('window').width;
class TripsScreen extends React.Component {
  state = {
    toggle: false //for bookmark icon switch
  }
  changeIcon() {
    const newState = !this.state.toggle;
    this.setState({toggle: newState})
    this.props.onStateChange && this.props.onStateChange(newState)
  }
 
  render = () => {
    const {toggle} = this.state;
    const textValue = toggle ? "ON" : "Off";
    const iconName = toggle ? "bookmark" : "bookmark-o";
    const addStoryIcon = "plus-circle";
    return (
        <ScrollView style = {{flex: 1}}>
            <View // contains the CardSection  
            >
              <View style = {{flexDirection: 'row', paddingTop: 5, //top part of card section 
                              paddingBottom: 15, paddingRight: 5, 
                              justifyContent: 'space-between'}} //location pin
                > 
                 <Text> 1st stop: </Text>
                       <View //location icon and location name 
                       style = {{flexDirection: 'row'}}
                       >
                          <Image 
                             source = {require('../images/pin.png')}
                             style = {{height: 20, width: 20}}
                          />
                          <Text style = {{paddingTop: 3, fontSize: 12}}> 
                               Ireland 
                          </Text>
                      </View>
                      <Icon name="bookmark" 
                        onPress = {()=> this.changeIcon()}
                        name={iconName}
                        size={24} />
                </View>
                <View style = {{flex: 1, flexDirection: 'row' }}>
                    <ScrollView horizontal // sliding pictures
                    >
                      {this.renderImages()} 
                    </ScrollView>
                </View>
                    <ScrollView //story view
                        horizontal style = {{paddingLeft: 3,borderBottomWidth: 1,borderColor: '#ddd',  }}
                    >
                      <View style = {{alignItems: 'center'}}>
                      <Avatar
                          medium
                          rounded
                          source={require('../images/jprofile.png')}
                          containerStyle={styles.AvatarStyle}
                          onPress={() => console.log("Works!")}
                          activeOpacity={0.7}
                          justifyContent='center'
                          alignItems='center'
                      />
                      <Text style = {{fontSize: 12, }}>
                        Photos
                      </Text>
                      </View>
                      <View style = {{alignItems: 'center'}}>
                      <Avatar
                          medium
                          rounded
                          source={require('../images/jprofile.png')}
                          containerStyle={styles.AvatarStyle}
                          onPress={() => console.log("Works!")}
                          activeOpacity={0.7}
                          justifyContent='center'
                          alignItems='center'
                      />
                      <Text style = {{fontSize: 12,}}>
                        Videos
                      </Text>
                      </View>
                      <View style = {{alignItems: 'center'}}>
                      <Avatar
                          medium
                          rounded
                          source={require('../images/jprofile.png')}
                          containerStyle={styles.AvatarStyle}
                          onPress={() => console.log("Works!")}
                          activeOpacity={0.7}
                          justifyContent='center'
                          alignItems='center'
                      />
                      <Text style = {{fontSize: 12, }}>
                        Vlogs
                      </Text>
                      </View>
                    </ScrollView>
            </View>
            <View // contains the CardSection  
            >
              <View style = {{flexDirection: 'row', paddingTop: 5, //top part of card section 
                              paddingBottom: 15, paddingRight: 5, 
                              justifyContent: 'space-between'}} //location pin
                > 
                      <Text> 2nd stop: </Text>
                       <View //location icon and location name 
                       style = {{flexDirection: 'row'}}
                       >
                          <Image 
                             source = {require('../images/pin.png')}
                             style = {{height: 20, width: 20}}
                          />
                          <Text style = {{paddingTop: 3, fontSize: 12}}> 
                               Yosemite / Grand Canyon
                          </Text>
                      </View>
                      <Icon name="bookmark" size={24} />
                      {/* <Text
                        onPress = {this.onViewAllPress.bind(this)}
                        style = {{textAlign: 'right',  fontSize: 10, paddingRight: 10, paddingTop: 5}} >
                          All Photos
                      </Text> */}
                </View>
                <View style = {{flex: 1, flexDirection: 'row' }}>
                    <ScrollView horizontal // sliding pictures
                    >
                      {this.renderSecondSetImages()} 
                    </ScrollView>
                </View>
                <ScrollView //story view
                        horizontal style = {{paddingLeft: 3,borderBottomWidth: 1,borderColor: '#ddd',  }}
                    >
                      <View style = {{alignItems: 'center'}}>
                      <Avatar
                          medium
                          rounded
                          source={require('../images/jprofile.png')}
                          containerStyle={styles.AvatarStyle}
                          onPress={() => console.log("Works!")}
                          activeOpacity={0.7}
                          justifyContent='center'
                          alignItems='center'
                      />
                      <Text style = {{fontSize: 12, }}>
                        Photos
                      </Text>
                      </View>
                      <View style = {{alignItems: 'center'}}>
                      <Avatar
                          medium
                          rounded
                          source={require('../images/jprofile.png')}
                          containerStyle={styles.AvatarStyle}
                          onPress={() => console.log("Works!")}
                          activeOpacity={0.7}
                          justifyContent='center'
                          alignItems='center'
                      />
                      <Text style = {{fontSize: 12,}}>
                        Videos
                      </Text>
                      </View>
                      <View style = {{alignItems: 'center'}}>
                      <Avatar
                          medium
                          rounded
                          source={require('../images/jprofile.png')}
                          containerStyle={styles.AvatarStyle}
                          onPress={() => console.log("Works!")}
                          activeOpacity={0.7}
                          justifyContent='center'
                          alignItems='center'
                      />
                      <Text style = {{fontSize: 12, }}>
                        Vlogs
                      </Text>
                      </View>
                      <View style = {{alignItems: 'center', paddingLeft: 10, paddingTop: 10}}
                      //add new icon view
                      >
                      <Icon 
                      size = {60}
                      name = {addStoryIcon}
                      />
                      <Text style = {{fontSize: 12, }}>
                        New
                      </Text>
                      </View>
                    </ScrollView>
            </View>
            
        </ScrollView>
    );
  };

  
  _onPhotoPressed() {
    this.props.navigation.navigate('profile');
  }
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
   renderSecondSetImages = () =>{
    //item, i is the index
  return test.map((item, currentIndex) =>{
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
  
  bookmark_filled() {
    return (
     <Image  source = {require('../images/bookmark_fill.png')}
     style = {{height: 100, width: 100, padding: 15}}/>
     );
  }   
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
    height: 250,
    width: 250, 
    padding: 10,
    position:'relative' 
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  AvatarStyle: {
    marginLeft: 40,
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  AvatarStyle: {
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 5,
    paddingLeft: 10
    },
    container2:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
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
}

export default TripsScreen;
