import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Selector from './Vistas/Selector';

export default class App extends React.Component {

  state = {
    autenticado:false,
    nivel_permiso:'',
    loading:false,
    id_usuario:'',

  }
  
  render() {
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
