import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { reducers,metaReducers } from './globalStore.reducers';


@NgModule({
    imports: [
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
              strictStateImmutability: true,
              strictActionImmutability: true
            }
          }),
          StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
          EffectsModule.forRoot([]),
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class GlobalStoreModule { }
