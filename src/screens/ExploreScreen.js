import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, 
          Dimensions, Animated, ScrollView, 
          TouchableWithoutFeedback, SafeAreaView} from 'react-native';
import { Avatar, Button, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
//import SearchBar from 'react-native-search-bar';
import { profileFetch, searchUser } from '../actions'


const Users = [ //Jordan
  { id: "first", uri: require('../images/jIreland.jpg') },
  { id: "second", uri: require('../images/ireland1.png')},
  { id: "third", uri: require('../images/jprofile.png')},
  { id: "fourth", uri: require('../images/ireland2.png')}
]
const Users1 = [ //Frida
  { id: "first", uri: require('../images/yosemite.png') },
  { id: "second", uri: require('../images/yosemite1.png')}, //not mine, web
  { id: "third", uri: require('../images/grandCanyon1.png')},
  { id: "fourth", uri: require('../images/grandCanyon2.png')}
]
const Users2 = [ //May
  //{ id: "first", uri: require('../images/hawaii1.png') },
  { id: "second", uri: require('../images/hawaii2.png')}, 
  { id: "third", uri: require('../images/hawaii3.png')},
  { id: "fourth", uri: require('../images/hawaii4.png')}
]
const Users3 = [ //Aidan
  { id: "first", uri: require('../images/caboSanLucas1.png') },
  { id: "second", uri: require('../images/caboSanLucas2.png')}, 
  { id: "third", uri: require('../images/caboSanLucas3.png')},
  //{ id: "fourth", uri: require('../images/hawaii4.png')}
]

const SCREEN_WIDTH = Dimensions.get('window').width;

class ExploreScreen extends React.Component {
  componentWillMount() {
    this.props.profileFetch();
  }
 
  onTripsPress() {
    this.props.navigation.navigate('dash');
  }
  onOutingsPress(){
    this.props.navigation.navigate('dashOutings');
  }
  onSearchUser(text) {
    this.props.searchUser(text);
  }

  render () {
    return (
      <SafeAreaView style={{flex:1}}>
      <ScrollView  >

        <Image // --KW LOGO-- style={ alignContent= 'center'}
            style={{width: 350, height: 50, marginBottom: 5}} 
            source={require('../images/kwLogo.png')} />

        <SearchBar
          lightTheme
          round
          ref='searchBar'
          placeholder='Search'
          placeholderTextColor='white'
          onChangeText = {this.onSearchUser.bind(this)}
        />

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
                     {this.renderImages()} 
                </ScrollView> 

            </View>
        </View>
            

        <View //contains the CardSection  ---------CUP & BAR----------
        >      
            <View style = {{flex: 1, flexDirection: 'column' }}>  
            
              <Image 
                style={{width: 375, height: 260, marginTop: 10, marginBottom: 5}} 
                source={require('../images/cupBar.png')} />
                
                <View //contains info on the BOTTOM
                    style ={{ flex: 1, flexDirection: 'row'}}
                >
                    <Avatar
                        small
                        source={require('../images/tiffprofile.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Text style={{  fontSize: 14, paddingLeft: 5, marginTop: 12, marginLeft: 5}} 
                          onPress={() => this.props.navigation.navigate('profile')}>
                          Tiffany Lemke     
                    </Text>

                    
                    <Image 
                              source = {require('../images/pin.png')}
                              style = {{height: 20, width: 20, marginLeft: 30, marginTop: 11}}/>
                    <Text style= {{marginTop: 12}} > 
                              Portland, OR
                    </Text>


                    <Image 
                        source = {require('../images/bookmarkOuting.png')}
                        style = {{height: 25, width: 25, marginLeft: 30, marginTop: 10}}
                    />

                    <Button
                        title='FR' //friend request
                        type='outline'
                        style={{height: 20, width: 20, marginLeft: 30, marginTop: 11}}
                        
                    />
                </View>   
            </View>

        </View>



        <View //contains the 2st CardSection   ---------FRIDA----------
        >      
            <View style = {{flex: 1, flexDirection: 'row' }}>
                
                <View //contains info on the LEFT
                >
                    <Avatar
                        large
                        source={require('../images/fprofile.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Text style={{  fontSize: 12, paddingLeft: 6}} 
                          onPress={() => this.props.navigation.navigate('profile')}>
                          Frida Martinez
                    </Text>

                    <View style = {{flexDirection: 'row', paddingTop: 5,   //location pin info
                                      paddingBottom: 15, paddingRight: 5, 
                                      borderBottomWidth: 1, borderColor: '#ddd',}} >
                          <Image 
                            source = {require('../images/home.png')}
                            style = {{height: 15, width: 15}}/>
                          <Text style={{ fontSize: 13}}> 
                            : Los Angeles
                          </Text>
                    
                    </View>

                    <Image 
                        source = {require('../images/bookmark_.png')}
                        style = {{height: 100, width: 100, padding: 15}}
                    />
                </View>

                <ScrollView horizontal style = {{}}>
                     {this.renderImages1()} 
                </ScrollView> 

            </View>
        </View>


        <View //contains the 3rd CardSection  ---------MAY----------
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
                    <Text style={{  fontSize: 14, paddingLeft: 6}} 
                          onPress={() => this.props.navigation.navigate('profile')}>
                          May Chang
                    </Text>

                    <View style = {{flexDirection: 'row', paddingTop: 5,   //location pin info
                                      paddingBottom: 15, paddingRight: 5, 
                                      borderBottomWidth: 1, borderColor: '#ddd',}} >
                          <Image 
                            source = {require('../images/home.png')}
                            style = {{height: 15, width: 15}}/>
                          <Text 
                            style={{ fontSize: 13}}> 
                            : Hilo
                          </Text>
                    </View>

                    <Image 
                        source = {require('../images/bookmark_.png')}
                        style = {{height: 100, width: 100, padding: 15}}
                    />
                </View>

                <ScrollView horizontal style = {{}}>
                     {this.renderImages2()} 
                </ScrollView> 

            </View>
        </View>


        <View //contains the CardSection  ---------Sanctuary----------
        >      
            <View style = {{flex: 1, flexDirection: 'column' }}>  
              <View style = {{aligntItems: 'center', flexDirection: 'row'}} >
                <Image 
                  style={{width: 190, height: 190, marginTop: 10, marginBottom: 5}} 
                  source={require('../images/sanctuary1.png')} />
                <Image 
                  style={{width: 190, height: 190, marginTop: 10, marginBottom: 5}} 
                  source={require('../images/sanctuary2.png')} />
              </View>


                <View //contains info on the BOTTOM
                    style ={{ flex: 1, flexDirection: 'row'}}
                >
                    <Avatar
                        small
                        source={require('../images/chadProfile.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Text style={{  fontSize: 14, paddingLeft: 5, marginTop: 12, marginLeft: 5}} 
                          onPress={() => this.props.navigation.navigate('profile')}>
                          Chad Ditter   
                    </Text>

                    
                    <Image 
                              source = {require('../images/pin.png')}
                              style = {{height: 20, width: 20, marginLeft: 30, marginTop: 11}}/>
                    <Text style= {{marginTop: 12}} > 
                              Claremont, CA
                    </Text>


                    <Image 
                        source = {require('../images/bookmarkOuting.png')}
                        style = {{height: 25, width: 25, marginLeft: 30, marginTop: 10}}
                    />
                </View>   
            </View>

        </View>


        <View //contains the 4th CardSection  ---------AIDAN----------
        >      
            <View style = {{flex: 1, flexDirection: 'row' }}>
                
                <View //contains info on the LEFT
                >
                    <Avatar
                        large
                        source={require('../images/aidanProfile.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Text style={{  fontSize: 14, paddingLeft: 6}} 
                          onPress={() => this.props.navigation.navigate('profile')}>
                          Aidan Alcos
                    </Text>

                    <View style = {{flexDirection: 'row', paddingTop: 5,   //location pin info
                                      paddingBottom: 15, paddingRight: 5, 
                                      borderBottomWidth: 1, borderColor: '#ddd',}} >
                          <Image 
                            source = {require('../images/home.png')}
                            style = {{height: 15, width: 15}}/>
                          <Text 
                            style={{ fontSize: 13}}> 
                            : Kailua Kona
                          </Text>
                    </View>

                    <Image 
                        source = {require('../images/bookmark_.png')}
                        style = {{height: 100, width: 100, padding: 15}}
                    />
                </View>

                <ScrollView horizontal style = {{}}>
                     {this.renderImages3()} 
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
      renderImages2 = () =>{
        //item, i is the index
          return Users2.map((item, currentIndex) =>{
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
  

    bookmark_filled() {
      return (
        <Image  source = {require('../images/bookmark_fill.png')}
        style = {{height: 100, width: 100, padding: 15}}/>
      );
    }   



}




const styles1 = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'space-between',
  },
});


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


//Connect the current props to redux props
const mapStateToProps = ({ info, explore }) => {
  const { fname, lname, city, username } = info;
  const { search } = explore;

  

  return { fname, lname, city, username, search };
};


export default connect(mapStateToProps, {profileFetch, searchUser}) (ExploreScreen);

