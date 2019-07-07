//import liraries
import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView} from 'react-native';
import AgregarOrdenPedidoForm from '../Forms/AgregarOrdenPedidoForm';
import styles from '../styles';

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
        //console.log(productos);
    }


    render() {
        return (
            <KeyboardAvoidingView behavior="padding">
                <ScrollView contentContainerStyle={styles.scroll}>
                    <AgregarOrdenPedidoForm/> 
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}


//make this component available to the app
export default AgregarOrdenPedido;
