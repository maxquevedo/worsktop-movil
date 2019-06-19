//import liraries
import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

// create a component
class VerRecepcionProducto extends Component {
    constructor(props){
        super(props);
        this.state = {
            productos: [],
            loading: true,
        }
    }

    async componentDidMount(){
        try{
            //CAMBIAR LA URL a orden de pedido cuando salga
            
            const resp = await fetch('http://10.0.2.2:80/api/public/api/recepcion/index');
            const respJson = await resp.json();
            this.setState({productos:respJson.recepciones, loading:false});

        }catch(error){
            if(error)
                console.log('Error:   '+error);
        }
    }

    renderItem(data) {
        var fecha = data.item.fecha_recepcion;
        fecha = fecha.split(' ');
        return <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                    <View  style={styles.verMargin}>
                        <Text style={styles.text}>id: {data.item.id}</Text>
                        <Text style={styles.text}>Fecha recepción: {fecha[0]}</Text>
                    </View>
                    <View style={{backgroundColor:'gray',height:5,marginBottom:10,marginTop:30 }}></View>
                </TouchableOpacity>
    }

    render() {
        const { productos,loading } = this.state;
        return (
            <View>
                {loading? <ActivityIndicator size="large" color="#DB0600"/>:productos.length>0?
                <FlatList data={productos} renderItem={this.renderItem} keyExtractor={(item)=> {let a = item.id;
                a = a.toString(); return a; }}/>:
                <Text style={styles.noEncontrado}>No se encontraron productos</Text>}
            </View>
        );
    }
}

//make this component available to the app
export default VerRecepcionProducto;
