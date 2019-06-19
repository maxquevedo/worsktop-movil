//import liraries
import React, { Component } from 'react';
import { View, Text, FlatList,TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from '../styles';

// create a component
class VerProveedor extends Component {
    constructor(props){
        super(props);
        this.state={
            proveedores:[],
            loading:true,
        }
    }

    async componentDidMount(){
        try{
            const resp = await fetch('http://10.0.2.2:80/api/public/api/proveedor/index');
            const respJson = await resp.json();
            this.setState({proveedores:respJson.proveedor,loading:false})
        }catch(error){
            console.log(error);
        }

    }

    renderItem(data){
        return <TouchableOpacity style={{backgroundColor: 'transparent'}}>
        <View  style={{justifyContent:'space-around'}}>
            <View style={styles.verMargin}>
                <Text style={styles.text}>Rut: {data.item.rut_proveedor}-{data.item.dv_proveedor}</Text>
                <Text style={styles.text}>Teléfono: {data.item.telefono}</Text>
                <Text style={styles.text}>Correo: {data.item.correo}</Text>
            </View>
            <View style={{backgroundColor:'gray',height:5,marginBottom:10,marginTop:30 }}></View>
        </View>
    </TouchableOpacity>
    }

    render() {
        const { loading } = this.state;
        return (
            <View>
            {loading? 
            <ActivityIndicator size="large" color="#DB0600"/>:
            this.state.proveedores.length > 0?
            <FlatList data={this.state.proveedores} renderItem={this.renderItem} keyExtractor={(item)=> {let a = item.id;
                a = a.toString(); return a; }}/>:
                <Text style={styles.noEncontrado}>No se encontraron proveedores</Text>}
            </View>
        );
    }
}

//make this component available to the app
export default VerProveedor;
