import React from 'react';
import { View, Text, Image,
         Dimensions, Animated, ScrollView, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity
        } from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';




const Users = [
  { id: "first", uri: require('../images/background1.jpg') },
  { id: "second", uri: require('../images/jprofile.png')},
  { id: "third", uri: require('../images/finalBackground.jpg')},
  { id: "fourth", uri: require('../images/pig.jpg')}
]
const SCREEN_WIDTH = Dimensions.get('window').width;
class DashboardScreen extends React.Component {
  state = {
    toggle: false //for bookmark icon switch
  }
  changeIcon() {
    const newState = !this.state.toggle;
    this.setState({toggle: newState})
    this.props.onStateChange && this.props.onStateChange(newState)
  }

  onTripsPress() {
    this.props.navigation.navigate('dash');
  }
  onOutingsPress(){
    this.props.navigation.navigate('dashOutings');
  }
  onPhototPress(){
    this.props.navigation.navigate('profile');
  }

  render = () => {
    const {toggle} = this.state;
    const textValue = toggle ? "ON" : "Off";
    const iconName = toggle ? "bookmark" : "bookmark-o";
    const buttonBg = toggle ? "dodgerblue" : "white";
    const textColor = toggle ? "white" : 'black';
    return (

        <ScrollView style = {{flex: 1}}>
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
                            source = {require('../images/pin.png')}
                            style = {{height: 20, width: 20}}
                        />
                        <Text > 
                            Los Angeles
                        </Text>
                  </View>
                    <View style = {{alignItems: 'center', paddingTop: 25}}//bookmark view
                      >
                          <Icon 
                          onPress = {()=> this.changeIcon()}
                          name={iconName} size={35}/>
                    </View>
                </View>
                  
                  <TouchableWithoutFeedback
                    onPress = {(this._onPhotoPressed.bind(this))}
                  >
                        <ScrollView horizontal style = {{}}
                          //content on the right, all of the pictures
                  >

                             {this.renderImages()} 
                        </ScrollView>
                  </TouchableWithoutFeedback>
              </View>
            </View> 

            <View // contains the second CardSection 
            style = {{borderBottomWidth: 1,borderColor: '#ddd'}} 
            >
              <Text
                onPress = {this.onViewAllPress.bind(this)}
                style = {{textAlign: 'right',  fontSize: 10, paddingRight: 10, paddingTop: 5}} >
                  View Post
              </Text>
            
              <View style = {{flex: 1, flexDirection: 'row' }} //everything below view post in card section 
              >
                
                <View //contains info on the left
                >
                    <Avatar
                        large
                        source={require('../images/aprofile.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Text style={{  fontSize: 10, paddingLeft: 6}} 
                          onPress={() => this.props.navigation.navigate('profile')}>
                        Brock Acosta
                    </Text>
                    <View style = {{flexDirection: 'row', paddingTop: 5, paddingBottom: 15, paddingRight: 5, borderBottomWidth: 1,
                              borderColor: '#ddd',}} //location pin
                    >
                        <Image 
                            source = {require('../images/pin.png')}
                            style = {{height: 20, width: 20}}
                        />
                        <Text > 
                            San Diego
                        </Text>

                  </View>
                  <View style = {{paddingLeft: 35, paddingTop: 30}}//bookmark view
                      >
                          <Icon 
                          name= 'bookmark-o' size={35}/>
                    </View>
                </View>
                  <ScrollView horizontal //view of stuff on right
                  >
                     {this.renderImages()} 
                    </ScrollView>
                </View>
            </View>
       </ScrollView>
    );
  };



  onViewAllPress() {
    this.props.navigation.navigate('trip');
  }
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
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  AvatarStyle: {
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 5,
    paddingLeft: 10
    }
}


//Button styling
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
    width: 165,
    height: 44,
    //backgroundColor: "#83b4ff",
    //borderRadius: 100, //makes it oval not squared
    elevation: 5,
  }
});

export default DashboardScreen;