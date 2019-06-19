import React, { Component } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import styles from '../styles';
import moment from 'moment';
import leerProductos from '../../Store/Servicios/Api';

const fieldDatosOrdenCompra = (props) => {
    //console.log(props);
    return(
        <View style={styles.field}>
            <Text style={styles.text}>{props.nm}</Text>
            <TextInput placeholder={props.ph}
            style={styles.input}
            onChangeText={props.input.onChange}
            value={props.input.value}
            autoCapitalize= 'none'
            keyboardType = {(props.input.name==='rutEmpleado' || props.input.name==='cantidad')? 'numeric':'default'}
            onBlur= {props.input.onBlur}
            />
            {props.meta.touched && props.meta.error && <Text>{props.meta.error}</Text> }
         </View>
    );
};

const validate = (values) =>{
    const errors = {};

    //rutEmpleado
    if(!values.rutEmpleado){
        errors.rutEmpleado = 'requerido';
    }else if(!/^[0-9]+\.[0-9]{3}\.[0-9]{3}\-[0-9]$/i.test(values.rutEmpleado)){
        errors.rutEmpleado = 'formato incorrecto';  
    }

    //Proveedor
    if(!values.proveedor){
        errors.proveedor = 'requerido';
    }

    //Producto
    if(!values.producto){
        errors.producto = 'requerido';
    }

    //cantidad
    if(!values.cantidad){
        errors.cantidad = 'requerido';
    }

    //Fecha
    if(!values.fecha){
        errors.fecha = 'requerido';
        //(3[01]|[2][0-9]|0\d)\/(1[0-2]|0\[1-9])\/\d{4}/
        //!/^[0-3][0-9]\/[0-3][0-9]\/20[1-9][0-9]
    }else if(!/^(3[0-1]|[0-2][0-9]|[1-9])\/(1[0-2]|0[1-9])\/20[1-9][0-9]$/i.test(values.fecha)){
        errors.fecha = 'formato incorrecto';
    }


    return errors;
}

const AgregarOrdenCompraForm = (props) => {
    //console.log(props);
    return(
        <View>
            <Field style={styles.input} name="rutEmpleado" component={fieldDatosOrdenCompra} ph="12.345.678-9" nm="Rut Empleado"/>            
            <Field style={styles.input} name="proveedor" component={fieldDatosOrdenCompra} ph="Super Pollo" nm="Proveedor"/>
            <Field style={styles.input} name="producto" component={fieldDatosOrdenCompra} ph="Papas" nm="Producto"/>
            <Field style={styles.input} name="cantidad" component={fieldDatosOrdenCompra} ph="100" nm="Cantidad"/>
            <Field style={styles.input} name="fecha" component={fieldDatosOrdenCompra} ph={moment().format('DD/MM/YYYY')} nm="Fecha de Despacho"/>
            <Button style={{justifyContent:'center'}} title="Crear Pedido" color="#DB0600" onPress={props.handleSubmit((values)=>{
                console.log(values);
            })} />
        </View>
    )
}

export default reduxForm({
    form: 'AgregarOrdenCompraForm',
    validate,
})(AgregarOrdenCompraForm);
