import React from 'react';
import { View, Text, Image, Animated,
          StyleSheet, Dimensions, ScrollView} from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';





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
