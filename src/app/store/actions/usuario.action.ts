import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';


export const cargarUsuario = createAction(
    '[Usuario] cargarUsuario',
    props<{id:string}>()
);

export const cargarUsuarioSuccess = createAction(
    '[Usuario] cargarUsuarioSuccess',
    props<{ usuario: Usuario}>()
);

export const cargarUsuarioError = createAction(
    '[Usurio] cargarUsuarioError',
    props<{ payload: any}>()
);
