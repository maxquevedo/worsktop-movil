//import liraries
import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, ActivityIndicator, Text ,AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';

// create a component
class ProveedorView extends Component {
    constructor(props){
        super(props);
        this.state={
            loading: true,
            rutProveedor:null,
            pedidos:[],
        }
    }

    verRut = async()=>{
        let rut = await AsyncStorage.getItem("rut_proveedor");
        return rut;
        
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
                <ActivityIndicator style={{justifyContent:'flex-end'}} size='large' color="#B80500"/>        
            </View>
        );
    }
}

//Pasa el estado a props
const mapStateToProps = (state) => {
    return {
        numero: state.reducerPrueba
    }
}

const mapDispatchToProps = (dispatch,ownProps) => ({
        aumentar: () => {
            dispatch({ type: 'AUMENTAR_REDUCER_PRUEBA'})
        },
});
export default connect(mapStateToProps, mapDispatchToProps)(ProveedorView);