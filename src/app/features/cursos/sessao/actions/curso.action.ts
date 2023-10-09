import { createAction, props } from '@ngrx/store';

export const salvarListaCursos = createAction('[Lista cursos] Salvar lista cursos', props<{ listaCursos: any[] }>());

export const editarCurso = createAction('[Lista cursos] Editar curso', props<{ curso: any }>());

export const carregarTodosCursos = createAction('[Cursos Resolver] Carregar todos os cursos');

export const todosCursosCarregados = createAction('[Carregar cursos effect] Todos os cursos carregados');
