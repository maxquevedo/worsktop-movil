//import liraries
import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from '../styles';
import AgregarEmpleadoForm from '../Forms/AgregarEmpleadoForm';

// create a component
class AgregarEmpleado extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <AgregarEmpleadoForm/>               
            </View>
        );
    }
}

//make this component available to the app
export default AgregarEmpleado;
