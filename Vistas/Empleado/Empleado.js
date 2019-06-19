//import liraries
import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styles from '../styles';

// create a component
class Empleado extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex:1,backgroundColor:'#fff',justifyContent:'space-evenly',width:375,paddingLeft:50}}>  
                <Button color="#DB0600" style={styles.button} title="Agregar Orden de Pedido" onPress={ () => { navigation.navigate('AgregarOrdenPedido')} }/>      
                <Button color="#DB0600" title="Ver Recepcion de Producto" onPress={()=>{navigation.navigate('VerRecepcionProducto')}}/>
            </View>
        );
    }
}

//make this component available to the app
export default Empleado;
