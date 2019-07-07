//import liraries
import React, { Component } from 'react';
import { View, ScrollView,KeyboardAvoidingView } from 'react-native';
import AgregarProveedorForm from '../Forms/AgregarProveedorForm';
import styles from '../styles';
import { connect } from 'react-redux';

// create a component
class AgregarProveedor extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding">
                <ScrollView contentContainerStyle={styles.scroll}>
                    <AgregarProveedorForm registro={this.props.registrar}/>
                </ScrollView>
            </KeyboardAvoidingView>
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
export default connect(mapStateToProps, mapDispatchToProps)(AgregarProveedor);
