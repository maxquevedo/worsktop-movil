//import liraries
import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

// create a component
class VerHabitacion extends Component {
    constructor(props){
        super(props);
        this.state = {
            habitaciones: [],
            loading: true,
            estado:'',
        }
    }

    async componentDidMount(){
        try{
            //10.0.2.2:80 -> localhost en emulador
            const resp = await fetch('http://10.0.2.2:80/api/public/api/habitacion/');
            const habitacion = await resp.json();
            this.setState({habitaciones: habitacion.habitaciones , loading:false});

        }catch(error){
            if(error)
                console.log('Error:   '+error);
        }
    }
    
    renderItem(data) {
        return <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                    <View  style={{justifyContent:'space-around'}}>
                        <View style={styles.verMargin}>
                            <Text style={styles.text}>N° de Habitación: {data.item.id}</Text>
                            <Text style={styles.text}>Estado: {data.item.situacion}</Text>
                            <Text style={styles.text}>Tipo cama: {data.item.tipo_cama}</Text>
                            <Text style={styles.text}>Accesorios: {data.item.accesorios}</Text>
                            <Text style={styles.text}>Precio: {data.item.precio}</Text>
                        </View>
                        <View style={{backgroundColor:'gray',height:5,marginBottom:10,marginTop:30 }}></View>
                    </View>
                </TouchableOpacity>
    }

    render() {
        const { habitaciones,loading } = this.state;
        return (
            <View>
                {loading? <ActivityIndicator size="large" color="#DB0600"/>:
                habitaciones.length>0?
                <FlatList data={habitaciones} renderItem={this.renderItem} keyExtractor={(item)=> {let a = item.id.toString();
                a = a.toString(); return a; }}/>:
                <Text style={styles.noEncontrado}>No se encontraron habitaciones</Text>}
            </View>
        );
    }
}

//make this component available to the app
export default VerHabitacion;
