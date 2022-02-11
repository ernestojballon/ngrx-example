import { createFeatureSelector, createSelector } from "@ngrx/store";
import fromStoreReducer,{ IStoreState }  from '../store';

const selectFeatureState = createFeatureSelector<IStoreState>(
  fromStoreReducer.stateNameKey
    );
  
export const selectJokes = createSelector(
  selectFeatureState,
    (state: IStoreState) => state.jokes
);
  
export default{
  selectJokes
}