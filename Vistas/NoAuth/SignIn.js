//import liraries
import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';
import SignInForm from '../Forms/SignInForm';
import { actionLogin } from '../../Store/Acciones';

// create a component
class SignIn extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.contenedor}>
                <SignInForm />
                <View style={{justifyContent:'flex-end', marginTop:80}}>
                    <Text style={styles.text}>¡Registrate acá!</Text>
                </View>
                <View style={{justifyContent:'flex-end',marginTop:20}}>
                    <Button style={styles.button} title="Crear Cuenta" color="#DB0600"onPress={()=>{navigation.navigate('SignUp');}}/>
                </View>
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

const mapDispatchToProps = (dispatch) => ({
        login: (datos) => {
            dispatch(actionLogin(datos));
        },
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);