import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
export default class LogoutPage extends Component {
  render() {
    return (
      <Container>
        <HeaderComponent titleName="Logout" {...this.props} />
      </Container>
    );
  }
}
