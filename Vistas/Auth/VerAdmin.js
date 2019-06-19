//import liraries
import React, { Component } from 'react';
import { View, Button, } from 'react-native';
import styles from '../styles';

// create a component
class VerAdmin extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex:1,backgroundColor:'#fff',justifyContent:'space-evenly',width:375,paddingLeft:50}}>  
                <Button color="#DB0600" style={styles.button} title="Habitaciones" onPress={ () => { navigation.navigate('VerHabitacion') } }/>                     
                <Button color="#DB0600" style={styles.button} title="Orden de Compra" onPress={ () => { navigation.navigate('VerOrdenCompra') } }/>                     
                <Button color="#DB0600" style={styles.button} title="Comedor" onPress={ () => { navigation.navigate('VerComedor') } }/>                     
                <Button color="#DB0600" style={styles.button} title="Recepción de Producto" onPress={ () => { navigation.navigate('VerRecepcionProducto') } }/>                     
                <Button color="#DB0600" style={styles.button} title="Poveedor" onPress={ () => { navigation.navigate('VerProveedor')} }/>
                <Button color="#DB0600" style={styles.button} title="Factura" onPress={ () => { navigation.navigate('VerFactura')} }/>
            </View>
        );
    }
}

//make this component available to the app
export default VerAdmin;
