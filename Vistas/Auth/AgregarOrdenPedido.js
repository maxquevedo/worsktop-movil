//import liraries
import React, { Component } from 'react';
import { View, } from 'react-native';
import AgregarOrdenPedidoForm from '../Forms/AgregarOrdenPedidoForm';
import styles from '../styles';
import leerProductos from '../../Store/Servicios/Api';

// create a component
class AgregarOrdenPedido extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:true,
            fecha:'',
            productos:[],

        }
    }

    componentDidMount(){
        //this.setState({productos:leerProductos});
        console.log(productos);
    }


    render() {
        return (
            <View style={styles.container}>
               <AgregarOrdenPedidoForm/> 
            </View>
        );
    }
}


//make this component available to the app
export default AgregarOrdenPedido;
