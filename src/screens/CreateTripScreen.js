import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Switch, ScrollView, Image} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class CreateTripScreen extends React.Component {

  //------------------STATE PROPERTIES FOR CHOOSE PHOTO------------------//

  state = {
    photo: null,
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, respone => {
      if (Response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  onPostPress () {
    this.props.navigation.navigate('dash')
  }

  //------------------STATE PROPERTIES FOR SWITCH----------------//
  //Initial state false for the switch. You can change it to true just to see.
  state = { switchValue: false };

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    //state changes according to switch
    //which will result in re-render the text
  };

  //========= GEOCODER API ============//
  getData()
  {
    Geocoder.setApiKey('AIzaSyClq65p5OIy1-Rd36q07iTuQBq3c61B9BQ');

    Geocoder.getFromLocation("azusa").then(

  //_____________________________________________________________
  //==========PART 1: gets address given Coordinates==========
      // json => {
      //   var address_component = json.results[0].formatted_address;
      //   alert(address_component);
      // },
      // error => {
      //   alert(error);
      // }

  //_______________________________________________________________
  //=========PART 2: gets coordinates based on user input=======

      json => {
        var location = json.results[0].geometry.location;
        alert (location.lat + ", " + location.lng);
      },

      //===============TEST TO GET SPECIFIC LAT AND LNG==============//
      //   var latitude = json.results[0].geometry.location.lat;
      //   var longitude = json.results[0].geometry.location.lng;
      //   alert(latitude + ", " + longitude);
      // },
      error => {
        alert(error);
      }
    );
  }

  render () {
    const { photo } = this.state;
    return (
      
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>{this.getData()}}>
            <Text style={{fontSize:20}}>Get Address</Text>
          </TouchableOpacity>
        </View>
      <View style={{justifyContent: "space-evenly"}}>
        <Text style={{ fontSize: 20, alignSelf: 'center', padding: 20}}>
          Create Trip
        </Text>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button
          title="Choose Photo"
          iconRight={{name:'photo', color:'black'}}
          onPress={this.handleChoosePhoto}
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.buttonStyle}
        />

        {/* ============== SCROLLABLE VIEW WHEN KEYBOARD IS ACTIVE ============ */}
        <KeyboardAwareScrollView>

          {/* ======== TEXT INPUT FOR DESCRIPTION OF TRIP/OUTING ========= */}
          <TextInput style={{ height: 160, width: 200,
                              backgroundColor: 'white', 
                              borderColor: '#ffffff', 
                              borderWidth: 5, }}
            placeholder='Trip Description'
            editable = {true}
            blurOnSubmit
            multiline = {true}
            onChangeText={(text) => this.setState({text})}
          />

          {/* =========TEXT INPUT FOR LOCATION======= */}
          <GooglePlacesAutocomplete
            placeholder='Location'
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed='auto'    // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            console.log(data, details);
            }}
      
            getDefaultValue={() => ''}
      
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: 'AIzaSyBm35rISqtCyd1r9l6gFPvd1-rs9fiUb_A',
              language: 'en', // language of the results
              types: '(cities)' // default: 'geocode'
            }}
      
            styles={{
              textInputContainer: {
                width: '100%'
              },
              description: {
                fontWeight: 'bold'
              },
              // predefinedPlacesDescription: {
              // color: '#1faadb'
              // }
            }}

            currentLocation={true}
            currentLocationLabel="Current Location"

            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={{
              // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }}
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: 'distance',
              types: 'food'
            }}
 
            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
 
            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
          />

          {/*-----------INPUT FOR TAGGING OTHER USERS IN YOUR TRIP/OUTING------------*/}
        
          <TextInput
            style={{ height: 40, width: 200,
                    backgroundColor: 'white', 
                    borderColor: '#ffffff', 
                    borderWidth: 5, }}
            placeholder='Tag People'
            blurOnSubmit
          />
        </KeyboardAwareScrollView>     

        <View flexDirection='row' justifyContent='center' alignItems='center'>

          {/*-----------SWITCH FOR TOGGLING BETWEEN PUBLIC AND PRIVATE POSTING--------*/}
          <Text>{this.state.switchValue ? 'Private' : 'Public'}</Text>
          <Switch
            style={{ marginTop: 10, marginBottom: 10 }}
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
          <Text></Text>

          {/*-----------PUBLISH POST BUTTON------------*/}
        
          <Button
            title='Publish Post'
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            onPress={this.onPostPress.bind(this)}
            justifyContent='center'
          />
        </View>
         
      </View>
      </ScrollView>
      
    )
  }
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  container2:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    flex: 1,
  },
  title:{
    fontSize: 28,
    fontFamily: 'Chalkboard SE',
    padding: 22,
    color: 'black',
  },
  otherText:{
    fontSize: 16,
  },
  buttonTitle:{
    fontSize: 16,
    letterSpacing: 2,
    color: "white",
  },
  buttonStyle:{
    width: 130,
    height: 42,
    backgroundColor: "#83b4ff",
    borderRadius: 100, //makes it oval not squared
    elevation: 5,
    marginBottom: 5
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default CreateTripScreen;