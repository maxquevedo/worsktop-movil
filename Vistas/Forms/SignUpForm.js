import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import styles from '../styles';

const fieldCrearCuenta = (props) => {
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
            keyboardType={props.input.name === 'RutEmpresa'? 'numeric':props.input.name==='correo'? 'email-address':'default'} 
            onBlur = {props.input.onBlur}
            />
            {props.meta.touched && props.meta.error && <Text>{props.meta.error}</Text> }
         </View>
    );
};


const validate = (values) =>{
    const errors = {};

    //RutEmpresa
    if(!values.RutEmpresa){
        errors.RutEmpresa = 'requerido';
    }else if(!/^[0-9]+\.[0-9]{3}\.[0-9]{3}\-[0-9]$/i.test(values.RutEmpresa)){
        errors.RutEmpresa = 'formato incorrecto';  
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
    
    //nombre Empresa
    if(!values.nombreEmpresa){
        errors.nombreEmpresa = 'requerido';
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

const SignUpForm = (props) => {
    return(
        <View>
            <Field style={styles.input} name="RutEmpresa" component={fieldCrearCuenta} ph="12.345.678-9" nm="Rut Empresa"/>
            <Field style={styles.input} name="nombreEmpresa" component={fieldCrearCuenta} ph="Maxvarell" nm="Nombre Empresa"/>
            <Field style={styles.input} name="correo" component={fieldCrearCuenta} ph="correo@correo.com" nm="Correo"/>
            <Field style={styles.input} name="usuario" component={fieldCrearCuenta} ph="usuario" nm="Usuario"/>
            <Field style={styles.input} name="contraseña" component={fieldCrearCuenta} ph="*******" nm="Contraseña"/>
            <Button style={{justifyContent:'center'}} title="Crear Cuenta" color="#DB0600" onPress={props.handleSubmit(async(values)=>{
                values.nivel_permiso = 'cliente';
                props.registro(values);
            })} />
        </View>
    )
}

export default reduxForm({
    form: 'SignUpForm',
    validate,
})(SignUpForm);
