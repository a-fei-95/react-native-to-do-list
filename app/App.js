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
// Local
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Input from './components/Input.js';
import List from './components/List.js';

// Component
class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <Footer style={styles.footer} />
        <Input />
        <List />
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});

export default App;
