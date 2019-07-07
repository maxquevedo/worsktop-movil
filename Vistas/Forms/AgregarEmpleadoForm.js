import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import styles from '../styles';

const fieldCrearEmpleado = (props) => {
    //console.log(props);
    return(
        <View style={styles.field}>
            <Text style={styles.centerText}>{props.nm}</Text>
            <TextInput placeholder={props.ph}
            style={styles.input}
            textAlign={'center'}
            onChangeText={props.input.onChange}
            value={props.input.value}
            autoCapitalize= {props.input.name === 'usuario'? 'none':'words'}
            secureTextEntry={!!(props.input.name === 'contraseña')}
            keyboardType={props.input.name === 'rutEmpleado'? 'numeric':'default'} 
            onBlur = {props.input.onBlur}
            />
            {props.meta.touched && props.meta.error && <Text>{props.meta.error}</Text> }
         </View>
    );
};


const validate = (values) =>{
    const errors = {};

    //RutEmpleado
    if(!values.rutEmpleado){
        errors.rutEmpleado = 'requerido';
    }else if(!/^[0-9]+\.[0-9]{3}\.[0-9]{3}\-[0-9]$/i.test(values.rutEmpleado)){
        errors.rutEmpleado = 'formato incorrecto';  
    }


    //usuario
    if(!values.usuario){
        errors.usuario = 'requerido';
    }else if(values.usuario.length < 5){
        errors.usuario = 'deben ser al menos 5 caracteres';
    }

    // nombre
    if(!values.nombre){
        errors.nombre = 'requerido';
    }else{
        let nombreApellido = values.nombre;
        let ArrnombreApellido = nombreApellido.split(' ');
        let largo = ArrnombreApellido.length;
        if(largo < 2 ){
            errors.nombre = 'Ingresar Nombre y Apellido';
        }
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

const AgregarEmpleadoForm = (props) => {
    //console.log(props);
    return(
        <View>
            <Field style={styles.input} name="rutEmpleado" component={fieldCrearEmpleado} ph="12.345.678-9" nm="Rut Empleado"/>
            <Field style={styles.input} name="nombre" component={fieldCrearEmpleado} ph="Juanito Perez" nm="Nombre Empleado"/>
            <Field style={styles.input} name="usuario" component={fieldCrearEmpleado} ph="usuario" nm="Usuario"/>
            <Field style={styles.input} name="contraseña" component={fieldCrearEmpleado} ph="*******" nm="Contraseña"/>
            <Button style={{justifyContent:'center'}} title="Crear Empleado" color="#DB0600" onPress={props.handleSubmit((values)=>{
                values.nivel_permiso = 'empleado';
                props.registro(values);
            })} />
        </View>
    )
}

export default reduxForm({
    form: 'AgregarEmpleadoForm',
    validate,
})(AgregarEmpleadoForm);
