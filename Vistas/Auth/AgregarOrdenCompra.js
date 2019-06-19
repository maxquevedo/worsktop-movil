//import liraries
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AgregarOrdenCompraForm from '../Forms/AgregarOrdenCompraForm';
import { connect } from 'react-redux';
import styles from '../styles';

// create a component
class AgregarOrdenCompra extends Component {
    constructor(props){
        super(props);
        this.state ={
            loading:false,
            tipoMenu:'',
            envidao:'',
            fecha:'123',
        }
    }
    render() {
        return (
            <ScrollView contentContainerStyle={{alignItems:'center',}}>
                <AgregarOrdenCompraForm agregar={this.props.enviar} llegada={this.state.fecha}/>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        fecha: '',
    }
}

const mapDispatchToProps = dispatch => {
    return {
        enviar: (values) => {
            dispatch({type:'AGREGAR_ORDENCOMPRA',values})
        }
    }
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(AgregarOrdenCompra);
