import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import NoAuth from './Vistas/NoAuth/NoAuth';
import StackCliente from './Vistas/Cliente/StackCliente';
import StackAdmin from './Vistas/Admin/StackAdmin';
import StackEmpleado from './Vistas/Empleado/StackEmpleado';
import ProveedorView from './Vistas/Proveedor/ProveedorView';

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
          <NoAuth/>
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
