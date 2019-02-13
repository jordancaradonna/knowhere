import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import thunk from 'redux-thunk';

import reducers from './src/reducers';

import LoginScreen from './src/screens/LoginScreen';
import CreateUserScreen from './src/screens/CreateUserScreen';
import AccountInfoScreen from './src/screens/AccountInfoScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import CreateTripScreen from './src/screens/CreateTripScreen';
import CreateOutingScreen from './src/screens/CreateOutingScreen';



export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    const MainNavigator = createStackNavigator(
      {
        login: LoginScreen,
        createuser: CreateUserScreen,
        accountinfo: AccountInfoScreen,
        forgotpassword: ForgotPasswordScreen,
        createtrip: CreateTripScreen,
        createouting: CreateOutingScreen,
        main: createBottomTabNavigator(
          {
            Dash: DashboardScreen,
            Profile: ProfileScreen,
            Explore: ExploreScreen,
            Notifications: NotificationsScreen
          }
        )
      }
  );
    const Navigator = createAppContainer(MainNavigator);

    return (
      <Provider store={store} >
        <Navigator />
      </Provider>
    );
  }
}
