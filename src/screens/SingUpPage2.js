import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Content,
  CheckBox,
  Button,
  Text,
  Thumbnail
} from 'native-base';

export default class SignUpPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: true
    };
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }
  handleCheckBox() {
    this.setState({
      isCheck: !this.state.isCheck
    });
  }

  render() {
    return (
      <Container>
        <Content
          contentContainerStyle={{
            flex: 1
          }}
        >
          <Form style={{ marginTop: 70 }}>
            <Item inlineLabel style={{ margin: 10 }}>
              <Label style={{ fontSize: 15 }}>Your Photo</Label>
              <Thumbnail
                large
                style={{ marginLeft: 5 }}
                source={require('../../assets/camera.png')}
              />
            </Item>
            <Item stackedLabel style={{ margin: 10 }}>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item stackedLabel style={{ margin: 10 }}>
              <Label>Last Name</Label>
              <Input />
            </Item>

            <Item stackedLabel style={{ margin: 10 }}>
              <Label>Gender?</Label>
              <View style={styles.viewStyle}>
                <CheckBox
                  checked={this.state.isCheck}
                  color="#f5a742"
                  onPress={this.handleCheckBox}
                />
                <Text style={{ paddingLeft: 15, color: '#555' }}>Male</Text>

                <CheckBox
                  color="#f5a742"
                  checked={!this.state.isCheck}
                  onPress={this.handleCheckBox}
                />
                <Text style={{ paddingLeft: 15, color: '#555' }}>Female</Text>
              </View>
            </Item>
            <View style={{ marginTop: 40, marginLeft: 10, marginRight: 10 }}>
              <Button
                block
                rounded
                bordered
                warning
                onPress={() => this.props.navigation.navigate('SignUp3')}
              >
                <Text>Next</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 18,
    flexDirection: 'row',
    left: -105
  }
});
