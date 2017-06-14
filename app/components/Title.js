/*
The title compoent Title.js
*/

'use strict';

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'


const {height, width} = Dimensions.get('window');

class Title extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#039BE5',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
})

export default Title;
