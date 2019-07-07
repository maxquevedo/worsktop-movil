import { takeEvery, call } from 'redux-saga/effects';
import  { registrarCliente, registrarEmpleado, registrarProveedor }  from '../Servicios/Api';


const regCliente = async ({RutEmpresa, nombreEmpresa, correo, usuario, contraseña})=>{
    registrarCliente({ RutEmpresa, nombreEmpresa, correo, usuario, contraseña});
}

const regEmpleado = async ({ rutEmpleado, nombre, usuario, contraseña }) =>{
    registrarEmpleado({ rutEmpleado, nombre, usuario, contraseña });
}

const regProveedor = async({ rutProveedor, nombre, telefono, correo, usuario, contraseña }) =>{
    registrarProveedor({ rutProveedor, nombre, telefono, correo, usuario, contraseña });
}

function* sagaRegistro(values) {
    try {
        if(values.values.nivel_permiso === "cliente"){
             const { usuario,RutEmpresa,contraseña,correo,nombreEmpresa } = values.values;
             yield call(regCliente,{RutEmpresa,nombreEmpresa,correo,usuario,contraseña});
        }
        if(values.values.nivel_permiso === "empleado"){
            const { usuario, rutEmpleado, contraseña, nombre } = values.values;
            yield call(regEmpleado,{usuario,rutEmpleado,contraseña,nombre});
        }
        if(values.values.nivel_permiso === "proveedor"){
            const { rutProveedor, nombre, telefono, correo, usuario, contraseña } = values.values
            yield call(regProveedor,{rutProveedor,nombre,telefono,correo,usuario,contraseña});
        }
    } catch (error) {
      console.log(error);
    }
}

export default function* funcionPrimaria() {
    yield takeEvery('REGISTRAR', sagaRegistro);
    // yield ES6
}