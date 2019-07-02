import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Content
} from 'native-base';

export class SignInPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.containerStyle}>
        <Content
          contentContainerStyle={{
            flex: 1
          }}
        >
          <Form style={styles.formStyle}>
            <Item inlineLabel style={{ margin: 10 }}>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item inlineLabel last style={{ margin: 10 }}>
              <Label>Password</Label>
              <Input />
            </Item>
            <Container style={styles.buttonStyle}>
              <Button
                bordered
                onPress={() => {
                  navigation.navigate('SignUp1');
                }}
                light
              >
                <Text>Sign Up</Text>
              </Button>

              <Button
                bordered
                onPress={() => {
                  navigation.navigate('home');
                }}
                light
              >
                <Text>Sign In</Text>
              </Button>
            </Container>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default SignInPage;
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#f5a742'
  },

  formStyle: {
    marginTop: 270
  },
  buttonStyle: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around'
  }
});
