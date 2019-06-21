//import liraries
import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import styles from './styles';
import StackAdmin from './Admin/StackAdmin';
import StackCliente from './Cliente/StackCliente';
import StackEmpleado from './Empleado/StackEmpleado';
import ProveedorView from './Proveedor/ProveedorView';
import NoAuth from './NoAuth/NoAuth';

// create a component
class Selector extends Component {
    constructor(props){
        super(props);
        this.state={
            tipoUsuario: 'Admin',
            autenticado: false,
        }
    }

    render() {
        const { tipoUsuario, autenticado } = this.state; 
        return (
            <View>
                <NoAuth/>
            </View>
        );
    }
}



//make this component available to the app
export default Selector;
