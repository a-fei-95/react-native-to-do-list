/*
  The footer compoent Footer.js
*/

'use strict';

// React
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

// Constants
const {height, width} = Dimensions.get('window');

// Component
class Footer extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.title}>Remove Completed Items</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FF5722',
    fontSize: 18,
  },
});

export default Footer;
