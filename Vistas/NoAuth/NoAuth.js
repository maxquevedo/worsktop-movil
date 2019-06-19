import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';

const RutasNoAuth =  createStackNavigator({
    SignIn:{
        screen: SignIn,
        navigationOptions:{
            title: 'Sign In'
        }
    },
    SignUp:{
        screen: SignUp,
        navigationOptions:{
            title:'Sign Up'
        }

    }
},
{
    headerMode: 'none',
});

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });

export default createAppContainer(RutasNoAuth);