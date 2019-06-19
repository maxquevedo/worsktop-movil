//import liraries
import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styles from '../styles';

// create a component
class Cliente extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex:1,backgroundColor:'#fff',justifyContent:'space-evenly',width:375,paddingLeft:50}}>  
                <Button color="#DB0600" style={styles.button} title="Agregar Compra" onPress={ () => { navigation.navigate('AgregarCompra')} }/>
                <Button color="#DB0600" style={styles.button} title="Ver Factura" onPress={ () => { navigation.navigate('VerFactura') } }/>       
            </View>
        );
    }
}

//make this component available to the app
export default Cliente;
