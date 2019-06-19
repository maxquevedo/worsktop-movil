//import liraries
import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';
import { Ionicons } from '@expo/vector-icons';

// create a component
class EditarHabitacion extends Component {
    constructor(props){
        super(props);
        this.state = {
            habitaciones: [],
            loading: true,
            estado:'',
            id:0,
            refreshing:false,
        }
    }

    mostrarHabitaciones = async () =>{
        try{
            const resp = await fetch('http://10.0.2.2:80/api/public/api/habitacion/index');
            const habitacion = await resp.json();
            this.setState({habitaciones: habitacion.habitaciones , loading:false, refreshing:false});

        }catch(error){
            if(error)
                console.log('Error:   '+error);
        }
    }
    async componentDidMount(){
        this.mostrarHabitaciones();
    }
    
    async componentDidUpdate(prevProps,prevState){
        if(prevState.estado !== this.state.estado){
            let id = this.state.id;
            let json1 = JSON.stringify({
                situacion:this.state.estado,
            });
            const resp = await fetch(`http://10.0.2.2:80/api/public/api/habitacion/update/${id}`,{
                method:'PUT',
                headers:{"Content-Type": "application/json; charset=utf-8" },
                body:JSON.stringify({json:json1}),
            });
            let ok = await JSON.stringify(resp.ok);
            if(ok){
                alert('Actualizado');
                this.mostrarHabitaciones();
            }
            
        } 
    }

    _cambiarEstado(nuevoEstado,nuevoId){
        //await console.log('Estado viejo: '+this.state.estado);
        //console.log('nuevoId: '+nuevoId)
         this.setState({id:nuevoId});
        ///console.log('id actual: '+this.state.id);
         this.setState({estado:nuevoEstado,situacion:'',tipo_cama:'',accesorios:'',precio:'',});
        //console.log('\n Estado nuevo id: '+this.state.id);
    }

    loadMore = () =>{
        this.setState({refreshing:true}, ()=>{
                this.mostrarHabitaciones()
        });
    }

    renderItem(data) {
        
        var estadoActual = data.item.situacion;
        var colorHabilitado = 'black';
        var colorReparacion = 'black';
        var colorAsignada  = 'black';
        var verde = "#2B6D12";

        switch (estadoActual){
            case 'habilitada':
                colorHabilitado = verde;        
                break;
            case 'asignada':
                colorAsignada = verde;
                break;
            case 'reparacion':
                colorReparacion = verde;
                break;
            default:
                break;
        }

        return  <View  style={{justifyContent:'space-around'}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginLeft:'8.5%'}}>
                        <Text style={{fontSize:25}}>N° de Habitación: </Text>
                        <Text style={{fontSize:25}}>{data.item.id}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                        <Text style={{fontSize:25}}>Estado: </Text>
                        <TouchableOpacity onPress={()=>{this._cambiarEstado('habilitada',data.item.id)}}>
                            <Ionicons name="md-checkmark-circle" size={25} color={colorHabilitado}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this._cambiarEstado('reparacion',data.item.id)}}>
                            <Ionicons name="md-construct" size={25} color={colorReparacion}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this._cambiarEstado('asignada',data.item.id)}}>
                            <Ionicons name="md-contact" size={25} color={colorAsignada}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'gray',height:10,marginBottom:10,marginTop:30 }}></View>
                </View>
    }


    render() {
        const { habitaciones,loading, } = this.state;
        return (
            <View>
                {loading? <ActivityIndicator size="large" color="#DB0600" />:
                <FlatList data={habitaciones} refreshing={this.state.refreshing} renderItem={this.renderItem.bind(this)} 
                extraData={this.state} keyExtractor={(item,index) => index.toString()} refreshing={this.state.refreshing}
                onRefresh={this.loadMore}/>}
            </View>
        );
    }
}

//make this component available to the app
export default EditarHabitacion;
