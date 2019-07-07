import { createStackNavigator, createAppContainer } from 'react-navigation';
import StackAdmin from './Admin/StackAdmin';
import StackEmpleado from './Empleado/StackEmpleado';
import StackCliente from './Cliente/StackCliente';
import ProveedorView from './Proveedor/ProveedorView';
import NoAuth from './NoAuth/NoAuth';


const StackApp = createStackNavigator({
    Empleado:{
        screen: StackEmpleado,
        navigationOptions:{
            header:null,
            gesturesEnabled: false,
        }
    },
    Cliente:{
        screen: StackCliente,
        navigationOptions:{
            header:null,
            gesturesEnabled: false,
        }
    },
    Proveedor:{
        screen: ProveedorView,
        navigationOptions:{
            header:null,
            gesturesEnabled: false,
        }
    },
    Administrador:{
        screen: StackAdmin,
        navigationOptions:{
            header:null,
            gesturesEnabled: false,
            swipeEnabled: false
        }
    },
    Sesion:{
        screen: NoAuth,
        navigationOptions:{
            header:null,
            gesturesEnabled: false,
        }
    },
},{
    initialRouteName:'Sesion'
});

export default createAppContainer(StackApp);