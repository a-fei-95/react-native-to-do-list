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
class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style } = this.props;

    return (
      <View style={style}>
        <View style={styles.container}>
          <Text style={styles.text}>To-do List</Text>
        </View>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.BLUE.DEFAULT,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.LIGHT,
  },
});

export default Header;
