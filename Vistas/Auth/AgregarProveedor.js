//import liraries
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import AgregarProveedorForm from '../Forms/AgregarProveedorForm';
import styles from '../styles';
// create a component

class AgregarProveedor extends Component {
    render() {
        return (
            <View style={styles.container}>
               <AgregarProveedorForm/>
            </View>
        );
    }
}

//make this component available to the app
export default AgregarProveedor;
