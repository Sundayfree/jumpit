import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import AppNavigator from './navigations/AppNavigator';
export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}
