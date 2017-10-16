/**
 * @flow
 */

"use strict";

// React
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// resources
import colors from '../resource/colors';

// Component
class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style } = this.props;

    return (
      <View style={style}>
        <View style={styles.separater} />
        <View style={styles.content}>
          <Text style={styles.text}>Remove completed items</Text>
        </View>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  content: {
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.RED.DEFAULT,
  },
  separater: {
    height: 1,
    backgroundColor: colors.GREY.LIGHT,
  },
});

export default Footer;
