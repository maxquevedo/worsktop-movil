//import liraries
import React, { Component } from 'react';
import { View } from 'react-native';
import AgregarHuespedForm from '../Forms/AgregarHuespedForm';
import styles from '../styles'

// create a component
class AgregarHuesped extends Component {
    constructor(){
        super();
        this.state = {
            rutHuesped:'',
            empresa:'',
            habitacion:''
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <AgregarHuespedForm/>
            </View>
        );
    }
}

//make this component available to the app
export default AgregarHuesped;
