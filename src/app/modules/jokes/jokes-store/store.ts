import {
    createReducer,
    MetaReducer,
    on
  } from '@ngrx/store';
  import { environment } from '../../../../environments/environment';
import { IJoke } from '../models/joke';
  import storeActions from './actions/store.actions';
  import storeReducers from './reducers/store.reducers';
  
  const stateNameKey:string = 'JokesState';
  
  // Define feature state
  export interface IStoreState {
    jokes: IJoke[];
    err: any;
  }
  
  // Define the initial state
  export const initialState: IStoreState = { 
    jokes: [{
      id: '278',
      joke: "They had to edit the first ending of 'Lone Wolf McQuade' after Chuck Norris kicked David Carradine's ass, then proceeded to barbecue and eat him.",
      }],
    err: undefined
  };

  // Define reducer 
  export const reducers = createReducer(
      initialState,
      on(storeActions.loadJokesSuccess, storeReducers.loadJokesSuccess),
      on(storeActions.loadJokesFailure, storeReducers.loadJokesFailure)
  );
  
  export const metaReducers: MetaReducer<IStoreState>[] = !environment.production ? [] : [];
  
  export default {
    stateNameKey,
    reducers,
    metaReducers
  }