import React from 'react';
import { View, Text, Image, Animated,
          StyleSheet, Dimensions, ScrollView} from 'react-native';
import { Button, Avatar } from 'react-native-elements';
<<<<<<< HEAD
//import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome'
=======
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
>>>>>>> Development/16-CreateOuting




const Users = [ // jordan
  { id: "first", uri: require('../images/namibiaDrinks.png') },
  { id: "second", uri: require('../images/joshNamibia.png')},
]


const SCREEN_WIDTH = Dimensions.get('window').width;


class DashboardOutingScreen extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  onTripsPress() {
    this.props.navigation.navigate('dash');
  }
  onOutingsPress(){
    this.props.navigation.navigate('dashOutings');
  }

<<<<<<< HEAD
  state = {
    toggle: false //for bookmark icon switch
  }
  changeIcon() {
    const newState = !this.state.toggle;
    this.setState({toggle: newState})
    this.props.onStateChange && this.props.onStateChange(newState)
  }
  
  render = () => {
    const {toggle}= this.state;
    const iconName = toggle ? "bookmar" : "bookmark-o";
    return (
      <ScrollView style={{flex:1}}>

      <View style ={{flex: 1, flexDirection: 'row',
                    borderColor: '#C5C7CA', borderWidth: 1.5 }} //
      >
        <View //contains the CardSection  ---------NAMIBIA-----------------------
        >      
            <View style = {{flex: 1, flexDirection: 'column',
                            borderColor: '#C5C7CA', borderWidth: 2 }}
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

        <View //contains the CardSection  ---------CUP & BAR----------------------
        >      
            <View style = {{flex: 1, flexDirection: 'column',
                    borderColor: '#C5C7CA', borderWidth: 2}}>  
            
              <Image 
                style={{width: 175, height: 280, marginTop: 10, marginBottom: 5, marginLeft: 5}} 
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
                    <Image 
                              source = {require('../images/pin.png')}
                              style = {{height: 20, width: 20, marginLeft: 5, marginTop: 11}}/>
                    <Text style= {{marginTop: 12, marginRight: 15}} > 
                              Portland
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



      
      <View style ={{flex: 1, flexDirection: 'row',
                  borderColor: '#C5C7CA', borderWidth:1.5}} //
      >
        <View //contains the CardSection  ---------Bookstore-------------------------
        >      
            <View style = {{flex: 1, flexDirection: 'column',
                          borderColor: '#C5C7CA', borderWidth: 2 }}
                    >  
              <Image  style = {styles1.viewStyle}
                style={{width: 175, height: 280, marginTop: 10, marginBottom: 5, marginLeft: 5}} 
                source={require('../images/lastBookstore.png')} />
              
                <View //contains info on the BOTTOM
                    style ={{ flex: 1, flexDirection: 'row'}}
                >
                    <Avatar
                        small
                        source={require('../images/koryProfile.png')}
                        containerStyle={styles.AvatarStyle}
                        //onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Image 
                              source = {require('../images/pin.png')}
                              style = {{height: 20, width: 20, marginLeft: 5, marginTop: 11}}/>
                    <Text style= {{marginTop: 12, marginRight: 10}} > 
                              Los Angeles        
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

        <View //contains the CardSection  ---------wine bar----------------------------
        >      
            <View style = {{flex: 1, flexDirection: 'column',
                            borderColor: '#C5C7CA', borderWidth: 2}}>  
            
              <Image 
                style={{width: 175, height: 280, marginTop: 10, marginBottom: 5, marginLeft: 5}} 
                source={require('../images/pasadenaWine.png')} />
                
                <View //contains info on the BOTTOM
                    style ={{ flex: 1, flexDirection: 'row'}}
                >
                    <Avatar
                        small
                        source={require('../images/maddieProfile.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Image 
                              source = {require('../images/pin.png')}
                              style = {{height: 20, width: 20, marginLeft: 5, marginTop: 11}}/>
                    <Text style= {{marginTop: 12, marginRight: 15}} > 
                              Pasadena
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





      <View style ={{flex: 1, flexDirection: 'row',
                      borderColor: '#C5C7CA', borderWidth: 1.5}} //
      >
        <View //contains the CardSection  ---------sanctuary--------------------------
        >      
            <View style = {{flex: 1, flexDirection: 'column',
                            borderColor: '#C5C7CA', borderWidth: 2 }}
                    >  
              <Image  style = {styles1.viewStyle}
                style={{width: 175, height: 280, marginTop: 10, marginBottom: 5, marginLeft: 5}} 
                source={require('../images/sanctuary1.png')} />
              
                <View //contains info on the BOTTOM
                    style ={{ flex: 1, flexDirection: 'row'}}
                >
                    <Avatar
                        small
                        source={require('../images/chadProfile.png')}
                        containerStyle={styles.AvatarStyle}
                        //onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Image 
                              source = {require('../images/pin.png')}
                              style = {{height: 20, width: 20, marginLeft: 5, marginTop: 11}}/>
                    <Text style= {{marginTop: 12, marginRight: 15}} > 
                              Claremont        
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

        <View //contains the CardSection  ---------wine-----------------------
        >      
            <View style = {{flex: 1, flexDirection: 'column',
                        borderColor: '#C5C7CA', borderWidth: 2}}>  
            
              <Image 
                style={{width: 175, height: 280, marginTop: 10, marginBottom: 5, marginLeft: 5}} 
                source={require('../images/pasadenaWine.png')} />
                
                <View //contains info on the BOTTOM
                    style ={{ flex: 1, flexDirection: 'row'}}
                >
                    <Avatar
                        small
                        source={require('../images/maddieProfile.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Image 
                              source = {require('../images/pin.png')}
                              style = {{height: 20, width: 20, marginLeft: 5, marginTop: 11}}/>
                    <Text style= {{marginTop: 12, marginRight: 15}} > 
                              Pasadena
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
    )
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
                style = {{flex: 1, height: 175, width: 200, resizeMode: 'cover', borderRadius: 20}}
                source = {item.uri}
              />
          </Animated.View>
        );
      })
=======
  render() {
    return (
      <ScrollView style={{flex:1}}>
        <View style ={styles.container} //
        >
        {
            this.props.posts.map((d, i) => {
            return (
                <View key={i} style={styles.item} //contains the CardSection  ---------NAMIBIA----------
                >
                    <View style = {{flex: 1, flexDirection: 'column' }}>
                      <Image
                        style={{width: 175, height: 280, marginTop: 10, marginBottom: 5, marginLeft: 10}}
                        source={{ uri: d.photoUrl }} />

                        <View //contains info on the BOTTOM
                            style ={{ flex: 1, flexDirection: 'row'}} >
                            <Avatar
                                small
                                source={{ uri: d.author.profilePhoto }}
                                containerStyle={styles.AvatarStyle}
                                onPress={() => this.props.navigation.navigate('profile')}
                                activeOpacity={0.7}
                            />
                            <Image
                                      source = {require('../images/pin.png')}
                                      style = {{height: 20, width: 20, marginLeft: 5, marginTop: 11}}
                            />
                            <Text style= {{marginTop: 12}} >
                                      {d.location}
                            </Text>
                            <Image
                                source = {require('../images/bookmarkOuting.png')}
                                style = {{height: 25, width: 25, marginLeft: 10, marginTop: 10}}
                            />
                        </View>
                      </View>
                    </View>
              );
            })
          }
          </View>
        </ScrollView>
      );
>>>>>>> Development/16-CreateOuting
    }
}




const styles1 = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  item:{
    width: '50%' // is 50% of container width
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
  },
  viewStyle:{
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity:0.5
  }
});



const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
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
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 5,
    paddingLeft: 5
    }
}

//Connect the current props to redux props
const mapStateToProps = ({ feed }) => {
  const { posts } = feed;

  return { posts };
};

export default connect(mapStateToProps, { fetchPosts })(DashboardOutingScreen);
