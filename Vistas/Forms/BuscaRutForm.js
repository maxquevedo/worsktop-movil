import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Field, reduxForm} from 'redux-form';
import styles from '../styles';
import { Ionicons } from '@expo/vector-icons';

const fieldBuscaRut = (props) => {
    //console.log(props);
    return(
        <View style={styles.field}>
            <Text style={{fontSize:25,textAlign:'center'}}>{props.nm}</Text>
            <TextInput placeholder={props.ph}
            style={styles.input}
            onChangeText={props.input.onChange}
            value={props.input.value}
            keyboardType='numeric'
            onBlur = {props.input.onBlur}
            />
            {props.meta.touched && props.meta.error && <Text>{props.meta.error}</Text> }
         </View>
    );
};


const validate = (values) =>{
    const errors = {};

    //Rut
    if(!values.Rut){
        errors.Rut = 'requerido';
    }else if(!/^[0-9]+\.[0-9]{3}\.[0-9]{3}\-[0-9]$/i.test(values.Rut)){
        errors.Rut = 'formato incorrecto';  
    }

    return errors;
}

const BuscaRutForm = (props) => {
    //console.log(props);
    return(
        <View style={{flexDirection:'row', justifyContent:'center'}}>
        <View style={{flexDirection:'column'}}>
            <Field style={styles.input} name="Rut" component={fieldBuscaRut} ph="12.345.678-9" nm="Rut"/>
        </View>
        <TouchableOpacity style={{marginTop:29,padding:10}} onPress={props.handleSubmit(async(values)=>{
                //console.log(values);
            })}>
            <Ionicons name="md-search" size={25} color="black"/>
        </TouchableOpacity>
        </View>
    )
}

export default reduxForm({
    form: 'BuscaRutForm',
    validate,
})(BuscaRutForm);
