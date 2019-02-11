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




export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    const MainNavigator = createStackNavigator(
      {
        login: LoginScreen,
        createuser: CreateUserScreen,
        accountinfo: AccountInfoScreen,
        forgotpassword: ForgotPasswordScreen,
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
<<<<<<< HEAD
      <View style={styles.container}>
        <Text>welcome knowhere dudes!</Text>
      </View>
=======
      <Provider store={store} >
        <Navigator />
      </Provider>
>>>>>>> 27efc22160af6cf23b3f32e9cf7577d69ceb609c
    );
  }
}
