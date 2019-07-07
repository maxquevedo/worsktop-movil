//import liraries
import React, { Component } from 'react';
import { View, Picker, ActivityIndicator, Text, Alert, AsyncStorage } from 'react-native';
import AgregarHuespedForm from '../Forms/AgregarHuespedForm';
import styles from '../styles'
import { ScrollView } from 'react-native-gesture-handler';

// create a component
class AgregarHuesped extends Component {
    constructor(){
        super();
        this.state = {
            empresas:[],
            empresaElegida:'tutiempocorp',
            habitaciones:[],
            habitacionElegida:'',
            empresasListas:false,
            habitacionesListas:false,
        }
    }
    
    cargarHabitaciones = async ()=>{
        let url = 'http:10.0.2.2:80/api/public/api/habitacion';
        const resp = await fetch(url);
        const respJson = await resp.json();
        let id_admin = await AsyncStorage.getItem("id_admin");
        console.log(id_admin);
        let arr = [];
        respJson.habitaciones.forEach(element => {
            if(element.situacion === 'habilitada'){
                arr.push(element);
            }
        });
        if(arr.length <= 0){
            Alert.alert('','No hay habitaciones disponibles en este momento');
            this.setState({habitaciones:arr,habitacionesListas:true});
        }else{
            this.setState({habitaciones:arr,habitacionesListas:true});
        }
    }

    cargarEmpresas = async ()=>{
        let url ="http:10.0.2.2:80/api/public/api/cliente";
        const resp = await fetch(url);
        const respJson = await resp.json();
        this.setState({empresas:respJson.clientes,empresasListas:true});
    }
    
    componentDidMount(){
        this.cargarEmpresas();
        this.cargarHabitaciones();
    }
    
    render() {
        const { empresasListas, habitacionesListas } = this.state;
        return (
            <ScrollView>
            {
                empresasListas? 
                    <View style={styles.container}>
                        <Text style={styles.text}>Empresa: </Text>
                        <Picker mode="dialog" 
                            selectedValue={this.state.empresaElegida}
                            onValueChange={(itemValue,itemIndex)=>{
                                this.setState({ empresaElegida:itemValue });
                            }}
                            style={styles.pickerStyle} itemStyle={{fontSize:25}}>
                            {
                                this.state.empresas.map((item) =>{
                                    return(
                                        <Picker.Item  style={styles.text} label={item.nombre_empresa} value={item.nombre_empresa} key={item.nombre_empresa}/>
                                    );
                                })
                            }
                        </Picker>
                       
                    </View>:<View></View>
            }
            {
                habitacionesListas? 
                    <View style={styles.container}>
                        <Text style={styles.text}>Habitación: </Text>
                        <Picker mode="dialog" 
                            selectedValue={this.state.habitacionElegida}
                            onValueChange={(itemValue,itemIndex)=>{
                                this.setState({ habitacionElegida:itemValue });
                            }}
                            style={styles.pickerStyle} itemStyle={{fontSize:25}}>
                            {
                                this.state.habitaciones.map((item) =>{
                                    return(
                                        <Picker.Item  style={styles.text} label={item.id.toString()} value={item.id.toString()} key={item.id}/>
                                    );
                                })
                            }
                        </Picker>
                        <AgregarHuespedForm empresa={this.state.empresaElegida} habitacion={this.state.habitacionElegida}/>
                    </View>:<ActivityIndicator color="#DB0600" size="large"/>
            }
            </ScrollView>
        );
    }
}

//make this component available to the app
export default AgregarHuesped;
