import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import funcionPrimaria from './Sagas/Sagas';

const reducerSesion = (state="",action) =>{
    switch (action.type) {
        case 'REGISTRO':
            return action.usuario;    
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

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    reducerSesion,
    reducerAgregar,
    form,
});

const store = createStore(reducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(funcionPrimaria);

export default store;