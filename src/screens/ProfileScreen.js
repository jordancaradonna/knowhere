import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button, Tile, Avatar} from 'react-native-elements';
import { connect } from 'react-redux';
import { profileFetch } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class ProfileScreen extends React.Component {
  componentWillMount() {
    this.props.profileFetch();

    //this.createDataSource(this.props);
  }

  // componentWillReceiveProps(nextProps) {
  //   // nextProps are the next set of props that this component
  //   // will be rendered with
  //   // this.props is still the old set of props
  //
  //   this.createDataSource(nextProps);
  // }
  //
  // createDataSource({ fname, lname, city, username }) {
  //   console.log('idk what I\'m doing')
  // }


  onSettingsPress() {
    this.props.navigation.navigate('settings');
  }

  onCreateTripPress() {
    this.props.navigation.navigate('createtrip');
  }

  onCreateOutingPress() {
    this.props.navigation.navigate('createouting');
  }
  onDreamListPress(){
    this.props.navigation.navigate('dreamlist');
  }


  render () {
    return (
      <View>
        <Avatar
          medium
          rounded
          //source={require('../static/temp_profile.jpg')}
          containerStyle={styles.AvatarStyle}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          justifyContent='center'
          alignItems='center'
        />


        <View // imageSrc={require()}
            style={styles.TopProfileStyle} >

          <Text style={styles.NameStyle}>{this.props.username}</Text>
          <Text style={styles.NameStyle}>{this.props.fname} {this.props.lname}</Text>
          <Text style={styles.NameStyle}>{this.props.city}</Text>
          <Text></Text>

          <Button
            small
            rounded
            title='settings'
            color='black'
            backgroundColor = '#f8f8f8'
            style = {{padding: 5}}
            onPress={this.onSettingsPress.bind(this)}
          />
          <Button
            small
            rounded
            title='myMap'
            color='black'
            backgroundColor = '#f8f8f8'
            style = {{padding: 5}}
          />

          <Button
            small
            rounded
            title='Dream List'
            color='black'
            backgroundColor = '#f8f8f8'
            style = {{padding: 5}}
            onPress={this.onDreamListPress.bind(this) } />



          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>




        <View style={styles.container2}>

          <View style={styles.buttonContainer}>
            <Button
              small
              title='Trips'
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.buttonStyle}
              color='#83b4ff'
              backgroundColor='#f4f4ff'/>
           </View>
        <View style={styles.buttonContainer}>
            <Button
              small
              title='Outings'
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.buttonStyle}
              color='white'
              backgroundColor='#b0d0ff'/>
           </View>
        </View>


        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>

        <Button
            small
            rounded
            title='Create Trip'
            color='black'
            backgroundColor = '#f8f8f8'
            style = {{padding: 5}}
            onPress={this.onCreateTripPress.bind(this) } />

          <Button
            small
            rounded
            title='Create Outing'
            color='black'
            backgroundColor = '#f8f8f8'
            style = {{padding: 5}}
            onPress={this.onCreateOutingPress.bind(this) } />

      </View>


    )

  }
}



const styles = {
  AvatarStyle: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
  },
  DividerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  TopProfileStyle: {
    width: SCREEN_WIDTH,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  NameStyle: {
    fontFamily: 'Al Nile',
    fontSize: 18,
    color: 'black'
  },
  container2:{
    flex: 1,
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    flex: 1,
    marginLeft: 25,
    marginRight: 25,

  },
  buttonTitle:{
    fontSize: 16,
    letterSpacing: 2,
  },
  buttonStyle:{
    width: 115,
    height: 44,
    //padding: 20,
    borderRadius: 100, //makes it oval not squared
    elevation: 5,
  }
};

//Connect the current props to redux props
const mapStateToProps = ({ info }) => {
  const { fname, lname, city, username } = info;

  return { fname, lname, city, username };
};

export default connect(mapStateToProps, { profileFetch })(ProfileScreen);
