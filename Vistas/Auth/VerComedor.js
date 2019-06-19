//import liraries
import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

// create a component
class VerComedor extends Component {
    constructor(props){
        super(props);
        this.state = {
            menus: [],
            loading: true,
        }
    }

    async componentDidMount(){
        try{
            const menus = await fetch('http://10.0.2.2:80/api/public/api/comedor/index');
            const platos = await menus.json();
            this.setState({menus: platos.comedores, loading:false});

        }catch(error){
            if(error)
                console.log('Error:   '+error);
        }
    }
    
    renderItem(data) {
        return <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                    <View  style={styles.verMargin}>
                        <Text style={styles.text}>id: {data.item.id}</Text>
                        <Text style={styles.text}>tipo servicio: {data.item.tipo_servicio}</Text>
                        <Text style={styles.text}>precio: {data.item.precio}</Text>
                    </View>
                    <View style={{backgroundColor:'gray',height:10,marginBottom:10,marginTop:30 }}></View>
                </TouchableOpacity>
    }

    render() {
        const { menus,loading } = this.state;
        return (
            <View>
                {loading? <ActivityIndicator size="large" color="#DB0600"/>:
                menus.length > 0?
                <FlatList data={menus} renderItem={this.renderItem} keyExtractor={(item)=> {let a = item.id;
                a = a.toString(); return a; }}/>:
                <Text style={styles.noEncontrado}>No se encontraron items</Text>}
            </View>
        );
    }
}

//make this component available to the app
export default VerComedor;
