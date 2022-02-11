import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponentComponent } from './components/jokes-component/jokes-component.component';

export const routes: Routes = [
    { path: "jokes", component: JokesComponentComponent },

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JokesRoutingModule { }
