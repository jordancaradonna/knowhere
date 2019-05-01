import React from 'react';
import { View, Text, Image, 
           Animated, ScrollView, ImageBackground,
           SafeAreaView} from 'react-native';
import { Avatar, Button, SearchBar, Card, Header} from 'react-native-elements';

const Users = [ //Jordan
    { id: "first", uri: require('../images/london.jpg') },
    { id: "second", uri: require('../images/egg.jpg')},
    { id: "third", uri: require('../images/buck.jpg')},
  ]
  const london = [ //Jordan
    { id: "first", uri: require('../images/hyde.jpg') },
    { id: "second", uri: require('../images/eggbroke.jpg')},
    { id: "third", uri: require('../images/eye.jpg')},
    { id: "fourth", uri: require('../images/phone.jpg')},
  ]

class CityProfileScreen extends React.Component {

    render() {
        return(
            <SafeAreaView style={{flex:1}}>
             <Header
                centerComponent={{ text: 'London Posts' }}
                backgroundColor= 'white'
          />
            <ScrollView>
            <View //view of everything on top
        >
          <ImageBackground  source={require('../images/london.jpg')}
                        style={{maxHeight: 120, height: 200}}>
            <View>
                <Text>
                    l
                </Text>
            </View>

        </ImageBackground>

        {/* <View flexDirection='row' justifyContent='space-between' //contains country, username, post, and followers
        >
          <View flexDirection='column' >
            <Text>London</Text>
          </View>

        </View> */}

        <View alignItems='center' flexDirection='row' 
         style = {{borderBottomWidth: 1, borderColor: '#ddd'}}
        //add new, dream list, trips, outings
        >
          <View //icons view
          flexDirection = 'row'  flex= {1}
          >
          </View>
                
                
          </View>
        </View>
                <View //contains the 1st CardSection ---------JORDAN----------  
                    >      
            <View style = {{flex: 1, flexDirection: 'row' }}>
                <View //contains info on the LEFT
                >
                    <Avatar
                        large
                        source={require('../images/jprofile.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Text style={{  fontSize: 10, paddingLeft: 6}} 
                          onPress={() => this.props.navigation.navigate('profile')}>
                          Jordan Caradonna
                    </Text>
                    <View style = {{flexDirection: 'row', paddingTop: 5,   //location pin info
                                      paddingBottom: 15, paddingRight: 5, 
                                      borderBottomWidth: 1, borderColor: '#ddd',}} >
                          <Image 
                            source = {require('../images/home.png')}
                            style = {{height: 15, width: 15}}/>
                          <Text style={{  fontSize: 10}}> 
                            : Orange County
                          </Text>
                    </View>
                    <Image 
                        source = {require('../images/bookmark_.png')}
                        style = {{height: 100, width: 100, padding: 15}}
                    />  
                </View>
                <ScrollView horizontal style = {{}}>
                     {this.renderSecondImages()} 
                </ScrollView> 
                </View>

             </View>
             <View //contains the 1st CardSection ---------JORDAN----------  
                    >      
            <View style = {{flex: 1, flexDirection: 'row' }}>
                <View //contains info on the LEFT
                >
                    <Avatar
                        large
                        source={require('../images/mayProfile.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Text style={{  fontSize: 10, paddingLeft: 6}} 
                          onPress={() => this.props.navigation.navigate('profile')}>
                          May Chang
                    </Text>
                    <View style = {{flexDirection: 'row', paddingTop: 5,   //location pin info
                                      paddingBottom: 15, paddingRight: 5, 
                                      borderBottomWidth: 1, borderColor: '#ddd',}} >
                          <Image 
                            source = {require('../images/home.png')}
                            style = {{height: 15, width: 15}}/>
                          <Text style={{  fontSize: 10}}> 
                            : Azusa
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
            </ScrollView>
    </SafeAreaView>  
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
        renderSecondImages = () =>{
            //item, i is the index
              return london.map((item, currentIndex) =>{
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
    AvatarStyle: {
      marginTop: 20,
      marginBottom: 22,
    }
}

export default CityProfileScreen;