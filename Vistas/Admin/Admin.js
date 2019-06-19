//import liraries
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';

// create a component
class Admin extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex:1,backgroundColor:'#fff',justifyContent:'space-evenly',width:375,paddingLeft:50}}>  
                <Button color="#DB0600" style={styles.button} title="Ver" onPress={ () => { navigation.navigate('Ver')} }/>
                <Button color="#DB0600" style={styles.button} title="Agregar" onPress={ () => { navigation.navigate('Agregar') } }/>       
                <Button color="#DB0600" title="Editar Habitación" onPress={()=>{navigation.navigate('EditarHabitacion')}}/>
            </View>
        );
    }
}

//make this component available to the app
export default Admin;
