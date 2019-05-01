import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createStackNavigator, createAppContainer, 
        createBottomTabNavigator, 
        createMaterialTopTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import thunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './src/reducers';

import AccountInfoScreen from './src/screens/AccountInfoScreen';
import CreateOutingScreen from './src/screens/CreateOutingScreen';
import CreateTripScreen from './src/screens/CreateTripScreen';
import CreateUserScreen from './src/screens/CreateUserScreen';
import DashboardScreen from './src/screens/DashboardScreen'; //trip
import DashboardOutingScreen from './src/screens/DashboardOutingScreen'; //outing
import DreamListScreen from './src/screens/DreamListScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import LoginScreen from './src/screens/LoginScreen';
import OtherProfileScreen from './src/screens/OtherProfileScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import MyOutingsScreen from './src/screens/MyOutingsScreen';
import MyTripsScreen from './src/screens/MyTripsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import ViewProfileScreen from './src/screens/ViewProfileScreen';
import EditProfile from './src/screens/EditProfile';
import PrivacyScreen from './src/screens/PrivacyScreen';
import MapScreen from './src/screens/MapScreen';

import ViewCabo from './src/screens/ViewCabo';
import ViewHawaii from './src/screens/ViewHawaii';
import ViewIreland from './src/screens/ViewIreland';




export default class App extends React.Component {

  componentWillMount() {   // Initialize Firebase
    // const config = {
    // apiKey: 'AIzaSyBm35rISqtCyd1r9l6gFPvd1-rs9fiUb_A',
    // authDomain: 'knowhere.firebaseapp.com',
    // databaseURL: 'https://knowhere.firebaseio.com',
    // projectId: 'knowhere',
    // storageBucket: '',
    // messagingSenderId: '289231611796'
    // };
    // firebase.initializeApp(config);
    // Initialize Firebase
    const config = {
    apiKey: "AIzaSyAbk5QwOhbOSskdMsyxbtLfm5Dqdl0B6ow",
    authDomain: "knowhere-d8802.firebaseapp.com",
    databaseURL: "https://knowhere-d8802.firebaseio.com",
    projectId: "knowhere-d8802",
    storageBucket: "knowhere-d8802.appspot.com",
    messagingSenderId: "284533030488"
  };
  firebase.initializeApp(config);
  }




  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    const topNavigator = createMaterialTopTabNavigator({
      Trips: DashboardScreen,
      Outings: DashboardOutingScreen,
    },
    );

    const MainNavigator = createStackNavigator(
    {
        //other: OtherProfileScreen,
        login: LoginScreen,
        viewprofile: ViewProfileScreen,
        createuser: CreateUserScreen,
        accountinfo: AccountInfoScreen,
        createuser: CreateUserScreen,
        dashOutings: DashboardOutingScreen,
        forgotpassword: ForgotPasswordScreen,
        dashOutings: DashboardOutingScreen,
        messages: MessagesScreen,
        explore: ExploreScreen,
        createtrip: CreateTripScreen,
        myoutings: MyOutingsScreen,
        createouting: CreateOutingScreen,
        //changehomelocation: ChangeHomeLocationScreen,
        editProfile: EditProfile,
        privacy: PrivacyScreen,
        map: MapScreen,
        dreamlist: DreamListScreen,
        ViewCabo: ViewCabo,
        ViewHawaii: ViewHawaii,
        ViewIreland: ViewIreland,
        settings: SettingsScreen,
        other: OtherProfileScreen,
        myoutings:MyOutingsScreen,
        mytrips: MyTripsScreen,



        main: createBottomTabNavigator({
            dash: {
              screen: topNavigator,
              navigationOptions: {
                title: 'Dash',
                tabBarLabel: 'dash',
                tabBarIcon:({tintColor}) => (
                  <Icon name="ios-today"
                        color={ tintColor }
                        size={24} />
                )
              }
            },
            notifications: {
              screen: NotificationsScreen,
              navigationOptions: {
                tabBarLabel: 'notifications',
                tabBarIcon:({tintColor}) => (
                  <Icon name="ios-notifications"
                        color={ tintColor }
                        size={24} />
                ),
                header: 'title'
              }
            },
            explore: {
              screen: ExploreScreen,
              navigationOptions: {
                tabBarLabel: 'explore',
                tabBarIcon:({tintColor}) => (
                  <Icon name="ios-compass"
                        color={ tintColor }
                        size={24} />
                )
              }
            },
            profile: {
              screen: ProfileScreen,
              navigationOptions: {
                tabBarLabel: 'profile',
                tabBarIcon:({tintColor}) => (
                  <Icon name="ios-contact"
                        color={ tintColor }
                        size={24} />
                ),
                header: 'title'
              }
            },

          },
          {
              navigationOptions:{
                tabBarVisible:true,
                header: null

              },
              //tablBarOptions:{
                //activeTintColor: 'purple',
                //inactiveTintColor: '#black'
              //}
        })
   // navigationOptions = { header: null }
    }) //End of Main Navigator

    const Navigator = createAppContainer(MainNavigator);



    return  (
      <Provider store={store} >
        <Navigator />
      </Provider>
    )
  }
}
