import { ActionReducerMap, createReducer, ReducerObservable } from '@ngrx/store';
import { UsuariosState } from './reducers/usuarios.reducer';
import * as reducers from './reducers';


export interface AppState {
    usuarios: reducers.UsuariosState,
    usuario: reducers.UsuarioState
};


export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.usuariosReducer,
    usuario: reducers.usuarioReducer

}
