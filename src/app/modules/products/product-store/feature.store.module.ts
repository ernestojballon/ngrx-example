import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import storeEffects from './effects/store.effects';
import fromStoreReducer from './store';

@NgModule({
    imports: [CommonModule,
        StoreModule.forFeature(
          fromStoreReducer.stateNameKey, 
          fromStoreReducer.reducers, 
          { metaReducers: fromStoreReducer.metaReducers }),
        EffectsModule.forFeature([storeEffects])],
    exports: [],
    declarations: [],
    providers: [],
})
export class ProductStoreModule { }
