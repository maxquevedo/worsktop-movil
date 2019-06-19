//import liraries
import React, { Component } from 'react';
import { ScrollView,} from 'react-native';
import AgregarMenuForm from '../Forms/AgregarMenuForm';
import styles from '../styles';

// create a component
class AgregarMenu extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{alignItems:'center'}}>
                <AgregarMenuForm/>
            </ScrollView>
        );
    }
}

//make this component available to the app
export default AgregarMenu;
