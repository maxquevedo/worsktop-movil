//import liraries
import React, { Component } from 'react';
import { View, Text, Button, Picker, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';
import SignInForm from '../Forms/SignInForm';

// create a component
class SignIn extends Component {
    constructor(props){
        super(props);
        this.state= {
            tipoUsuario: 'cliente',
            usuario: null,
            contraseña:null,
            loading: false,
        }
    }

    toggleLoading = () => { 
        this.setState({loading:!this.state.loading});
    }

    componentDidMount(){
        this.setState({loading:false});
    }

    render() {
        const { navigation } = this.props;
        const { loading } = this.state;
        return (
            <View style={styles.contenedor}>
            { loading? 
                <ActivityIndicator size="large" color="#DB0600" />:
                <View>
                    <Text style={styles.text}>Eres</Text>
                    <Picker
                        selectedValue={this.state.tipoUsuario}
                        style={styles.pickerStyle}
                        onValueChange={(itemValue, itemIndex) =>
                        this.setState({tipoUsuario: itemValue})
                    }>
                        <Picker.Item style={styles.text} label="Cliente" value="cliente" />
                        <Picker.Item style={styles.text} label="Empleado" value="empleado" />
                        <Picker.Item style={styles.text} label="Proveedor" value="proveedor" />
                        <Picker.Item style={styles.text} label="Administrador" value="administrador" />
                    </Picker>
                    <SignInForm navigation={navigation}  tipoUsuario={this.state.tipoUsuario} setLoading={this.toggleLoading}/>
                    <View style={{justifyContent:'flex-end', marginTop:80}}>
                        <Text style={styles.text}>¡Registrate acá!</Text>
                    </View>
                    <View style={{justifyContent:'flex-end',marginTop:20}}>
                        <Button style={styles.button} title="Crear Cuenta" color="#DB0600"onPress={()=>{navigation.navigate('SignUp');}}/>
                    </View>
                </View>
            }
            </View>
        );
    }
}

//Pasa el estado a props
const mapStateToProps = (state) => {
    return {
        numero: state.reducerPrueba
    }
}

const mapDispatchToProps = (dispatch) => ({
        login: (datos) => {
            //
        },
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);