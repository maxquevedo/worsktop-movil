//import liraries
import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';
import AgregarEmpleadoForm from '../Forms/AgregarEmpleadoForm';

// create a component
class AgregarEmpleado extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <AgregarEmpleadoForm registro={this.props.registrar}/>               
            </View>
        );
    }
}

//Pasa el estado a props
const mapStateToProps = state => {
    return {
        autentica2: state
    }
}

const mapDispatchToProps = dispatch => ({
        registrar: (values) => {
            dispatch({ type: 'REGISTRAR',values})
        },
});
export default connect(mapStateToProps, mapDispatchToProps)(AgregarEmpleado);
//make this component available to the app
//export default AgregarEmpleado;
