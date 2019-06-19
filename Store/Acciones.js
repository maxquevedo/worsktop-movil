export const actionRegistro = values => ({
  type: 'REGISTRO',
  datos: values,
});

export const actionLogin = datos => ({
  type: 'LOGIN',
  datos,
});

export const actionEstablecerSesion = usuario => ({
  type: 'ESTABLERCER_SESION',
  usuario,
});

export const actionCerrarSesion = () => ({
  type: 'CERRAR_SESION',
});
