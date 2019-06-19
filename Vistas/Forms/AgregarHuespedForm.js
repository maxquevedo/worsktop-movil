import React, { Component } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import styles from '../styles';

const fieldCrearHuesped = (props) => {
    //console.log(props);
    return(
        <View style={styles.field}>
            <Text style={styles.text}>{props.nm}</Text>
            {props.input.name==="rutHuesped"? 
                <TextInput placeholder={props.ph}
                style={styles.input}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType={props.input.name === 'rutHuesped'? 'numeric':'default'} 
                onBlur = {props.input.onBlur}
                />
            :props.input.name === "empresa"?
            <Picker selectedValue={props.empresa}
                onValueChange={(itemValue, itemIndex) =>

                    this.setState({empresa: itemValue})
                }
                itemStyle={{textAlign:'center'}} >
                    <Picker.Item value='Falabella' label='Falabella'/>
                    <Picker.Item value='Juan Maestro' label='Juan Maestro'/>
                    <Picker.Item value='Huawei' label='Huawei'/>
                </Picker>
            :
            <Picker selectedValue={props.habitacion}
                onValueChange={(itemValue, itemIndex) =>{
                    this.setState({habitacion: itemValue})
                    }
                }
                itemStyle={{textAlign:'center'}} >
                    <Picker.Item value='01' label='01'/>
                    <Picker.Item value='02' label='02'/>
                    <Picker.Item value='03' label='03'/>
                </Picker>
            }
            
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


    //usuario
    if(!values.usuario){
        errors.usuario = 'requerido';
    }else if(values.usuario.length < 5){
        errors.usuario = 'deben ser al menos 5 caracteres';
    }else if(values.usuario.length > 10){
        errors.usuario= 'debe ser menor de 10 caracteres';
    }

    /* //correo
    if(!values.correo){
        errors.correo = 'requerido';
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.correo = 'email invalido';
    }
    */

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

const AgregarHuespedForm = (props) => {
    //console.log(props);
    return(
        <View>
            <Field style={styles.input} name="rutHuesped" component={fieldCrearHuesped} ph="12.345.678-9" nm="Rut Empresa"/>
            <Field style={styles.input} name="empresa" component={fieldCrearHuesped} ph="Juan Maestro" nm="Empresa"/>
            <Field style={styles.input} name="habitacion" component={fieldCrearHuesped} ph="01" nm="Habitación"/>
            <Button style={{justifyContent:'center'}} title="Crear Huesped" color="#DB0600" onPress={props.handleSubmit((values)=>{
                
                //console.log(values);
            })} />
        </View>
    )
}

export default reduxForm({
    form: 'AgregarHuespedForm',
    validate,
})(AgregarHuespedForm);
