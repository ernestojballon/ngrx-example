import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap, flatMap } from 'rxjs/operators';
import { IJoke } from '../../models/joke';
import { JokesService } from '../../services/jokes.service';

import jokesActions from '../actions/store.actions';

@Injectable()
export default class Effects {
  constructor(
    private actions$: Actions,
    private jokesService: JokesService
    ) {

  }
  
  loadProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(jokesActions.loadJokes),
      flatMap( action => this.jokesService.getChuckNorrisJokes(action.numberJokes)),
      map( jokes => jokesActions.loadJokesSuccess({jokes})),
      catchError(error => of(jokesActions.loadJokesFailure({error})))
    )
  )

}
