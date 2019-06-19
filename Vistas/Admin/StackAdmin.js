import { createStackNavigator, createAppContainer } from 'react-navigation';
import Admin from './Admin';
import EditarHabitacion from '../Auth/EditarHabitacion';
import VerHabitacion from '../Auth/VerHabitacion';
import VerOrdenCompra from '../Auth/VerOrdenCompra';
import VerRecepcionProducto from '../Auth/VerRecepcionProducto';
import VerComedor from '../Auth/VerComedor';
import VerProveedor from '../Auth/VerProveedor';
import VerFactura from '../Auth/VerFactura';
import VerAdmin from '../Auth/VerAdmin';
import AgregarEmpleado from '../Auth/AgregarEmpleado';
import AgregarHuesped from '../Auth/AgregarHuesped';
import AgregarMenu from '../Auth/AgregarMenu';
import AgregarOrdenCompra from '../Auth/AgregarOrdenCompra';
import AgregarOrdenPedido from '../Auth/AgregarOrdenPedido';
import AgregarProveedor from '../Auth/AgregarProveedor';
import AgregarAdmin from '../Auth/AgregarAdmin';


const StackAdmin = createStackNavigator({
    Admin:{
        screen: Admin,
        navigationOptions:{
            header:null,
        }
    },
    Ver:{
        screen: VerAdmin,
        navigationOptions:{
            title: "Ver",
            headerStyle:{
                backgroundColor: '#87001D',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'#fff'
            }
        }
    },
    Agregar:{
        screen: AgregarAdmin,
        navigationOptions:{
            title: "Agregar",
            headerStyle:{
                backgroundColor: '#87001D',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'#fff'
            }
        }
    },
    EditarHabitacion:{
        screen: EditarHabitacion,
        navigationOptions:{
            title: "Editar Habitación",
            headerStyle:{
                backgroundColor: '#87001D',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'#fff'
            }
        }
    },
    VerHabitacion:{
        screen: VerHabitacion,
        navigationOptions:{
            title: "Ver Habitaciones",
            headerStyle:{
                backgroundColor: '#87001D',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'#fff'
            }
        },
    },
    VerOrdenCompra:{
        screen: VerOrdenCompra,
        navigationOptions:{
            title: "Ver Orden de Compra",
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
            title: "Ver Recepción de Producto",
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
        screen:VerComedor,
        navigationOptions:{
            title:"Ver Comedor",
            headerStyle:{
                backgroundColor:'#87001D',
            },
            headerTintColor:'#fff',
            headerTitleStile:{
                color:'#fff'
                
            }
        }
    },
    VerProveedor:{
        screen: VerProveedor,
        navigationOptions:{
            title: "Ver Proveedor",
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
        screen: VerFactura,
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
    },
    AgregarEmpleado:{
        screen: AgregarEmpleado,
        navigationOptions:{
            title: "Agregar Empleado",
            headerStyle:{
                backgroundColor: '#87001D',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'#fff'
            }
        }
    },
    AgregarHuesped:{
        screen: AgregarHuesped,
        navigationOptions:{
            title: "Agregar Huesped",
            headerStyle:{
                backgroundColor: '#87001D',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'#fff'
            }
        }
    },
    AgregarMenu:{
        screen: AgregarMenu,
        navigationOptions:{
            title: "Agregar Menu",
            headerStyle:{
                backgroundColor: '#87001D',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'#fff'
            }
        }
    },
    AgregarOrdenCompra:{
        screen: AgregarOrdenCompra,
        navigationOptions:{
            title: "Agregar Orden de Compra",
            headerStyle:{
                backgroundColor: '#87001D',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'#fff'
            }
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
    AgregarProveedor:{
        screen: AgregarProveedor,
        navigationOptions:{
            title: "Agregar Proveedor",
            headerStyle:{
                backgroundColor: '#87001D',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'#fff'
            }
        }
    },
},{
    initialRouteName:'Admin'
});

export default createAppContainer(StackAdmin);