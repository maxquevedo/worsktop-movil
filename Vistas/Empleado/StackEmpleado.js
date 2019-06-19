import { createStackNavigator, createAppContainer } from 'react-navigation';
import Empleado from './Empleado';
import AgregarOrdenPedido from '../Auth/AgregarOrdenPedido';
import VerComedor from '../Auth/VerComedor';
import VerRecepcionProducto from '../Auth/VerRecepcionProducto';


const StackEmpleado = createStackNavigator({
    Empleado:{
        screen:Empleado,
        navigationOptions:{
            header: null
        }
    },
    AgregarOrdenPedido:{
        screen: AgregarOrdenPedido,
        navigationOptions:{
            title: "Agregar Orden de Pedido",
            headerStyle:{
                backgroundColor: '#87001D',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'#fff'
            }
        }
    },
    VerComedor:{
        screen: VerComedor,
        navigationOptions:{
            title: "Ver Comedor",
            headerStyle:{
                backgroundColor: '#87001D',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'#fff'
            }
        }
    },
    VerRecepcionProducto:{
        screen: VerRecepcionProducto,
        navigationOptions:{
            title: "Ver Recepción de Productos",
            headerStyle:{
                backgroundColor: '#87001D',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'#fff'
            }
        }
    }
},{
    initialRouteName:'Empleado'
});


export default createAppContainer(StackEmpleado);