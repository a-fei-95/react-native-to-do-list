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
// Redux
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// Local
import { actionCreators } from '../redux/todoRedux';
import Title from '../components/Title';
import Footer from '../components/Footer';
import Input from '../components/Input';
import List from '../components/List';

// Constants
const {height, width} = Dimensions.get('window');

const mapStateToProps = (state) => ({
  items: state.items,
});

// Component
class App extends Component {

  onAddTodo = (text) => {
    const { dispatch } = this.props

    dispatch( actionCreators.addItem(text) )
  }

  onRemoveTodo = (index) => {
    const { dispatch } = this.props

    dispatch( actionCreators.removeItem(index) )
  }

  render() {
    return (
      <View style={styles.container}>
        <Title />
        <Input
          placeholder="Add to list..."
          onSubmitEditing={this.onAddTodo}
        />
        <View style={styles.separator} />
        <list />
        <View style={styles.separator} />
        <Footer />
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
