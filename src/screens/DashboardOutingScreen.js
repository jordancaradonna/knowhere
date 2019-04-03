import React from 'react';
import { View, Text, Image, Animated, 
          StyleSheet, Dimensions, ScrollView} from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';


const Users = [ //Jordan
  { id: "first", uri: require('../images/namibiaDrinks.png') },
]

const SCREEN_WIDTH = Dimensions.get('window').width;


class DashboardOutingScreen extends React.Component {
  
  onTripsPress() {
    this.props.navigation.navigate('dash');
  }
  onOutingsPress(){
    this.props.navigation.navigate('dashOutings');
  }
  
  render = () => {
    return (
      <ScrollView style={{flex:1}}>

      <View style ={{flex: 1, flexDirection: 'row'}} //
      >
        <View //contains the CardSection  ---------NAMIBIA----------
        >      
            <View style = {{flex: 1, flexDirection: 'column' }}>  
              <Image 
                style={{width: 175, height: 280, marginTop: 10, marginBottom: 5, marginLeft: 10}} 
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
                    <Text style= {{marginTop: 12}} > 
                              Karibib, NM
                    </Text>
                    <Image 
                        source = {require('../images/bookmarkOuting.png')}
                        style = {{height: 25, width: 25, marginLeft: 10, marginTop: 10}}
                    />
                </View>   
            </View>
        </View>
        <View //contains the CardSection  ---------CUP & BAR----------
        >      
            <View style = {{flex: 1, flexDirection: 'column' }}>  
            
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
                    <Text style= {{marginTop: 12}} > 
                              Portland
                    </Text>
                    <Image 
                        source = {require('../images/bookmarkOuting.png')}
                        style = {{height: 25, width: 25, marginLeft: 10, marginTop: 10}}
                    />
                </View>   
            </View>
        </View>
      </View>




        <View style ={{flex: 1, flexDirection: 'row'}} //
      >
        <View //contains the CardSection  --------- pasadena bar ----------
        >      
            <View style = {{flex: 1, flexDirection: 'column' }}>  
              <Image 
                style={{width: 175, height: 280, marginTop: 10, marginBottom: 5, marginLeft: 10}} 
                source={require('../images/lastBookstore.png')} />
                
                <View //contains info on the BOTTOM
                    style ={{ flex: 1, flexDirection: 'row'}}
                >
                    <Avatar
                        small
                        source={require('../images/koryProfile.png')}
                        containerStyle={styles.AvatarStyle}
                        onPress={() => this.props.navigation.navigate('profile')}
                        activeOpacity={0.7}
                    />
                    <Image 
                              source = {require('../images/pin.png')}
                              style = {{height: 20, width: 20, marginLeft: 5, marginTop: 11}}/>
                    <Text style= {{marginTop: 12}} > 
                              Los Angeles
                    </Text>
                    <Image 
                        source = {require('../images/bookmarkOuting.png')}
                        style = {{height: 25, width: 25, marginLeft: 10, marginTop: 10}}
                    />
                </View>   
            </View>
        </View>
        <View //contains the CardSection  --------  last bookstore----------
        >      
            <View style = {{flex: 1, flexDirection: 'column' }}>  
            
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
                    <Text style= {{marginTop: 12}} > 
                              Pasadena
                    </Text>
                    <Image 
                        source = {require('../images/bookmarkOuting.png')}
                        style = {{height: 25, width: 25, marginLeft: 10, marginTop: 10}}
                    />
                </View>   
            </View>
        </View>
      </View>



      <View //contains the CardSection  ---------Sanctuary----------
        >      
            <View style = {{flex: 1, flexDirection: 'column' }}>  
              <View style = {{aligntItems: 'center', flexDirection: 'row'}} >
                <Image 
                  style={{width: 210, height: 190, marginTop: 10, marginBottom: 5}} 
                  source={require('../images/sanctuary1.png')} />
                <Image 
                  style={{width: 210, height: 190, marginTop: 10, marginBottom: 5}} 
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
                              Claremont
                    </Text>
                    <Image 
                        source = {require('../images/bookmarkOuting.png')}
                        style = {{height: 25, width: 25, marginLeft: 40, marginTop: 10}}
                    />
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
                style = {{flex: 1, height: 250, width: 250, resizeMode: 'cover', borderRadius: 20}}
                source = {item.uri}
              />
          </Animated.View>
        );
      })
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
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 5,
    paddingLeft: 5
    }
}



export default DashboardOutingScreen;
