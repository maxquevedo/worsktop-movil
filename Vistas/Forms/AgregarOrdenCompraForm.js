import React, { Component } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import styles from '../styles';
import moment from 'moment';

const fieldDatosOrdenCompra = (props) => {
    //console.log(props);   
    return(
        <View>
            <View style={styles.field}>
                <Text style={styles.text}>{props.nm}</Text>
                <TextInput placeholder={props.ph}
                style={styles.input}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType= {(props.input.name === 'rutHuesped' || props.input.name==='rutEmpresa' || props.input.name==='duracionEstadia')?
                    'numeric':'default'}
                onBlur= {props.input.onBlur}
                />
            </View>
            {props.meta.touched && props.meta.error && <Text>{props.meta.error}</Text> }
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

    //rutEmpresa
       if(!values.rutEmpresa){
        errors.rutEmpresa = 'requerido';
    }else if(!/^[0-9]+\.[0-9]{3}\.[0-9]{3}\-[0-9]$/i.test(values.rutEmpresa)){
        errors.rutEmpresa = 'formato incorrecto';  
    }

    //fechaLlegada
        if(!values.fechaLlegada){
            errors.fechaLlegada = 'requerido';
            //(3[01]|[2][0-9]|0\d)\/(1[0-2]|0\[1-9])\/\d{4}/
            //!/^[0-3][0-9]\/[0-3][0-9]\/20[1-9][0-9]
        }else if(!/^(3[0-1]|[0-2][0-9]|[1-9])\/(1[0-2]|0[1-9])\/20[1-9][0-9]$/i.test(values.fechaLlegada)){
            errors.fechaLlegada = 'formato incorrecto';
        }

    // nombre
    if(!values.nombreCompleto){
        errors.nombreCompleto = 'requerido';
    }else{
        let nombreApellido = values.nombreCompleto;
        let ArrnombreApellido = nombreApellido.split(' ');
        let largo = ArrnombreApellido.length;
        if(largo < 2 ){
            errors.nombreCompleto = 'Ingresar Nombre y Apellido';
        }
    }

    return errors;
}


const AgregarOrdenCompraForm = (props) => {
    return(
        <View>
            <Field style={styles.input} name="rutHuesped" component={fieldDatosOrdenCompra} ph="12.345.678-9" nm="Rut Huésped"/>
            <Field style={styles.input} name="nombreCompleto" component={fieldDatosOrdenCompra} ph="Juanito Perez" nm="Nombre y Apellido"/>
            <Field style={styles.input} name="fechaLlegada" component={fieldDatosOrdenCompra} ph={moment().format('DD/MM/YYYY')} nm="Fecha de Llegada"/>
            <Field style={styles.input} name="duracionEstadia" component={fieldDatosOrdenCompra} ph="1" nm="Días de Estadía"/>
            <Field style={styles.input} name="rutEmpresa" component={fieldDatosOrdenCompra} ph="12.345.678-9" nm="Rut Empresa"/>
            <Field style={styles.input} name="tipoMenu" component={fieldDatosOrdenCompra} ph="Ejecutivo" nm="Tipo de Menú"/>
            <Button style={{justifyContent:'center'}} title="Comprar" color="#DB0600" onPress={props.handleSubmit((values)=>{
                props.agregar(values)
            })} />
        </View>
    )
}

export default reduxForm({
    form: 'AgregarOrdenCompraForm',
    validate,
})(AgregarOrdenCompraForm);
