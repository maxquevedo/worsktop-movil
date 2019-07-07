//import liraries
import React, { Component } from 'react';
import { View, Text, FlatList,ActivityIndicator } from 'react-native';
import styles from '../styles';

// create a component
class VerFactura extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:true,
            rut:null,
            facturas:[],
        }
    }

    mostarFacturas = async()=>{
        try{
            const resp = await fetch('http://10.0.2.2:80/api/public/api/factura/');
            const respJson = await resp.json();
            this.setState({facturas:respJson.facturas,loading:false});
            
        }catch(error){
            console.log('Error: '+error);
        }
    }

    componentDidMount(){
        this.mostarFacturas();
    }

    renderItem(data){
        //var fechaEmision= data.item.fecha_emision;
        return(
            <View  style={{justifyContent:'space-around'}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginLeft:'8.5%'}}>
                        <Text style={{fontSize:25}}>ID : </Text>
                        <Text style={{fontSize:25}}>{data.item.id}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginLeft:'8.5%'}}>
                        <Text style={{fontSize:25}}>Tipo de Servicio : </Text>
                        <Text style={{fontSize:25}}>{data.item.tipo_servicio}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginLeft:'8.5%'}}>
                        <Text style={{fontSize:25}}>Descripción: </Text>
                        <Text style={{fontSize:25}}>{data.item.descripcion}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginLeft:'8.5%'}}>
                        <Text style={{fontSize:25}}>Total factura : </Text>
                        <Text style={{fontSize:25}}>{data.item.total}</Text>
                    </View>
                    <View style={{backgroundColor:'gray',height:5,marginBottom:10,marginTop:30 }}></View>
            </View>
        );
    }

    render() {
        const { facturas,loading,rut } = this.state;
        return (
            <View>
                <View style={{backgroundColor:'gray',height:5,marginBottom:10}}></View>
                {loading? <ActivityIndicator size="large" color="#DB0600"/>:
                facturas.length>0?
                <FlatList data={facturas} renderItem={this.renderItem} keyExtractor={(item,index) => index.toString()}/>:
                <Text style={styles.noEncontrado}>No se encontraron facturas</Text>
                }
            </View>
        );
    }
}

//make this component available to the app
export default VerFactura;
