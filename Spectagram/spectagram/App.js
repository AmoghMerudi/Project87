import React from 'react';
import { View, Text } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import * as firebase from 'firebase';
import { firebaseConfig } from './config'

import DrawerNavigator from './navigation/DrawerNavigator';

import LogInScreen from './screens/LogIn';
import LoadingScreen from './screens/Loading';
import DashBoard from './screens/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const SwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen, 
  LogInScreen: LogInScreen,
  DashBoard: DashBoard
})

const AppNavigator = createAppContainer(SwitchNavigator)