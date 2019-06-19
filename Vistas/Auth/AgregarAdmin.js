//import liraries
import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styles from '../styles';

// create a component
class AgregarAdmin extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex:1,backgroundColor:'#fff',justifyContent:'space-evenly',width:375,paddingLeft:50}}>  
                <Button color="#DB0600"style={styles.button} title="Empleado" onPress={ () => { navigation.navigate('AgregarEmpleado')} }/>      
                <Button color="#DB0600"style={styles.button} title="Huésped" onPress={ () => { navigation.navigate('AgregarHuesped') } }/>        
                <Button color="#DB0600"style={styles.button} title="Menú" onPress={ () => { navigation.navigate('AgregarMenu')} }/>      
                <Button color="#DB0600"style={styles.button} title="Orden de Compra" onPress={ () => {navigation.navigate('AgregarOrdenCompra') } }/>
                <Button color="#DB0600"style={styles.button} title="Orden de Pedido" onPress={ () => { navigation.navigate('AgregarOrdenPedido')} }/>              
                <Button color="#DB0600"style={styles.button} title="Proveedor" onPress={ () => { navigation.navigate('AgregarProveedor') } }/>
            </View>
        );
    }
}

//make this component available to the app
export default AgregarAdmin;
