import React from 'react';
import { View, Text, Image, StyleSheet,
         Dimensions, Animated, PanResponder, ScrollView
        } from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Slide from '../components/Slide';

const Users = [
  { id: "first", uri: require('../images/background1.jpg') },
  { id: "second", uri: require('../images/ireland.png')},
  { id: "third", uri: require('../images/finalBackground.jpg')},
  { id: "fourth", uri: require('../images/pig.jpg')}
]

const SCREEN_WIDTH = Dimensions.get('window').width;

class DashboardScreen extends React.Component {
 
  onViewAllPress() {
    this.props.navigation.navigate('profile');
  }

  onTripsPress() {
    this.props.navigation.navigate('dash');
  }
  onOutingsPress(){
    this.props.navigation.navigate('dashOutings');
  }

  render = () => {
    return (
      
      

        <ScrollView style = {{flex: 1}} > 

            <Text style={[styles1.title,]}> Dashboard </Text>


            <View style={styles1.container2} //Trip/Outing BUttons
            >
              <View style={styles1.buttonContainer}> 
                  <Button
                    title='trips'
                    titleStyle={styles1.buttonTitle}
                    buttonStyle={styles1.buttonStyle}
                    color='white'
                    backgroundColor='#b0d0ff'
                    onPress={this.onTripsPress.bind(this)}   />
                </View>

              <View style={styles1.buttonContainer}>   
                  <Button
                    title='outings'
                    titleStyle={styles1.buttonTitle}
                    buttonStyle={styles1.buttonStyle}
                    color='#83b4ff'
                    backgroundColor='#f4f4ff'
                    onPress={this.onOutingsPress.bind(this)}  />
              </View>

            </View>



            <View // contains the  1st CardSection  
            >
              <Text
                  onPress = {this.onViewAllPress.bind(this)}
                  style = {{textAlign: 'right',  fontSize: 10, paddingRight: 10, paddingTop: 5}} >
                    View Post
              </Text>
                
              <View style = {{flex: 1, flexDirection: 'row' }}>
                
                  <View //contains info on the left
                  >
                      <Avatar
                        large
                        source={require('../images/ireland.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                      />
                      <Text style={{  fontSize: 10, paddingLeft: 6}} 
                          onPress={() => this.props.navigation.navigate('profile')}>
                        Jordan Caradonna
                      </Text>
                      <View style = {{flexDirection: 'row', paddingTop: 5, 
                                      paddingBottom: 15, paddingRight: 5, 
                                      borderBottomWidth: 1, borderColor: '#ddd',}} //location pin
                      >
                            <Image 
                              source = {require('../images/pin.png')}
                              style = {{height: 20, width: 20}}/>
                            <Text > 
                              Los Angeles
                            </Text>
                      </View>

                      <Image 
                        source = {require('../images/bookmark_.png')}
                        style = {{height: 100, width: 100, padding: 15}}
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
            




            <View // contains the 2nd cardSection  
            >
              <Text
                onPress = {this.onViewAllPress.bind(this)}
                style = {{textAlign: 'right',  fontSize: 10, paddingRight: 10, paddingTop: 5}} >
                  View Post
              </Text>
            
              <View style = {{flex: 1, flexDirection: 'row' }}>
                
                <View //contains info on the left
                >
                    <Avatar
                        large
                        source={require('../images/ireland.png')}
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
                  
                    <Image 
                        source = {require('../images/bookmark_fill.png')}
                        style = {{height: 100, width: 100, padding: 15}}
                        onPress = {this.bookmark_filled.bind(this)}
                    />
                    </View>
                 
                    <ScrollView horizontal style = {{}}>
                     {this.renderImages()} 
                    </ScrollView>
                </View>
            </View>
            
            <View style = {{ borderBottomWidth: 1,borderColor: '#ddd',}}>
                <Text style ={{paddingLeft: 100, justifyContent: 'center'}}>
                   Secret Beach
                </Text>
            </View>
        
        
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
    fontFamily: 'Chalkboard SE',
    padding: 10,
    color: 'black',
  },
  buttonTitle:{
    fontSize: 28,
    letterSpacing: 2,
    //color: "white",
  },
  buttonStyle:{
    width: 160,
    height: 44,
    //backgroundColor: "#83b4ff",
    //borderRadius: 100, //makes it oval not squared
    elevation: 5,
  }
});

export default DashboardScreen;