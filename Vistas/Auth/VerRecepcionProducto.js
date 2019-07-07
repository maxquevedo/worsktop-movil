//import liraries
import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';
import { Ionicons } from '@expo/vector-icons';

// create a component
class VerRecepcionProducto extends Component {
    constructor(props){
        super(props);
        this.state = {
            pedidos: [],
            loading: true,
            estado:'',
            id:0,
            refreshing:false,
            fecha:'',
        }
    }

    mostrarRecepciones = async () =>{
        try{
            const resp = await fetch('http://10.0.2.2:80/api/public/api/recepcion');
            const recepcion = await resp.json();
            this.setState({pedidos: recepcion.recepciones , loading:false, refreshing:false});

        }catch(error){
            if(error)
                console.log('Error:   '+error);
        }
    }
    async componentDidMount(){
        this.mostrarRecepciones();
    }
    
    async componentDidUpdate(prevProps,prevState){
        //console.log(this.state);
        if(prevState.estado !== this.state.estado){
            let id  = this.state.id;
            let json1 = JSON.stringify({
                estado_pedido:this.state.estado,
                fecha_recepcion: this.state.fecha,
                id_pedido:this.state.id.toString(),
            });
            console.log(json1);
            const resp = await fetch(`http://10.0.2.2:80/api/public/api/recepcion/${id}`,{
                method:'PUT',
                headers:{"Content-Type": "application/json; charset=utf-8" },
                body:JSON.stringify({json:json1}),
                
            });

            console.log(resp);
            let ok = await JSON.stringify(resp.ok);
            if(ok){ 
                alert('Actualizado');
                this.mostrarRecepciones();
            }
        } 
    }

    _cambiarEstado(nuevoEstado,nuevoId,nuevaFecha){
         this.setState({id:nuevoId});
         this.setState({estado:nuevoEstado,fecha:nuevaFecha});
    }

    loadMore = () =>{
        this.setState({refreshing:true}, ()=>{
                this.mostrarRecepciones()
        });
    }

    renderItem(data) {
        
        var estadoActual = data.item.estado_pedido;
        var colorEntregado = 'black';
        var colorEspera = 'black';
        var verde = "#2B6D12";
        var fecha = data.item.fecha_recepcion.split('-');
        var fechaMostrable = fecha[2].split(' ')[0]+'/'+fecha[1]+'/'+fecha[0];
        var fechaOutput = fecha[0]+'/'+fecha[1]+'/'+fecha[2].split(' ')[0];

        switch (estadoActual){
            case 'entregado':
                colorEntregado = verde;        
                break;
            case 'en espera':
                colorEspera = verde;
                break;
            default:
                break;
        }

        return  <View  style={{justifyContent:'space-around'}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginLeft:'8.5%'}}>
                        <Text style={{fontSize:25}}>Id: </Text>
                        <Text style={{fontSize:25}}>{data.item.id}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                        <Text style={{fontSize:25}}>Estado: </Text>
                        <TouchableOpacity onPress={()=>{this._cambiarEstado('entregado',data.item.id,fechaOutput)}}>
                            <Ionicons name="md-checkmark-circle" size={25} color={colorEntregado}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this._cambiarEstado('en espera',data.item.id,fechaOutput)}}>
                            <Ionicons name="md-clock" size={25} color={colorEspera}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginLeft:'8.5%'}}>
                        <Text style={{fontSize:25}}>Fecha de recepción: </Text>
                        <Text style={{fontSize:25}}>{fechaMostrable}</Text>
                    </View>
                    <View style={{backgroundColor:'gray',height:10,marginBottom:10,marginTop:30 }}></View>
                </View>
    }


    render() {
        const { pedidos,loading, } = this.state;
        return (
            <View>
                {loading? <ActivityIndicator size="large" color="#DB0600" />:
                <FlatList data={pedidos} refreshing={this.state.refreshing} renderItem={this.renderItem.bind(this)} 
                extraData={this.state} keyExtractor={(item,index) => index.toString()} refreshing={this.state.refreshing}
                onRefresh={this.loadMore}/>}
            </View>
        );
    }
}

//make this component available to the app
export default VerRecepcionProducto;
