import {
    createReducer,
    MetaReducer,
    on
  } from '@ngrx/store';
  import { environment } from '../../../../environments/environment';
  import { Product } from '../models/product';
  import productActions from './actions/store.actions';
  import storeReducers from './reducer';
  
  
  const stateNameKey:string = 'ProductState';
  
  export interface IStoreState {
    products: Product[];
    error: any;
  }
  const initialState: IStoreState = { 
    products: undefined,
    error: undefined
  };
  const reducers = createReducer(
    initialState,
    on(productActions.loadProductsSuccess, storeReducers.loadProductsSuccessReducer),
    on(productActions.loadProductsFailure, storeReducers.loadProductsFailureReducer)
  );
  
   const metaReducers: MetaReducer<IStoreState>[] = !environment.production ? [] : [];
  
  export default {
    stateNameKey,
    reducers,
    metaReducers
  }