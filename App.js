import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons'

import thunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './src/reducers';

import LoginScreen from './src/screens/LoginScreen';
import CreateUserScreen from './src/screens/CreateUserScreen';
import AccountInfoScreen from './src/screens/AccountInfoScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import DashboardScreen from './src/screens/DashboardScreen'; //trip
import DashboardOutingScreen from './src/screens/DashboardOutingScreen'; //outing
import ProfileScreen from './src/screens/ProfileScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';



export default class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
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
    
    
    const MainNavigator = createStackNavigator(
    {
        login: LoginScreen,
        createuser: CreateUserScreen,
        accountinfo: AccountInfoScreen,
        forgotpassword: ForgotPasswordScreen,
<<<<<<< HEAD
        dashOutings: DashboardOutingScreen,
        

        main: createBottomTabNavigator({
            Dash: {
              screen: DashboardScreen,
              navigationOptions: {
                tabBarLabel: 'dash',
                tabBarIcon:({tintColor}) => (
                  <Icon name="ios-today" 
                        color={ tintColor } 
                        size={24} />
                )
              }
            },
            Notifications: {
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
            Explore: {
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
            Profile: {
              screen: ProfileScreen,
              navigationOptions: {
                tabBarLabel: 'profile',
                tabBarIcon:({tintColor}) => (
                  <Icon name="ios-contact" 
                        color={ tintColor } 
                        size={24} />
                )
              }
            },


          }, {
              navigationOptions:{
                tabBarVisible:true
              },
              //tablBarOptions:{
                //activeTintColor: 'purple',
                //inactiveTintColor: '#black'
              //}
          })

    }

=======
        main: createBottomTabNavigator(
          {
            dash: DashboardScreen,
            profile: ProfileScreen,
            explore: ExploreScreen,
            notifications: NotificationsScreen
          }
        )
      },
      navigationOptions = { header: null }
>>>>>>> 4aec1b3b53ad32bc003260c042750753d2f10daf
  );

    const Navigator = createAppContainer(MainNavigator);



    return (
      <Provider store={store} >
        <Navigator />
      </Provider>
    );
  }
}

