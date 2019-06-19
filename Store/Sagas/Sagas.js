import { takeEvery, call } from 'redux-saga/effects';
import  { registrarUsuario, leerProductos, registrarCliente, getUserId }  from '../Servicios/Api';

const regUsuario = async ({nivel_permiso,usuario,contraseña})=>{
    let pass = contraseña;
    //registrarUsuario({nivel_permiso,usuario,pass});
}

const regCliente= async ({RutEmpresa,nombreEmpresa,correo,usuario,id})=>{
    console.log(id)
    registrarCliente({RutEmpresa,nombreEmpresa,correo,id});
}

function* sagaRegistro(values) {
    try {
        console.log(values.values);
        if(values.values.nivel_permiso === "cliente"){
             const { usuario,RutEmpresa,contraseña,correo,nombreEmpresa,nivel_permiso } = values.values;
             yield call(regUsuario,{nivel_permiso,usuario,contraseña});
             yield call(regCliente,{RutEmpresa,nombreEmpresa,correo,usuario,id});
        }
        if(values.values.nivel_permiso === "empleado"){
            console.log('Empleado');
            // const { usuario,rutEmpresa,contraseña,correo,nombreEmpresa } = values.values;
            // yield call(registrarUsuario,{usuario,contraseña})
        }
        if(values.values.nivel_permiso === "proveedor"){
            console.log('Proveedor');
        }
        //const usuario = values.values.usuario;
        //const registro = yield call(registroUsuario, values.values);
        // const { email, uid } = registro;
        // const { datos: { nombre } } = values;
        // // uid, email, nombre
        // yield call(registroEnBaseDeDatos, { uid, email, nombre });
    } catch (error) {
      console.log(error);
    }
}


  
function* sagaLogin(values) {
    try {
      console.log(values);
    //   const resultado = yield call(loginEnFirebase, values.datos);
    //   console.log(resultado);
    } catch (error) {
      console.log(error);
    }
}

export default function* funcionPrimaria() {
    yield takeEvery('REGISTRAR', sagaRegistro);
    yield takeEvery('LOGIN', sagaLogin);
    //yield takeEvery('',sagaRegistro);
    // yield ES6
}