/*
  The main compoent App.js
*/

'use strict';

// React
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
// Redux
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// Local
import { actionCreators } from '../redux/todoRedux';
import Title from '../components/Title';
import Footer from '../components/Footer';
import Input from '../components/Input';

// Constants
const {height, width} = Dimensions.get('window');

const mapStateToProps = (state) => ({
  items: state.items,
});

// Component
class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Title/>
        <Input
          placeholder="Add to list..."
          onSubmitEditing={this.onAddTodo}
        />
        <View style={styles.separator} />
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
});

export default connect(mapStateToProps)(App);
