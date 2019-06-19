import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
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
    }else if(values.usuario.length < 5){
        errors.usuario = 'deben ser al menos 5 caracteres';
    }else if(values.usuario.length > 10){
        errors.usuario= 'debe ser menor de 10 caracteres';
    }

    //password
    if(!values.contraseña){
        errors.contraseña = 'requerido';
    }else if(values.contraseña.length < 5){
        errors.contraseña = 'No puede ser menor a 5 caracteres';
    }else if(values.contraseña.length > 15){
        errors.contraseña = 'No puede ser mayor a 15 caracteres';
    }

    return errors;
}

const SignInForm = (props) => {
    //console.log(props);
    return(
        <View>
            <Field style={styles.input} name="usuario" component={fieldLogin} ph="usuario" nm="Usuario"/>
            <Field style={styles.input} name="contraseña" component={fieldLogin} ph="*******" nm="Contraseña"/>
            <Button style={{justifyContent:'center'}} title="Entrar" color="#DB0600" onPress={props.handleSubmit((values)=>{
                console.log(values);
            })} />
        </View>
    )
}

export default reduxForm({
    form: 'SignInForm',
    validate,
})(SignInForm);
