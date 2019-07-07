import React, { Component } from 'react';
import { View, Text, TextInput, Button, AsyncStorage, Alert } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import styles from '../styles';

const field = (props)=>{
    return (
        <View style={styles.field}>
        <Text style={styles.text}>{props.nm}</Text>
        <TextInput placeholder={props.ph}
        style={styles.input}
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType='number-pad'
        onBlur= {props.input.onBlur}
        />
        {props.meta.touched && props.meta.error && <Text>{props.meta.error}</Text> }
     </View>
    );
}

const validate = (values) =>{
    const errors = {};

    //Tipo Servicio
    if(!values.tipoServicio){
        errors.tipoServicio = 'requerido';
    }

    //Precio
    if(!values.precio){
        errors.precio = 'requerido';
    }
    return errors;
}

getId = ()=>{
    let id =  AsyncStorage.getItem("id_admin");
    return id;
}

createMenu = async (values)=>{
    let json1 = JSON.stringify({
        tipo_servicio: values.tipoServicio,
        precio:values.precio,
        id_admin:values.id_admin
    });
    let resp = await fetch('http://10.0.2.2:80/api/public/api/comedor',
        {
            method:'POST',
            headers:{"Content-Type": "application/json; charset=utf-8" },
            body:JSON.stringify({json:json1}), 
        });
    const respJson = await resp.json();
    Alert.alert('',respJson.message);
}

const AgregarMenuForm = (props) => {
    //console.log(props);
    return(
        <View>
            <Field style={styles.input} name="tipoServicio" component={field} ph="Ejecutivo" nm="Tipo de Servicio"/>
            <Field style={styles.input} name="precio" component={field} ph="5000" nm="Precio"/>
            <Button style={styles.button} title="Crear Menú" color="#DB0600" onPress={props.handleSubmit(async(values)=>{

                values.id_admin= await this.getId();
                this.createMenu(values);    
                //console.log(values)
            })} />
        </View>
    )
}

export default reduxForm({
    form: 'AgregarMenuForm',
    validate,
})(AgregarMenuForm);
