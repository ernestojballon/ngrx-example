import { createFeatureSelector, createSelector } from "@ngrx/store";
import fromStoreReducer,{ IStoreState }  from '../store';

const selectFeatureState = createFeatureSelector<IStoreState>(
  fromStoreReducer.stateNameKey
    );
  
export const selectProducts = createSelector(
  selectFeatureState,
    (state: IStoreState) => state.products
  );
  
export default{
  selectProducts
}