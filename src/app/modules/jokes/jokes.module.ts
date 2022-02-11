import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JokesComponentComponent } from './components/jokes-component/jokes-component.component';
import { JokesRoutingModule } from './jokes-routing.module';
import { JokesStoreModule } from './jokes-store/feature.store.module';

@NgModule({
    imports: [
        CommonModule,
        JokesRoutingModule,
        FormsModule,
        JokesStoreModule
    ],
    exports: [],
    declarations: [
        JokesComponentComponent
    ],
    providers: [],
})
export class JokesModule { }
