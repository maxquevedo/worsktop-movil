import React, { Component } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import styles from '../styles';

const fieldCrearHuesped = (props) => {
    return(
        <View style={styles.field}>
            <Text style={styles.text}>{props.nm}</Text>
                <TextInput placeholder={props.ph}
                style={styles.input}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType={props.input.name === 'rutHuesped'? 'numeric':'default'} 
                onBlur = {props.input.onBlur}
                />
         </View>
    );
};


const validate = (values) =>{
    const errors = {};

    //rutHuesped
    if(!values.rutHuesped){
        errors.rutHuesped = 'requerido';
    }else if(!/^[0-9]+\.[0-9]{3}\.[0-9]{3}\-[0-9]$/i.test(values.rutHuesped)){
        errors.rutHuesped = 'formato incorrecto';  
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

    return errors;
}

const AgregarHuespedForm = (props) => {
    //console.log(props);
    return(
        <View>
            <Field style={styles.input} name="rutHuesped" component={fieldCrearHuesped} ph="12.345.678-9" nm="Rut Huesped"/>
            <Field style={styles.input} name="nombre" component={fieldCrearHuesped} ph="Juan Perez" nm="Nombre Huesped"/>
            <Button style={{justifyContent:'center'}} title="Crear Huesped" color="#DB0600" onPress={props.handleSubmit((values)=>{
                values.nombre_empresa = props.empresa;
                values.id_habitacion = props.habitacion;
                values.id_compra = "(?)" ;               

                console.log(values);
            })} />
        </View>
    )
}

export default reduxForm({
    form: 'AgregarHuespedForm',
    validate,
})(AgregarHuespedForm);
