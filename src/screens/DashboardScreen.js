import React from 'react';
import { View, Text, Image,
         Dimensions, Animated, PanResponder, ScrollView
        } from 'react-native';
import {Avatar} from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Swiper from 'react-native-swiper';
import CardSection from '../components/CardSection';
import Slide from '../components/Slide';


const Users = [
  { id: "first", uri: require('../images/background1.jpg') },
  { id: "second", uri: require('../images/ireland.png')},
  { id: "third", uri: require('../images/finalBackground.jpg')},
  { id: "fourth", uri: require('../images/pig.jpg')}
]

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const width = SCREEN_WIDTH -125;
const offset = (SCREEN_WIDTH - width) / 2;

class DashboardScreen extends React.Component {
 
  onViewAllPress() {
    this.props.navigation.navigate('profile');
  }
  render = () => {
    
    return (
      <ScrollView style = {{flex: 1}}>
          <View // contains the CardSection 
          >
              <Text
                onPress = {this.onViewAllPress.bind(this)}
                style = {{textAlign: 'right',  fontSize: 10, paddingRight: 10, paddingTop: 5}} 
              >
                  View Post
              </Text>
            <View style = {{flex: 1, flexDirection: 'row', borderRightWidth: 1, }}>
                <View //contains info on the left
                style = {{justifyContent: "space-evenly"}}
                >
                    <Avatar
                        large
                        source={require('../images/ireland.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Text style={{  fontSize: 10, paddingLeft: 6}} 
                          onPress={() => this.props.navigation.navigate('profile')}
                    >
                        Jordan Caradonna
                    </Text>
                  <View style = {{flexDirection: 'row', paddingTop: 5, paddingBottom: 15}} //location pin
                      >
                        <Image 
                            source = {require('../images/pin.png')}
                            style = {{height: 20, width: 20}}
                        />
                        <Text > 
                            Los Angeles
                        </Text>
                  </View>
                    <Image 
                        source = {require('../images/bookmark.png')}
                        style = {{height: 10, width: 10, padding: 15}}
                    />
                  
                </View>
                  <ScrollView horizontal style = {{}}>
                     {this.renderImages()} 
                  </ScrollView>
              </View>
          </View>
            <View style = {{ borderBottomWidth: 1,borderColor: '#ddd',}}>
            <Text style ={{paddingLeft: 100, justifyContent: 'center'}}>
                   Trip to Ireland
              </Text>
            </View>
      <CardSection style = {{ height: 300, width: SCREEN_WIDTH, flexDirection:'row'}}>
              <Swiper  height={240}
                 onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                 activeDot={<View style={{backgroundColor: '#000', width: 4, height: 4, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                loop
              >
                  <View style={styles.slide} title={<Text numberOfLines={3}>Cash behind the door</Text>}>
                     <Image  style={styles.image} source={require('../images/ireland.png')} />
                  </View>
                   <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
                      <Image  style={styles.image} source={require('../images/pig.jpg')} />
                  </View>
                 <View style={styles.slide} title={<Text style = {styles.text } numberOfLines={1}>Why Stone split from Garfield</Text>}>
                    <Image resizeMode='cover' style={styles.image} source={require('../images/ireland.png')} />
                  </View>
                  <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
                     <Image resizeMode='cover' style={styles.image} source={require('../images/ireland.png')} />
                  </View>
               </Swiper>
        </CardSection>
    </ScrollView>
    );
  };

 

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
  slide: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
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

export default DashboardScreen;