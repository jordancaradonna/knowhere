import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import thunk from 'redux-thunk';

import reducers from './src/reducers';
import LoginScreen from './src/screens/LoginScreen';
import CreateUserScreen from './src/screens/CreateUserScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import TripScreen from './src/screens/TripScreen';
import OutingScreen from './src/screens/OutingScreen';
import MapScreen from './src/screens/MapScreen';
import FriendsScreen from './src/screens/FriendsScreen';

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    const MainNavigator = createStackNavigator(
      {
        login: LoginScreen,
        createuser: CreateUserScreen,
        map: MapScreen,
        friends: FriendsScreen,
        trips: TripScreen,
        outings: OutingScreen,
        main: createBottomTabNavigator(
          {
            dash: DashboardScreen,
            profile: ProfileScreen,
            explore: ExploreScreen,
            notifications: NotificationsScreen
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
