import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import styles from '../styles';

const fieldAgregarProveedor = (props) => {
    //console.log(props);
    return(
        <View style={styles.field}>
            <Text style={styles.centerText}>{props.nm}</Text>
            <TextInput placeholder={props.ph}
            style={styles.input}
            textAlign={'center'}
            onChangeText={props.input.onChange}
            value={props.input.value}
            autoCapitalize= 'none'
            secureTextEntry={!!(props.input.name === 'contraseña')}
            keyboardType={(props.input.name === 'rutProveedor')||(props.input.name === 'telefono')? 'numeric':props.input.name==='correo'? 'email-address':'default'} 
            onBlur = {props.input.onBlur}
            />
            {props.meta.touched && props.meta.error && <Text>{props.meta.error}</Text> }
         </View>
    );
};


const validate = (values) =>{
    const errors = {};

    //rutProveedor
    if(!values.rutProveedor){
        errors.rutProveedor = 'requerido';
    }else if(!/^[0-9]+\.[0-9]{3}\.[0-9]{3}\-[0-9]$/i.test(values.rutProveedor)){
        errors.rutProveedor = 'formato incorrecto';  
    }

    //telefono
    if(!values.telefono){
        errors.telefono = 'requerido'
    }
    
    //usuario
    if(!values.usuario){
        errors.usuario = 'requerido';
    }else if(values.usuario.length < 5){
        errors.usuario = 'deben ser al menos 5 caracteres';
    }else if(values.usuario.length > 10){
        errors.usuario= 'debe ser menor de 10 caracteres';
    }

    //correo
    if(!values.correo){
        errors.correo = 'requerido';
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)){
        errors.correo = 'correo invalido';
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

const AgregarProveedorForm = (props) => {
    //console.log(props);
    return(
        <View>
            <Field style={styles.input} name="rutProveedor" component={fieldAgregarProveedor} ph="12.345.678-9" nm="Rut Proveedor"/>
            <Field style={styles.input} name="telefono" component={fieldAgregarProveedor} ph="123456789" nm="Teléfono"/>
            <Field style={styles.input} name="correo" component={fieldAgregarProveedor} ph="usuario" nm="Correo"/>
            <Field style={styles.input} name="usuario" component={fieldAgregarProveedor} ph="usuario" nm="Usuario"/>
            <Field style={styles.input} name="contraseña" component={fieldAgregarProveedor} ph="*******" nm="Contraseña"/>
            <Button style={styles.button} title="Crear Proveedor" color="#DB0600" onPress={props.handleSubmit((values)=>{
                      console.log(values)
            })} />
        </View>
    )
}

export default reduxForm({
    form: 'AgregarProveedorForm',
    validate,
})(AgregarProveedorForm);
