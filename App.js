import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
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
import MessagesScreen from './src/screens/MessagesScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import OutingsScreen from './src/screens/OutingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import TripsScreen from './src/screens/TripsScreen';



export default class App extends React.Component {
  componentWillMount() {   // Initialize Firebase
    const config = {
    apiKey: 'AIzaSyBm35rISqtCyd1r9l6gFPvd1-rs9fiUb_A',
    authDomain: 'knowhere.firebaseapp.com',
    databaseURL: 'https://knowhere.firebaseio.com',
    projectId: 'knowhere',
    storageBucket: '',
    messagingSenderId: '289231611796'
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
      
        //dashOutings: DashboardOutingScreen,
        login: LoginScreen,
        createuser: CreateUserScreen,
        accountinfo: AccountInfoScreen,
        forgotpassword: ForgotPasswordScreen,
        dashOutings: DashboardOutingScreen,
        settings: SettingsScreen,
        messages: MessagesScreen,
        explore: ExploreScreen,
        trips: TripsScreen,
        createtrip: CreateTripScreen,
        outings: OutingsScreen,
        createouting: CreateOutingScreen,
        dreamlist: DreamListScreen,
        trip: TripsScreen,

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
                )
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

