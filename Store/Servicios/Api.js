const URL = "http://10.0.2.2:80/api/public/api";

async function registrarUsuario(values){
    try{
        let json1 = JSON.stringify({
            nivel_permiso:values.nivel_permiso,
            usuario:values.usuario,
            pass:values.pass
        });
        let response = await fetch(`${URL}/user/store`,{
            method:'POST',
            headers:{"Content-Type": "application/json; charset=utf-8" },
            body:JSON.stringify({json:json1}),
            });
        let ok = await JSON.stringify(response.ok);
        
        if(ok){
            console.log("ok");
        }
    }catch(error){
        if(error)
            console.log('Error:   '+JSON.stringify(error));
    }
}


async function getUserId(usuario) {
    
    const resp = await fetch(`${URL}/user/show/${usuario}`);
    const respJson = await resp.json();
    let id = await respJson.usuario[0].id;
    return id;
}

async function leerProductos(){
    try{   
        console.log("leer productos")
        // let resp = await fetch('http://10.0.2.2:80/api/public/api/productos/index');
        // let respJson = await resp.json();
        // return respJson.productos;

    }catch(error){
        console.log('Error :'+error);
    }
}


async function registrarCliente(values){
    let rut = values.RutEmpresa.split('.');
    let dv = values.RutEmpresa[values.RutEmpresa.length-1]
    let rut1 = rut[2].split('-');
    let rut2 = rut1[0];
    let rutSinPuntos = rut[0].concat(rut[1].concat(rut2));
    const json1 = JSON.stringify({
        rut_cliente:rutSinPuntos,
        dv_cliente:dv,
        nombre_empresa:values.nombreEmpresa,
        correo:values.correo,
        id_usuario:values.id
    });
    console.log(json1);
    const resp = await fetch(`${URL}/cliente/store`,{
        method:'POST',
        headers:{"Content-Type": "application/json; charset=utf-8" },
        body:JSON.stringify({json:json1}), 
        });
    let ok = await JSON.stringify(response.ok);
    if(ok){
        console.log("ok");
    }    
}

async function registrarProveedor(values){
    try{

    }catch(error){
        console.log("Error: "+error);
    }
}

async function registrarEmpleado(values){
    try{

    }catch(error){
        console.log("Error: "+error);
    }
}

export { registrarUsuario, leerProductos, registrarCliente,registrarProveedor,registrarEmpleado,
    getUserId} ;
//export const leerProductos = leerProductos;

