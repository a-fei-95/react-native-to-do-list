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
class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style } = this.props;

    return (
      <View style={style}>
        <View style={styles.container}>

        </View>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
  },
});

export default List;
