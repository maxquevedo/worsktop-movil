import { createStackNavigator, createAppContainer } from 'react-navigation';
import Cliente from './Cliente';
import AgregarCompra from '../Auth/AgregarOrdenCompra';
import VerFacturaCliente from '../Auth/VerFacturaCliente';



const StackCliente = createStackNavigator({
    Cliente:{
        screen:Cliente,
        navigationOptions:{
            header: null
        }
    },
    AgregarCompra:{
        screen: AgregarCompra,
        navigationOptions:{
            title: "Agregar Compra",
            headerStyle:{
                backgroundColor: '#87001D',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'#fff'
            }
        }
    },
    VerFactura:{
        screen: VerFacturaCliente,
        navigationOptions:{
            title: "Ver Factura",
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
    initialRouteName:'Cliente'
});


export default createAppContainer(StackCliente);