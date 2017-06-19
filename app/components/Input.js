/*
  The input compoent Input.js
*/

'use strict';

// React
import React, { Component } from 'react';
import {
  TextInput,
  View,
  StyleSheet
} from 'react-native';

// Component
class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  onChangeText = (text) => {
    this.setState({text});
    console.log("DEBUG: text changed to " + text);
  }

  onSubmitEditing = () => {
    const {onSubmitEditing} = this.props;
    const {text} = this.state;

    if (!text) return;

    onSubmitEditing(text);
    console.log("DEBUG: submit called.");
    this.setState({text: ''});
  }

  render() {
    const {placeholder} = this.props;
    const {text} = this.state;

    return (
      <TextInput
        style={styles.container}
        onChangeText={this.onChangeText}
        placeholder={placeholder}
        value={text}
        onSubmitEditing={this.onSubmitEditing}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
});

export default Input;
