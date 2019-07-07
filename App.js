import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Selector from './Vistas/Selector';
import StackAdmin from './Vistas/Admin/StackAdmin';

export default class App extends React.Component {
  render() {
    /*  <Provider store={Store}>
          <Selector/>
        </Provider>
    */
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <Selector/>
        </Provider>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
