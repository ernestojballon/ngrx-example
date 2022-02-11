import { createAction, props } from '@ngrx/store';

import { Product } from '../../models/product';

export const loadProducts = createAction(
  '[On Effect Action] Load Products'
);

export const loadProductsSuccess = createAction(
  '[On Store Action] Load Products Success',
  props<{ products: Product[] }>()
)

export const loadProductsFailure = createAction(
  '[On Store Action] Load Products Failure',
  props<{ error: any }>()
);

export default {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure
}
