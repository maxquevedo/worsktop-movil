//import liraries
import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import styles from './styles';
import StackAdmin from './Admin/StackAdmin';
import StackCliente from './Cliente/StackCliente';
import StackEmpleado from './Empleado/StackEmpleado';
import ProveedorView from './Proveedor/ProveedorView';

// create a component
class Selector extends Component {
    constructor(props){
        super(props);
        this.state={
            tipoUsuario = 'Admin'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.tipoUsuario==='Admin'? <StackAdmin/>:
                    this.props.tipoUsuario==='Cliente'? <StackCliente/>:
                        this.props.tipoUsuario==='Empleado'? <StackEmpleado/>:
                            <ProveedorView/>}
            </View>
        );
    }
}



//make this component available to the app
export default Selector;
