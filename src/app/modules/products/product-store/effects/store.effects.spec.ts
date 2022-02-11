import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import storeEffects from './store.effects';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: storeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        storeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<storeEffects>(storeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
