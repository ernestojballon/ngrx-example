import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { ProductService } from '../../services/product.service';
import productActions from '../actions/store.actions';

@Injectable()
export default class Effects {

  loadProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(productActions.loadProducts),
      mergeMap( () => this.productService.getProducts()),
      map( products => productActions.loadProductsSuccess({products})),
      catchError(error => of(productActions.loadProductsFailure({error})))
    )
  )

  constructor(private actions$: Actions, private productService:ProductService) {}

}
