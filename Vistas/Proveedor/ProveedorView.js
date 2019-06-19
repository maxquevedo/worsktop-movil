//import liraries
import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, ActivityIndicator, Text  } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';
import BuscaRutForm from '../Forms/BuscaRutForm';

// create a component
class ProveedorView extends Component {
    render() {
        /*
         Para cargar los pedidos, NECESITA CONEXION BD
         
        <FlatList  data={this.props.numero}
                    renderItem={() =>{
                        <View style={styles.upperFieldBar}>
                            <Text>Orden 1</Text>
                            <TouchableOpacity styles={styles.icon} onPress={()=>{}}>
                                <Ionicons name="md-trash" color="black" size={24}/>
                            </TouchableOpacity>
                        </View>
                        }
                    }
                />
        */
        const { navigation } = this.props;
        return (
            <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
                <BuscaRutForm />
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