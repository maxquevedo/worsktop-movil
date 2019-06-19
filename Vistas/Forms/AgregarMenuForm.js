import React, { Component } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import styles from '../styles';

const fieldAgregarMenu = (props) => {
    //console.log(props);
    // Terminar
    return(
        <View style={styles.field}>
            <Text style={styles.centerText}>{props.nm}</Text>
            <Picker itemStyle={{textAlign:'center',alignItems:'center'}} onValueChange={()=>{}}>
                <Picker.Item style={{alignItems:'center', textAlign:'center'}} value='Ejecutivo' label='Ejecutivo'/>
                <Picker.Item value='EjecutivoVegetariano' label='Ejecutivo Vegetariano'/>
                <Picker.Item value='Hipocalorico' label='Hipocalórico'/>
            </Picker>
         </View>
    );
};

const fieldBuscaPlatos = (props) =>{
    return(
        <View style={styles.field}>
        <Text style={styles.centerText}>{props.nm}</Text>
        <Picker itemStyle={{textAlign:'center'}} >
            <Picker.Item value='Papitas' label='Papitas'/>
            <Picker.Item value='Arroz' label='Arroz'/>
            <Picker.Item value='Sopa' label='Sopa'/>
        </Picker>
     </View>
    );
}


const AgregarMenuForm = (props) => {
    //console.log(props);
    return(
        <View>
            <Field style={styles.input} name="tipoServicio" component={fieldAgregarMenu} ph="12.345.678-9" nm="Tipo de Servicio"/>
            <Field style={styles.input} name="PlatoLunes" component={fieldBuscaPlatos} ph="123456789"   nm="Plato día Lunes"/>
            <Field style={styles.input} name="PlatoMartes" component={fieldBuscaPlatos} ph="usuario"    nm="Plato día Martes"/>
            <Field style={styles.input} name="PlatoMiercoles" component={fieldBuscaPlatos} ph="usuario" nm="Plato día Miércoles"/>
            <Field style={styles.input} name="PlatoJueves" component={fieldBuscaPlatos} ph="*******"    nm="Plato día Jueves"/>
            <Field style={styles.input} name="PlatoViernes" component={fieldBuscaPlatos} ph="*******"   nm="Plato día Viernes"/>
            <Field style={styles.input} name="PlatoSabado" component={fieldBuscaPlatos} ph="*******"    nm="Plato día Sábado"/>
            <Field style={styles.input} name="PlatoDomingo" component={fieldBuscaPlatos} ph="*******"   nm="Plato día Domingo"/>
            <Button style={styles.button} title="Crear Menú" color="#DB0600" onPress={props.handleSubmit((values)=>{
                      console.log(values)
            })} />
        </View>
    )
}

export default reduxForm({
    form: 'AgregarMenuForm',
})(AgregarMenuForm);
