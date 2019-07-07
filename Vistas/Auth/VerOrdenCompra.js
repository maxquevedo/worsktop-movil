//import liraries
import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

// create a component
class VerOdenCompra extends Component {
    constructor(props){
        super(props);
        this.state = {
            ordenCompra: [],
            loading: true,
        }
    }

    async componentDidMount(){
        try{
            const resp = await fetch('http://10.0.2.2:80/api/public/api/compra/');
            const respJson = await resp.json();
            this.setState({ordenCompra: respJson.compras , loading:false});

        }catch(error){
            if(error)
                console.log('Error:   '+error);
        }
    }
    
    renderItem(data) {
        var fechas = data.item.fecha_llegada.split('-'); 
        var año = fechas[0];
        var mes = fechas[1];
        var dia = fechas[2].split(' ')[0];
        var fecha = dia+"/"+mes+"/"+año;

        return <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                    <View  style={{justifyContent:'space-around'}}>
                        <View style={styles.verMargin}>
                            <Text style={styles.text}>ID: {data.item.id}</Text>
                            <Text style={styles.text}>Rut Huésped: {data.item.rut_huesped}-{data.item.dv_huesped}</Text>
                            <Text style={styles.text}>Nombre Huésped: {data.item.nombre_huesped} {data.item.apellido_huesped}</Text>
                            <Text style={styles.text}>Fecha de llegada: {fecha}</Text>
                            <Text style={styles.text}>Duración estadía: {data.item.duracion_estadia} día(s)</Text>
                        </View>
                        <View style={{backgroundColor:'gray',height:5,marginBottom:10,marginTop:30 }}></View>
                    </View>
                </TouchableOpacity>
    }

    render() {
        const { ordenCompra,loading } = this.state;
        return (
            <View>
                {loading? <ActivityIndicator size="large" color="#DB0600"/>:
                ordenCompra.length > 0?
                <FlatList data={ordenCompra} renderItem={this.renderItem} keyExtractor={(item)=> {let a = item.id.toString();
                a = a.toString(); return a; }}/>:
                <Text style={styles.noEncontrado}>No se encontraron ordenes de compra</Text>}
            </View>
        );
    }
}

//make this component available to the app
export default VerOdenCompra;
