const URL = "http://10.0.2.2:80/api/public/api";

async function registrarCliente(values){
    try{
        let rut = values.rutProveedor.split('.');
        let dv = values.rutProveedor[values.rutProveedor.length-1]
        let rut1 = rut[2].split('-');
        let rut2 = rut1[0];
        let rutSinPuntos = rut[0].concat(rut[1].concat(rut2));
        const json1 = JSON.stringify({
            rut_empresa:rutSinPuntos,
            dv_empresa:dv,
            nombre_empresa:values.nombreEmpresa,
            correo:values.correo,
            usuario:values.usuario,
            pass:values.contraseña,
        });
        const resp = await fetch(`${URL}/cliente`,{
            method:'POST',
            headers:{"Content-Type": "application/json; charset=utf-8" },
            body:JSON.stringify({json:json1}), 
            });
        let respJson = await resp.json();
        alert(respJson.message);
    }
    catch(error){
        console.log("Error ",error);
    }
}

async function registrarProveedor(values){
    try{
        let rut = values.rutProveedor.split('.');
        let dv = values.rutProveedor[values.rutProveedor.length-1]
        let rut1 = rut[2].split('-');
        let rut2 = rut1[0];
        let rutSinPuntos = rut[0].concat(rut[1].concat(rut2));

        const json1 = JSON.stringify({
            rut_proveedor:rutSinPuntos,
            dv_proveedor:dv,
            nombre_proveedor:values.nombre,
            telefono:values.telefono,
            correo:values.correo,
            usuario:values.usuario,
            pass:values.contraseña,
        });

        const resp = await fetch(`${URL}/proveedor`,{
            method:'POST',
            headers:{"Content-Type": "application/json; charset=utf-8" },
            body:JSON.stringify({json:json1}), 
            });
        let respJson = await resp.json();
        alert(respJson.message);
    }catch(error){
        console.log("Error: "+error);
    }
}

async function registrarEmpleado(values){
    try{
        let rut = values.rutProveedor.split('.');
        let dv = values.rutProveedor[values.rutProveedor.length-1]
        let rut1 = rut[2].split('-');
        let rut2 = rut1[0];
        let rutSinPuntos = rut[0].concat(rut[1].concat(rut2));
        let nombrus = values.nombre.split(' ');
        let nombre = nombrus[0];
        let apellido = nombrus[1];

        const json1 = JSON.stringify({
            rut_empleado:rutSinPuntos,
            dv_empleado:dv,
            nombre_empleado:nombre,
            apellido_empleado: apellido,
            usuario:values.usuario,
            pass:values.contraseña,
        });

        const resp = await fetch(`${URL}/empleado`,{
            method:'POST',
            headers:{"Content-Type": "application/json; charset=utf-8" },
            body:JSON.stringify({json:json1}), 
            });

        let respJson = await resp.json();
        alert(respJson.message);
    }catch(error){
        console.log("Error: "+error);
    }
}

export { registrarCliente,registrarProveedor,registrarEmpleado } ;


