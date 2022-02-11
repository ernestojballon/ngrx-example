import { createAction, props } from '@ngrx/store';
import { IJoke } from '../../models/joke';

// Create and and export actions

const loadJokes = createAction(
  '[On Effect Action] Load Jokes',
  props<{ numberJokes:number }>()
)
const loadJokesSuccess = createAction(
  '[On Store Action] Load Jokes Success ',
  props<{ jokes: IJoke[] }>()
)
const loadJokesFailure = createAction(
  '[On Store Action] Load Jokes Failure',
  props<{ error:any }>()
)


export default {
  loadJokes,
  loadJokesSuccess,
  loadJokesFailure
}
