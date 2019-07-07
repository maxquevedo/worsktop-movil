import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator, AsyncStorage } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import styles from '../styles';

const fieldLogin = (props) => {
    //console.log(props);
    return(
        <View style={styles.field}>
            <Text style={styles.text}>{props.nm}</Text>
            <TextInput placeholder={props.ph}
            style={styles.input}
            onChangeText={props.input.onChange}
            value={props.input.value}
            autoCapitalize= 'none'
            secureTextEntry={!!(props.input.name === 'contraseña')}
            onBlur= {props.input.onBlur}
            />
            {props.meta.touched && props.meta.error && <Text>{props.meta.error}</Text> }
         </View>
    );
};


const validate = (values) =>{
    const errors = {};

    //usuario
    if(!values.usuario){
        errors.usuario = 'requerido';
    }else if(values.usuario.length < 4){
        errors.usuario = 'deben ser al menos 4 caracteres';
    }

    //password
    if(!values.contraseña){
        errors.contraseña = 'requerido';
    }else if(values.contraseña.length < 5){
        errors.contraseña = 'No puede ser menor a 5 caracteres';
    }

    return errors;
}

loggin = async (values) =>{
    let url = `http://10.0.2.2:80/api/public/api/${values.tipoUsuario}/login/${values.usuario}/${values.contraseña}`;
    const resp = await fetch(url);
    const respJson = JSON.stringify(resp.status);
    const respJSON = await resp.json();
    const status = parseInt(respJSON.code);
    if(status===200){
        switch (values.tipoUsuario) {
            case 'administrador':
                let admin = respJSON.admin[0];
                AsyncStorage.setItem('id_admin',admin.id.toString());
                break;
            case 'empleado':
                let empleado = respJSON.empleado[0];
                AsyncStorage.setItem('id_empleado',empleado.id.toString());
                break;
            case 'cliente':
                let cliente = respJSON.cliente[0];
                AsyncStorage.multiSet([
                    ["id_cliente", cliente.id.toString()],
                    ["rut_empresa", cliente.rut_empresa]
                ]);
                break;
            case 'proveedor':
                let proveedor = respJSON.proveedor[0];
                AsyncStorage.setItem("rut_proveedor",proveedor.rut_proveedor);
                break;
            default:
                break;
    }
    return true;
    }else{
        const error = await JSON.stringify(resp.error);
        Alert.alert(
            '',
            'Usuario y/o contraseña incorrectos, intente de nuevo. ¿ Seguro que eres '+values.tipoUsuario+' ?',
            [
              {text: 'OK', onPress: () =>{}}
            ],
            {cancelable: false},
          );
          return false;
    }

}


const SignInForm = (props) => {
    const { navigation } = props;
    return(
        <View>
            <Field style={styles.input} name="usuario" component={fieldLogin} ph="usuario" nm="Usuario"/>
            <Field style={styles.input} name="contraseña" component={fieldLogin} ph="*******" nm="Contraseña"/>
            <Button style={{justifyContent:'center'}} title="Entrar" color="#DB0600" onPress={props.handleSubmit(async(values)=>{
                props.setLoading();
                values.tipoUsuario = props.tipoUsuario;
                let reddir = await this.loggin(values);
                if (reddir){
                    switch (values.tipoUsuario) {
                        case 'administrador':
                            navigation.navigate('Administrador');
                            break;
                        case 'empleado':
                            navigation.navigate('Empleado');
                            break;
                        case 'proveedor':
                            navigation.navigate('Proveedor');
                            break;
                        case 'cliente':
                            navigation.navigate('Cliente');
                            break;
                        default:
                            break;
                    }
                }else{
                    props.setLoading();
                }
            })} />
        </View>
    )
}


export default reduxForm({
    form: 'SignInForm',
    validate,
})(SignInForm);
