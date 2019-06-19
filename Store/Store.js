import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import funcionPrimaria from './Sagas/Sagas';

const reducerSesion = (state={},action) =>{
    switch (action.type) {
        case 'REGISTRO':
            return action.usuario;

        case 'LOGIN':
            return null;
    
        default:
            return state;
    }
}

const reducerAgregar = (state="" ,action) =>{
    switch (action.type) {
        case 'AGREGAR_ORDENCOMPRA':
            console.log(action.values);
            return action;
        case 'AGREGAR_PEDIDO':
            return state;    
        case 'AGREGAR_MENU':
            return state;
        default:
            return state;
    }
}

const reducerUsuario = (state='holi',action) =>{
    switch (action.type) {
        case 'LOGIN':
            console.log(action);
            return action;
        case 'REGISTRAR':
            return state;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    reducerSesion,
    reducerUsuario,
    reducerAgregar,
    form,
});

const store = createStore(reducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(funcionPrimaria);

export default store;