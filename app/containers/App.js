/*
The main compoent App.js
*/

'use strict';

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { actionCreators } from '../redux/todoRedux';

import Title from '../components/Title';
import Footer from '../components/Footer';


const {height, width} = Dimensions.get('window');

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Title/>
        <View style={styles.todoList}>
          <Text>Hello, World!</Text>
        </View>
        <View style={styles.separator} />
        <Footer/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoList: {
    flex: 1,
  },
  separator: {
    height: 0.5,
    width: width,
    backgroundColor: '#E0E0E0',
  }
})

export default connect(mapStateToProps)(App);
