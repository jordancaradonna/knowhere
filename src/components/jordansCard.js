import React, { Component } from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  Text,
  Image,
  Animated
} from 'react-native';
import CardSection from './CardSection';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Swiper from 'react-native-swiper';
import { Button, Avatar } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const Users = [
  { id: "first", uri: require('../images/background1.jpg') },
  { id: "second", uri: require('../images/jprofile.png')},
  { id: "third", uri: require('../images/finalBackground.jpg')},
  { id: "fourth", uri: require('../images/pig.jpg')}
]

export default class Slide extends Component {

  onViewAllPress() {
    this.props.navigation.navigate('profile');
  }
  render = () => {
    return (
      <ScrollView style = {{flex: 1}}>
          <View style = {{}}>
          <Button
            onPress = {this.onViewAllPress.bind(this)}
            style = {{textAlign: 'right', padding: 5, fontSize: 10}} 
            title = 'View Post '
            />
            <View style = {{flex: 1, flexDirection: 'row', borderRightWidth: 1}}>
                <View>
                      <Text style={{ paddingTop: 30, fontSize: 10}}>
                        test
                      </Text>
                      <Avatar
                          large
                          
                          source={require('../images/jprofile.png')}
                          containerStyle={styles.AvatarStyle}
                          onPress={() => console.log("Works!")}
                          activeOpacity={0.7}
                      />
                </View>
             <ScrollView horizontal style = {{}}>
                 {this.renderImages()} 
              </ScrollView>
              </View>
         
          </View>
         
            <View style = {{ borderBottomWidth: 1,borderColor: '#ddd',}}>
            <Text style ={{paddingLeft: 10, justifyContent: 'center'}}>
                   Trip to Ireland
              </Text>
            </View>
      <CardSection style = {{ height: 300, width: SCREEN_WIDTH, flexDirection:'row'}}>
              <Swiper  height={240}
                 onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                 activeDot={<View style={{backgroundColor: '#000', width: 4, height: 4, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                  // paginationStyle={{ bottom: -23, left: null, right: 10}}
                  loop>
                  <View style={styles.slide} title={<Text numberOfLines={3}>cahs behind</Text>}>
                     <Image  style={styles.image} source={require('../images/jprofile.png')} />
                  </View>
                   <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
                      <Image  style={styles.image} source={require('../images/pig.jpg')} />
                  </View>
                 <View style={styles.slide} title={<Text style = {styles.text } numberOfLines={1}>Why Stone split from Garfield</Text>}>
                    <Image resizeMode='cover' style={styles.image} source={require('../images/jprofile.png')} />
                  </View>
                  <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
                     <Image resizeMode='cover' style={styles.image} source={require('../images/jprofile.png')} />
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
               style = {{flex: 1, height: 250, width: 300, resizeMode: 'cover', borderRadius: 20}}
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
    height: 300,
    width: 300, 
    padding: 5,
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
    marginTop: 20,
    marginBottom: 20,
    }
}
