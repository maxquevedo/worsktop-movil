//import liraries
import React, { Component } from 'react';
import { View, ScrollView, Button, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from '../Forms/SignUpForm';
import styles from '../styles';
//import Selector from '../Selector';


// create a component
class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            autenticado:false,
        }
    }

    render() {
        const { navigation } = this.props;
        //console.log(this.props);
        return (
            <KeyboardAvoidingView behavior="padding">
                <ScrollView contentContainerStyle={styles.scroll}>
                    <SignUpForm registro={this.props.registrar} />
                    <View style={{justifyContent:'flex-start',marginTop:100}}>
                        <Button title=" Volver a Login " color="#DB0600" onPress={()=>{navigation.goBack();}}/>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

//Pasa el estado a props
const mapStateToProps = state => {
    return {
        autentica2: state
    }
}

const mapDispatchToProps = dispatch => ({
        registrar: (values) => {
            dispatch({ type: 'REGISTRAR',values})
        },
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);